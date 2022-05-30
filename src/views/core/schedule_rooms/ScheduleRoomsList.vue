<script setup lang="ts">
import { ScheduleName } from '@core/domain/scheduling/schedule_rooms/schedule-name-model'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import ScheduleNameService from '@services/schedule_rooms/schedule-name-service'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchList from '@components/layouts/List/SearchList.vue'
import { BasePaginator } from '@core/domain/pagination/Paginator'
import Alert from '@components/alerts/Alert.vue'
import { generateSuccessAlert } from '@core/helpers/alert'

const router = useRouter()
const columns = {
  id: {
    label: 'ID',
    align: 'end',
    headerCellClass: 'py-1.5',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
  },
  nome: {
    label: 'Nome',
    align: 'start',
    format: (value: string) => value[0].toUpperCase() + value.substring(1),
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
  dropdown: {
    label: '',
    align: 'end',
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
}

let paginator = ref(new BasePaginator<ScheduleName>())
const scheduleNameService: ScheduleNameService = new ScheduleNameService()

onMounted(async () => {
  paginator.value = await scheduleNameService.getAll([], paginator.value)
})

const onUpdatePaginationPage = async (page: number) => {
  let patientPaginator = new BasePaginator<ScheduleName>()
  patientPaginator.pageable.pageNumber = page
  paginator.value = (await scheduleNameService.getAll(
    [],
    patientPaginator
  )) as BasePaginator<ScheduleName>
}

const refAlert = ref()
const onCreate = () => router.push('/schedule_rooms/0')
const onEdit = (id: number) => router.push(`/schedule_rooms/${id}`)
const onDelete = async (id: number) => {
  await scheduleNameService.deleteById(id).then(async (response) => {
    if (IsSuccessfulStatusCode(response.status)) {
      generateSuccessAlert(
        refAlert.value,
        'Cadastro de Salas e Agendas',
        'Sala/Agenda excluida com sucesso'
      )
      paginator.value = await scheduleNameService.getAll([], paginator.value)
    }
  })
}
</script>

<template>
  <Alert ref="refAlert" />
  <SearchList
    title="Agenda e Salas"
    :paginator="paginator"
    :columns="columns"
    :can-create="true"
    :can-edit="true"
    :can-delete="true"
    :can-filter="false"
    @on-edit="onEdit"
    @on-create="onCreate"
    @on-delete="onDelete"
    @update-pagination-page="onUpdatePaginationPage"
  />
</template>
