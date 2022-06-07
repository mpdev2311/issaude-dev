<script setup lang="ts">
import StepGroup from '@components/layouts/Step/StepGroup/StepGroup.vue'
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { LocalAttendance } from './local-attendance-model'
import { store } from '@core/store'
import { AxiosResponse } from 'axios'
import LocalAttendanceService from './local-attendance-service'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import { getFullAddressByCep } from '@core/helpers/address'
import BasicService from '@domain/basics'
import { Uf } from '@domain/basic/uf'
import { Company } from '@domain/company/company-model'
import CompanyService from '@domain/company/company-service'
import { generateErrorAlert } from '@core/helpers/alert'

const steps = ref([{ id: 1, description: 'Cadastro' }])
const router = useRouter()
const state = reactive({
  localAttendance: {} as LocalAttendance,
  estados: [] as Uf[],
  companies: [] as Company[],
})
const basicService = new BasicService()
const localAttendanceService = new LocalAttendanceService()
const companyService = new CompanyService()

onMounted(async () => {
  await loadTypes()
  const { id } = router.currentRoute.value.params
  state.localAttendance =
    id !== '0' ? await localAttendanceService.getById(id) : new LocalAttendance()
})

const loadTypes = async () => {
  const promisses = await Promise.all([basicService.findEstados(), companyService.getAll()])
  state.estados = promisses[0]
  state.companies = promisses[1].content
}

const onCancel = async () => router.push('/local_attendances')
const onSave = async () => {
  if (!state.localAttendance.companies?.id) {
    generateErrorAlert('Cadastro de Local de Atendimento', 'Informe uma empresa.')
    return
  }
  let response = {} as AxiosResponse<any>
  setLocalAttendanceDefaultData(state.localAttendance)

  response = state.localAttendance.id
    ? await localAttendanceService.update(state.localAttendance)
    : await localAttendanceService.create(state.localAttendance)

  if (IsSuccessfulStatusCode(response.status)) {
    router.push('/local_attendances')
  }
}

const getAddressData = async () => {
  const cep = state.localAttendance.cep?.toString()
  if (!cep || cep.length < 5) {
    return
  }
  const address = await getFullAddressByCep(cep)
  state.localAttendance.bairro = address.bairro
  state.localAttendance.cidade = address.localidade
  state.localAttendance.endereco = address.logradouro
  state.localAttendance.uf = address.uf
  const estado = state.estados.find((state) => state.sigla === address.uf)
  if (estado) {
    state.localAttendance.id_uf = estado.id
  }
}

const setLocalAttendanceDefaultData = (localAttendance: LocalAttendance) => {
  const user = store.getters.user
  localAttendance.id_corp = user.id_corp
  localAttendance.ativo = true
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
              <div class="sm:col-span-1" v-if="state.localAttendance.id">
                <label for="id" class="block text-sm font-medium text-gray-700"> Prontuário </label>
                <div class="mt-2 max-w-5xl">
                  <input
                    disabled
                    v-model="state.localAttendance.id"
                    type="number"
                    name="id"
                    id="id"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="local" class="block text-sm font-medium text-gray-700"> Local </label>
                <div class="mt-2 max-w-5xl">
                  <input
                    v-model="state.localAttendance.local"
                    type="text"
                    name="local"
                    id="local"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="telefone" class="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <div class="mt-2 max-w-5xl">
                  <input
                    v-maska="'(##)#####-####'"
                    v-model="state.localAttendance.telefone"
                    type="text"
                    name="telefone"
                    id="telefone"
                    autocomplete="given-name"
                    maxlength="15"
                    class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="cep" class="block text-sm font-medium text-gray-700"> CEP </label>
                <div class="mt-2 max-w-5xl">
                  <input
                    v-maska="'#####-###'"
                    @keyup="getAddressData()"
                    v-model="state.localAttendance.cep"
                    type="text"
                    name="cep"
                    id="cep"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="endereco" class="block text-sm font-medium text-gray-700">
                  Endereço
                </label>
                <div class="mt-2 max-w-5xl">
                  <input
                    v-model="state.localAttendance.endereco"
                    type="text"
                    name="endereco"
                    id="endereco"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="bairro" class="block text-sm font-medium text-gray-700"> Bairro </label>
                <div class="mt-2 max-w-5xl">
                  <input
                    v-model="state.localAttendance.bairro"
                    type="text"
                    name="bairro"
                    id="bairro"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="cidade" class="block text-sm font-medium text-gray-700"> Cidade </label>
                <div class="mt-2 max-w-5xl">
                  <input
                    v-model="state.localAttendance.cidade"
                    type="text"
                    name="cidade"
                    id="cidade"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="numero" class="block text-sm font-medium text-gray-700"> Nº </label>
                <div class="mt-2 max-w-5xl">
                  <input
                    v-model="state.localAttendance.numero"
                    type="number"
                    name="numero"
                    id="numero"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="uf" class="block text-sm font-medium text-gray-700"> UF </label>
                <div class="mt-1">
                  <select
                    v-model="state.localAttendance.id_uf"
                    id="origin"
                    name="origin"
                    autocomplete="protudo"
                    class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    :selected="state.localAttendance.id_uf"
                  >
                    <option v-for="item in state.estados" :key="item.id" v-bind:value="item.id">
                      {{ item.sigla }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="id_corp" class="block text-sm font-medium text-gray-700">
                  Empresa
                </label>
                <div class="mt-2 max-w-5xl">
                  <select
                    v-model="state.localAttendance.companies"
                    id="company"
                    name="company"
                    autocomplete="protudo"
                    class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    :selected="state.localAttendance.companies"
                  >
                    <option
                      v-for="item in state.companies"
                      :key="item.id"
                      v-bind:value="{ ...item }"
                    >
                      {{ item.nome }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </StepGroup>
</template>
