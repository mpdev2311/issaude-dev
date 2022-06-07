<script setup lang="ts">
import SearchList from '@components/layouts/List/SearchList.vue'
import { BasePaginator } from '@domain/pagination/Paginator'
import { ProcedureType } from './procedure-type-model'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import ProcedureTypeService from './procedure-type-service'
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
  nome: {
    label: 'Procedimento',
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

let paginator = ref(new BasePaginator<ProcedureType>())
const procedureTypeService = new ProcedureTypeService()

onMounted(async () => {
  paginator.value = await procedureTypeService.getAll(undefined, paginator.value)
})

const onUpdatePaginationPage = async (page: number) => {
  let procedureTypePaginator = new BasePaginator<ProcedureType>()
  procedureTypePaginator.pageable.pageNumber = page
  paginator.value = await procedureTypeService.getAll(undefined, procedureTypePaginator)
}

const onCreate = () => router.push('/procedure_types/0')
const onEdit = (id: number) => router.push(`/procedure_types/${id}`)
const onDelete = async (id: number) => {
  await procedureTypeService.deleteById(id).then(async (response) => {
    if (IsSuccessfulStatusCode(response.status)) {
      paginator.value = await procedureTypeService.getAll(undefined, paginator.value)
    }
  })
}
</script>

<template>
  <SearchList
    title="Tipos de Procedimento"
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
