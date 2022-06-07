<script setup lang="ts">
import StepGroup from '@components/layouts/Step/StepGroup/StepGroup.vue'
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { AmbProcedure } from './amb-procedure-model'
import { store } from '@core/store'
import { AxiosResponse } from 'axios'
import AmbProcedureService from './amb-procedure-service'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import { generateErrorAlert } from '@core/helpers/alert'
import { ProcedureType } from '@domain/procedure-type/procedure-type-model'
import ProcedureTypeService from '@domain/procedure-type/procedure-type-service'
import { BasePaginator } from '@domain/pagination/Paginator'
import { TableName } from '@domain/table-name/table-name-model'
import TableNameService from '@domain/table-name/table-name-service'

const steps = ref([{ id: 1, description: 'Cadastro' }])
const router = useRouter()
const state = reactive({
  ambProcedure: {} as AmbProcedure,
  procedureTypes: {} as BasePaginator<ProcedureType>,
  tablePaginator: {} as BasePaginator<TableName>,
})

const ambProcedureService = new AmbProcedureService()
const procedureTypeService = new ProcedureTypeService()
const tableNameService = new TableNameService()

onMounted(async () => {
  const { id } = router.currentRoute.value.params
  state.ambProcedure = id !== '0' ? await ambProcedureService.getById(id) : new AmbProcedure()
  setAmbProcedureDefaultData(state.ambProcedure)
  state.procedureTypes = await procedureTypeService.getAll()
  state.tablePaginator = await tableNameService.getAll()
})

const onCancel = async () => router.push('/amb_procedures')
const onSave = async () => {
  if (!state.ambProcedure.descri) {
    generateErrorAlert('Cadastro de Procedimento AMB', 'Informe uma descricao.')
    return
  }
  if (!state.ambProcedure.preco) {
    generateErrorAlert('Cadastro de Procedimento AMB', 'Informe um preço.')
    return
  }
  if (!state.ambProcedure.uco) {
    generateErrorAlert('Cadastro de Procedimento AMB', 'Informe o campo UCO.')
    return
  }
  if (!state.ambProcedure.typeProcedure) {
    generateErrorAlert('Cadastro de Procedimento AMB', 'Informe um tipo de procedimento.')
    return
  }
  if (!state.ambProcedure.id_tabela) {
    generateErrorAlert(
      'Cadastro de Procedimento AMB',
      'Informe a tabela a qual o registro pertence.'
    )
    return
  }
  let response = {} as AxiosResponse<any>

  response = state.ambProcedure.id
    ? await ambProcedureService.update(state.ambProcedure)
    : await ambProcedureService.create(state.ambProcedure)

  if (IsSuccessfulStatusCode(response.status)) {
    router.push('/amb_procedures')
  }
}

const setAmbProcedureDefaultData = (ambProcedure: AmbProcedure) => {
  const user = store.getters.user
  // id_tabela sendo preenchido como padrao pois sera preenchido pelo modal no futuro
  ambProcedure.id_kit = 0
  ambProcedure.id_tabela = 3
  ambProcedure.id_user = user.id
  ambProcedure.id_corp = user.id_corp
  ambProcedure.ativo = true
  ambProcedure.exige_cid = false
}
</script>

<template>
  <StepGroup
    class="min-h-full test"
    :current="1"
    :steps="steps"
    @on-save="onSave"
    @on-cancel="onCancel"
  >
    <div class="px-4 py-2 flex-auto">
      <form class="space-y-4 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <div class="pt-1">
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-1" v-if="state.ambProcedure.id">
                <label for="first_name" class="block text-sm font-medium text-gray-700"> Id </label>
                <div class="mt-1">
                  <input
                    readonly
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.id"
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="first_name" class="block text-sm font-medium text-gray-700">
                  Codigo
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.codigo"
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Descricao
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.descri"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Filme
                </label>
                <div class="mt-1">
                  <input
                    type="number"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.filme"
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Auxiliares
                </label>
                <div class="mt-1">
                  <input
                    type="number"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.auxiliares"
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  P. Anestesico
                </label>
                <div class="mt-1">
                  <input
                    type="number"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.porte_anestesico"
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Valor
                </label>
                <div class="mt-1">
                  <input
                    type="number"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.valor"
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Preço
                </label>
                <div class="mt-1">
                  <input
                    type="number"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.preco"
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Custo Real
                </label>
                <div class="mt-1">
                  <input
                    type="number"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.custo_real"
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Cod. Tabela
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.cod_tabela"
                  />
                </div>
              </div>
              <div class="sm:col-span-1 pt-4 px-4 self-center">
                <label>
                  <input
                    type="checkbox"
                    name="exige_cid"
                    id="recem_nascido"
                    v-model="state.ambProcedure.exige_cid"
                    class="mr-2 text-gray-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-gray-600"
                  />
                  <span class="text-gray-800">Exige CID</span>
                </label>
              </div>
              <div class="sm:col-span-1 pt-4 px-4 self-center">
                <label>
                  <input
                    type="checkbox"
                    name="grupo"
                    id="grupo"
                    v-model="state.ambProcedure.grupo"
                    class="mr-2 text-gray-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-gray-600"
                  />
                  <span class="text-gray-800">Grupo</span>
                </label>
              </div>
              <div class="sm:col-span-1 pt-4 px-4 self-center">
                <label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="recem_nascido"
                    v-model="state.ambProcedure.nivel_conta"
                    class="mr-2 text-gray-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-gray-600"
                  />
                  <span class="text-gray-800">Nivel Conta</span>
                </label>
              </div>
              <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium text-gray-700"
                  >Tip. Proced.</label
                >
                <select
                  v-model="state.ambProcedure.typeProcedure"
                  id="typeProcedure"
                  name="typeProcedure"
                  class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  :selected="state.ambProcedure?.typeProcedure"
                >
                  <option
                    v-for="item in state.procedureTypes.content"
                    :key="item.id"
                    v-bind:value="{ ...item }"
                  >
                    {{ item.nome }}
                  </option>
                </select>
              </div>
              <div class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700"> Uco </label>
                <div class="mt-1">
                  <input
                    type="number"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.uco"
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Fator Partic.
                </label>
                <div class="mt-1">
                  <input
                    type="number"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.ambProcedure.fator_participacao"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium text-gray-700"
                  >Tabela</label
                >
                <select
                  v-model="state.ambProcedure.id_tabela"
                  id="typeProcedure"
                  name="typeProcedure"
                  class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  :selected="state.ambProcedure?.id_tabela"
                >
                  <option
                    v-for="item in state.tablePaginator.content"
                    :key="item.id"
                    v-bind:value="item.id"
                  >
                    {{ item.descri }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </StepGroup>
</template>
