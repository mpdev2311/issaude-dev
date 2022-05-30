<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import SearchList from '@components/layouts/List/SearchList.vue'
import SpecialtyService from '@services/specialties/specialty-service'
import { Specialty } from '@core/domain/specialty/specialty-model'
import { BasePaginator } from '@core/domain/pagination/Paginator'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import { generateSuccessAlert } from '@core/helpers/alert'
import Alert from '@components/alerts/Alert.vue'

const router = useRouter()
const refAlert = ref()
const columns = {
  id: {
    label: 'ID',
    align: 'end',
    headerCellClass: 'py-1.5',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
  },
  nome_especialidade: {
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

let paginator = ref(new BasePaginator<Specialty>())
const specialtyService = new SpecialtyService()

onMounted(async () => {
  paginator.value = await specialtyService.getAll([], paginator.value)
})

const onUpdatePaginationPage = async (page: number) => {
  let specialtyPaginator = new BasePaginator<Specialty>()
  specialtyPaginator.pageable.pageNumber = page
  paginator.value = await specialtyService.getAll([], specialtyPaginator)
}

const onCreate = () => router.push('/specialties/0')
const onEdit = (id: number) => router.push(`/specialties/${id}`)
const onDelete = async (id: number) => {
  await specialtyService.deleteById(id).then(async (response) => {
    if (IsSuccessfulStatusCode(response.status)) {
      generateSuccessAlert(
        refAlert.value,
        'Cadastro Especialidade',
        'Especialidade excluida com sucesso'
      )
      paginator.value = await specialtyService.getAll([], paginator.value)
    }
  })
}
</script>

<template>
  <Alert ref="refAlert" />
  <SearchList
    title="Especialidades"
    :paginator="paginator"
    :columns="columns"
    :can-create="true"
    :can-edit="true"
    :can-filter="false"
    :can-delete="true"
    @on-delete="onDelete"
    @on-edit="onEdit"
    @on-create="onCreate"
    @update-pagination-page="onUpdatePaginationPage"
  />
</template>
