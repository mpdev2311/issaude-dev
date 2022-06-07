<script setup lang="ts">
import SearchList from '@components/layouts/List/SearchList.vue'
import { BasePaginator } from '@domain/pagination/Paginator'
import { LocalAttendance } from './local-attendance-model'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import LocalAttendanceService from './local-attendance-service'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const columns = {
  id: {
    label: 'ID',
    align: 'end',
    headerCellClass: 'py-1.5',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
  },
  local: {
    label: 'Local de Atendimento',
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

let paginator = ref(new BasePaginator<LocalAttendance>())
const localAttendanceService = new LocalAttendanceService()

onMounted(async () => {
  paginator.value = await localAttendanceService.getAll(undefined, paginator.value)
})

const onUpdatePaginationPage = async (page: number) => {
  let localAttendancePaginator = new BasePaginator<LocalAttendance>()
  localAttendancePaginator.pageable.pageNumber = page
  paginator.value = await localAttendanceService.getAll(undefined, localAttendancePaginator)
}

const onCreate = () => router.push('/local-attendance/0')
const onEdit = (id: number) => router.push(`/local-attendance/${id}`)
const onDelete = async (id: number) => {
  await localAttendanceService.deleteById(id).then(async (response) => {
    if (IsSuccessfulStatusCode(response.status)) {
      paginator.value = await localAttendanceService.getAll(undefined, paginator.value)
    }
  })
}
</script>

<template>
  <SearchList
    title="Locais de Atendimento"
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
