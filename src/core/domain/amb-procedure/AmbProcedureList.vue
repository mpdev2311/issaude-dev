<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import SearchList from '@components/layouts/List/SearchList.vue'
import AmbProcedureService from './amb-procedure-service'
import { AmbProcedure } from './amb-procedure-model'
import { BasePaginator } from '@domain/pagination/Paginator'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import { TableName } from '@domain/table-name/table-name-model'
import TableNameService from '@domain/table-name/table-name-service'
import { Param } from '@domain/param/param-model'
import { createParameter } from '@core/helpers/param'

const router = useRouter()
const columns = {
  id: {
    label: 'ID',
    align: 'end',
    headerCellClass: 'py-1.5',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
  },
  descri: {
    label: 'Descrição',
    align: 'start',
    format: (value: string) => value[0].toUpperCase() + value.substring(1),
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
  codigo: {
    label: 'Codigo',
    align: 'start',
    format: (value: string) => value[0].toUpperCase() + value.substring(1),
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
  valor: {
    label: 'Valor',
    align: 'end',
    format: (value: number) => value?.toFixed(2) ?? '0.00',
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

const ambProcedureService = new AmbProcedureService()
const tableNameService = new TableNameService()

onMounted(async () => {
  state.tablePaginator = await tableNameService.getAll()
})

const state = reactive({
  paginator: {} as BasePaginator<AmbProcedure>,
  tablePaginator: {} as BasePaginator<TableName>,
  idTable: 0,
})

watch(
  () => state.idTable,
  async (value: number) => {
    if (value <= 0) return
    const ambProcedureParams = new Array<Param>()
    ambProcedureParams.push(createParameter('id_tabela', value.toString()))
    state.paginator = await ambProcedureService.getAll(ambProcedureParams)
  },
  { immediate: true, deep: true }
)

const onUpdatePaginationPage = async (page: number) => {
  let ambProcedurePaginator = new BasePaginator<AmbProcedure>()
  ambProcedurePaginator.pageable.pageNumber = page
  state.paginator = await ambProcedureService.searchAmbProcedure(
    undefined,
    state.idTable,
    ambProcedurePaginator
  )
}

const onCreate = () => router.push('/amb_procedures/0')
const onEdit = (id: number) => router.push(`/amb_procedures/${id}`)
const onDelete = async (id: number) => {
  await ambProcedureService.deleteById(id).then(async (response) => {
    if (IsSuccessfulStatusCode(response.status)) {
      state.paginator = await ambProcedureService.getAll([], state.paginator)
    }
  })
}
</script>

<template>
  <SearchList
    title="Procedimentos AMB"
    :paginator="state.paginator"
    :columns="columns"
    :can-create="true"
    :can-edit="true"
    :can-filter="true"
    :can-delete="true"
    @on-delete="onDelete"
    @on-edit="onEdit"
    @on-create="onCreate"
    @update-pagination-page="onUpdatePaginationPage"
  >
    <select
      v-model="state.idTable"
      id="select-tabela"
      name="select-tabela"
      autocomplete="local"
      class="bg-white mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
    >
      <option v-bind:value="0">Selecione</option>
      <option v-for="table in state.tablePaginator.content" :key="table.id" :value="table.id">
        {{ table.descri }}
      </option>
    </select>
  </SearchList>
</template>
