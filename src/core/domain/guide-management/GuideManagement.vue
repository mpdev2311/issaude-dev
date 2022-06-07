<template>
  <div>
    <h3 class="text-gray-700 text-2xl font-semibold">Guia de Consulta</h3>

    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-t-lg shadow-md">
          <form class="space-y-4 divide-y divide-gray-200">
            <div class="space-y-8 divide-y divide-gray-200">
              <div class="pt-1">
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
                  <div class="col-span-6 sm:col-span-1">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Guia Prestador
                    </label>
                    <div class="mt-3 max-w-5xl">
                      <input
                        v-model="guideManagement.id"
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-2">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Paciente
                    </label>
                    <div class="mt-2 max-w-5xl">
                      <Combobox
                        class="bg-gray-100"
                        autocomplete="given-name"
                        :options="state.patients"
                        label="nome"
                        v-model="guideManagement.id_paciente"
                        @change-search="onSearchPatient"
                        hidden-icon
                      >
                        <!-- <template #noResults>
                  <button
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Novo
                    Paciente</button>
                </template> -->
                      </Combobox>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-2">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Empresa Solicitante
                    </label>
                    <div class="mt-2 max-w-5xl">
                      <select
                        v-model="guideManagement.id_empresa_solicitante"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="bg-gray-100 mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option v-bind:value="0">Selecione</option>
                        <option v-for="i in state.companies" :key="i.id" :value="i.id">{{ i.nome }}</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1 m-2">
                    <label for="nome" class="block text-sm font-medium text-gray-700">
                      Tipo de Guia
                    </label>
                    <div class="mt-2">
                      <select
                        disabled
                        v-model="guideManagement.tipo"
                        name="agenda"
                        id="agenda"
                        autocomplete="agenda"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option v-bind:value="0">Selecione</option>
                        <option v-for="i in guidetypes" :key="i" :value="i.id">{{ i.nome }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-2">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Local de Atendimento
                    </label>
                    <div>
                      <select
                        v-model="guideManagement.id_local_atendimento"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="bg-gray-100 mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option v-bind:value="0">Selecione</option>
                        <option v-for="i in localAccess.content" :key="i" :value="2">
                          {{ i.localAttendance.local }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-2">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Profissional Execultante
                    </label>
                    <div>
                      <select
                        v-model="guideManagement.id_profissional_executante"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecionar</option>
                        <option v-for="i in professionalPerformer.content" :key="i" :value="i.id">
                          {{ i.nome }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-2">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Profissional Solicitante
                    </label>
                    <div>
                      <Combobox
                        v-model="guideManagement.id_solicitante"
                        class="bg-gray-100"
                        autocomplete="given-name"
                        :options="state.healthProfessionals?.content ?? []"
                        label="nome"
                        @change-search="onSearchHealthProfessional"
                        hidden-icon
                      >
                      </Combobox>
                    
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-2">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Profissional Autorizador
                    </label>
                    <div class="mt-5">
                      <select
                        v-model="guideManagement.id_medico_autorizador"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecionar</option>
                        <option v-for="i in professionalAuthorizing.content" :key="i" :value="i.id">
                          {{ i.nome }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-2">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Especialidade
                    </label>
                    <div class="mt-5">
                      <select
                        v-model="guideManagement.id_especialidade"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecione</option>
                        <option
                          v-for="i in providers.content"
                          :key="i"
                          :value="i.primeira_especialidade.id"
                        >
                          {{ i.primeira_especialidade.nome_especialidade }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Número de Guia
                    </label>
                    <div class="mt-0 lg:p-4">
                      <input
                        v-model="guideManagement.numero_guia"
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-1">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Senha
                    </label>
                    <div class="mt-3 max-w-5xl">
                      <input
                        v-model="guideManagement.senha"
                        type="password"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-1">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Data emissão
                    </label>
                    <div class="mt-6">
                      <input
                        type="date"
                        pattern="\d{4}-\d{1,2}-\d{1,2}"
                        v-model="guideManagement.emissao"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-1">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Tipo de Doença
                    </label>
                    <div class="lg:mt-6">
                      <select
                        v-model="guideManagement.tipo_doenca"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="bg-gray-100 mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecionar</option>
                        <option v-bind:value="'A'">Aguda</option>
                        <option v-bind:value="'C'">Crônica</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Tempo de Doença
                    </label>
                    <div class="lg:mt-6">
                      <input
                        v-model="guideManagement.tempo_doenca"
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-1">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Indicação de Acidente
                    </label>
                    <div class="lg:mt-6">
                      <select
                        v-model="guideManagement.indicacao_acidente"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecionar</option>
                        <option v-bind:value="0">Trabalho</option>
                        <option v-bind:value="1">Transito</option>
                        <option v-bind:value="2">Outros</option>
                        <option v-bind:value="9">Não Acidente</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-1">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">
                      Cid Principal
                    </label>
                    <div class="mt-6">
                      <input
                        v-model="guideManagement.cid_principal"
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="family-name"
                        class="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Tipo de Atendimento
                    </label>
                    <div class="lg:mt-6">
                      <select
                        v-model="guideManagement.tipo_atendimento"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecionar</option>
                        <option v-for="i in getTypeService" :key="i" :value="i.id">
                          {{ i.nome }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">
                      Data de Atendimento
                    </label>
                    <div class="lg:mt-6">
                      <input
                        type="date"
                        v-model="guideManagement.data_atendimento"
                        name="last_name"
                        id="last_name"
                        autocomplete="family-name"
                        class="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">
                      Código de Procedimento
                    </label>
                    <div class="lg:mt-6">
                      <input
                        v-model="guideManagement.cod_procedimento"
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="family-name"
                        class="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1 max-w-5xl">
                    <label for="local" class="flex-col block text-sm font-medium text-gray-700">
                      Tipo de Consulta
                    </label>
                    <div class="lg:mt-6">
                      <select
                        v-model="guideManagement.tipo_consulta"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecionar</option>
                        <option v-bind:value="1">Primeira Consulta</option>
                        <option v-bind:value="2">Seguimento</option>
                        <option v-bind:value="3">Pré-Natal</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Tipo de Saída
                    </label>
                    <div class="mt-6">
                      <select
                        v-model="guideManagement.tipo_saida"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecionar</option>
                        <option v-bind:value="1">Retorno</option>
                        <option v-bind:value="2">Retorno SADT</option>
                        <option v-bind:value="3">Referência</option>
                        <option v-bind:value="4">Internação</option>
                        <option v-bind:value="5">Alta</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1 max-w-5xl">
                    <label for="atendimento_rn" class="block text-sm font-medium text-gray-700">
                      Atendimento RN
                    </label>
                    <div class="lg:mt-6">
                      <select
                        v-model="guideManagement.atendimento_rn"
                        id="select-atendimento_rn"
                        name="atendimento_rn"
                        autocomplete="atendimento_rn"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecionar</option>
                        <option v-bind:value="'S'">Sim</option>
                        <option v-bind:value="'N'">Não</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-1 max-w-5xl">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Carater
                    </label>
                    <div class="mt-6">
                      <select
                        v-model="guideManagement.carater_internacao"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
                      >
                        <option value="">Selecionar</option>
                        <option v-bind:value="'E'">Eletiva</option>
                        <option v-bind:value="'U'">Urgência</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-1">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Validade da senha
                    </label>
                    <div class="lg:mt-6">
                      <input
                        type="date"
                        pattern="\d{1,2}/\d{1,2}/\d{4}"
                        v-model="guideManagement.validade_senha"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label for="obs" class="block text-sm font-medium text-gray-700"> Obs: </label>
                    <div class="mt-1">
                      <textarea
                        v-model="guideManagement.obs"
                        id="about"
                        name="about"
                        rows="1"
                        class="w-full shadow-sm bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-200 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex justify-end px-4 py-3 bg-gray-50 rounded-b-lg text-right sm:px-6">
      <button
        @click="onCancel()"
        type="button"
        class="space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
      >
        Voltar
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        @click="onSave()"
        type="button"
        class="space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4"
      >
        Salvar
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapMutations, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import { GuideManagement } from './guide-management-model'
import Combobox from '@components/combobox/Combobox.vue'
import { PAGINATION_SIZE } from '@core/constaints'
import { RequestPatient } from '@domain/patient/patient'
import { Patient } from './guide-management-model'
import { PatientService } from '@domain/patient/patient-service'
import { formatDate, formatDateReverse } from '@core/helpers/date'
import { RequestHealthProfessional } from '@domain/health-professional/health-professional-model'
import HealthProfessionalService from '@domain/health-professional/health-professional-service'
import { HealthProfessional } from '@domain/health-professional/health-professional-model'
import { Company } from '@domain/company/company-model'
import CompanyService from '@domain/company/company-service'

export default defineComponent({
  components: {
    Combobox,
  },
  methods: {
    ...mapMutations([
      'guideManagement',
      'guideManagements',
      'localAccess',
      'providers',
      'guidetypes',
      'getTypeService',
      'professionalPerformer',
      'professionalRequesting',
      'professionalAuthorizing',
    ]),
  },

  computed: {
    ...mapState([
      'guideManagement',
      'localAccess',
      'providers',
      'guidetypes',
      'getTypeService',
      'professionalPerformer',
      'professionalRequesting',
      'professionalAuthorizing',
    ]),
    ...mapGetters([
      'guideManagement',
      'localAccess',
      'providers',
      'guidetypes',
      'getTypeService',
      'professionalPerformer',
      'professionalRequesting',
      'professionalAuthorizing',
    ]),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()
    const patientService = new PatientService()
    const companyService = new CompanyService()

    const guideManagement = ref<GuideManagement>({
      id: 0,
      numero_guia: '0',
      emissao: '',
      id_profissional_executante: 0,
      id_paciente: '',
      tipo_doenca: '',
      tempo_doenca: '',
      indicacao_acidente: 2,
      cid_principal: '',
      cid1: null,
      cid2: null,
      cid3: null,
      data_atendimento: '',
      cod_procedimento: '',
      tipo_consulta: 0,
      tipo_saida: 0,
      obs: '',
      cod_tabela_hm: '0',
      tempo_doe: '',
      tipo: 5,
      data_fim: '',
      tipo_atendimento: '',
      id_agenda: 1,
      consulta: true,
      senha: '',
      id_agenda_nome: 1,
      id_local_atendimento: 0,
      id_empresa_contratada: 1,
      usuario: '',
      //data_gravacao: "2021-11-08T18:55:25.421+00:00",
      id_solicitante: 0,
      id_corp: 1,
      id_tipo_internacao: null,
      id_regime_internacao: null,
      carater_internacao: '',
      id_user: 1,
      id_empresa_solicitante: 0,
      qdiarias: null,
      id_plano: 1,
      id_acomodacao: null,
      alta: null,
      id_entrega: null,
      data_hora_recebimento: null,
      id_user_recebeu: null,
      hora_atendimento: '',
      data_autorizacao: '',
      justificativa: null,
      id_especialidade: 0,
      id_medico_autorizador: 0,
      atendimento_rn: '',
      sintomas: null,
      prova_diagnostica: null,
      ativo: true,
      guia_glosa: null,
      validade_senha: '',
      data_solicitacao: '',
      cod_solicitante: null,
      cod_executante: null,
      numero_guia_solicitacao_internacao: null,
      is_venda: false,
      id_prestador: null,
      id_user_quitou: null,
      dados_neo_natal: null,
      dados_parto: null,
    })

    store.dispatch('GUIDE_MANAGEMENT_STORE_SET_BLANK', guideManagement.value)

    onMounted(async () => {
       await loadTypes()
      await store.dispatch('LOAD_LOCAL_ACESS')
      await store.dispatch('PROVIDER_STORE_LOAD')
      await store.dispatch('GUIDES_TYPE_STORE_LOAD')
      await store.dispatch('TYPE_SERVICE_GUIDE_LOAD')
      await store.dispatch('PROFESSIONAL_PERFORMER_STORE_LOAD')
      await store.dispatch('PROFESSIONAL_REQUESTING_STORE_LOAD')
      await store.dispatch('PROFESSIONAL_AUTHORIZING_STORE_LOAD')

      const { id } = router.currentRoute.value.params

      if (id !== '0') {
        await store.dispatch(
          'GUIDE_MANAGEMENT_STORE_LOAD_BY_ID',
          router.currentRoute.value.params.id
        )
        await formatGuideDateReverseFields()
      } else {
        store.getters.guideManagement.tipo = 5
        await store.dispatch('GUIDE_MANAGEMENT_STORE_SET_BLANK', guideManagement.value)
      }
    })

    const onCancel = async () => {
      router.push('/guide-managements')
    }

    const onSave = async () => {
     store.getters.guideManagement.hora_atendimento = horaAtual();
      await store.dispatch('GUIDE_MANAGEMENT_STORE_SAVE')
    }

    let state = reactive({
      patients: [] as Patient[],
      healthProfessionals: [] as HealthProfessional[],
      companies: [] as Company[],
    })

    const loadTypes = async () => {
      const promisses = await Promise.all([companyService.getAll()])
      state.companies = promisses[0].content
    }

    const onSearchPatient = async (name: string) => {
      if (!name.length) return
      let requestPatient = new RequestPatient(0, PAGINATION_SIZE, name, store.getters.user.id_corp)
      const patientResults = await patientService.searchPatient(requestPatient)

      state.patients = patientResults.content
    }

    const onSearchHealthProfessional = async (name: string) => {
      const requestHealthProfessional = new RequestHealthProfessional(
        0,
        PAGINATION_SIZE,
        name,
        store.getters.user.id_corp,
        false,
        1,
        true
      )      
      state.healthProfessionals = await HealthProfessionalService.getAll(requestHealthProfessional)
    }

    let horaAtual = () => {
      const data = new Date();
      let hora = data.getHours(); 
      let min = data.getMinutes(); 
      let seg = data.getSeconds(); 
      return hora.toString.length < 2? '0'+hora + ':' + min + ':' + seg : hora + ':' + min + ':' + seg;
       
    }

    const formatGuideDateReverseFields = async () => {
      store.getters.guideManagement.emissao = formatDateReverse(
        store.getters.guideManagement.emissao
      )
      store.getters.guideManagement.data_atendimento = formatDateReverse(
        store.getters.guideManagement.data_atendimento
      )
      store.getters.guideManagement.validade_senha = formatDateReverse(
        store.getters.guideManagement.validade_senha
      )
    }

    return {
      onSave,
      onCancel,
      onSearchPatient,
      state,
      onSearchHealthProfessional
    }
  },
})
</script>
