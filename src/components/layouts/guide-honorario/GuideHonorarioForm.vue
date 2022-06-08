<template>
  <form class="space-y-4 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="pt-1">
        <div class="mt-3 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1 lg:col-span-3">
          
          <div class="col-span-6 sm:col-span-1">
            <label for="first_name" class="lg:pl-6 block text-sm font-medium text-gray-700">
              Guia Prestador:
            </label>
            <div class="mt-0 max-w-5xl lg:p-4">
              <input
                v-model="guideManagement.id_prestador"
                type="text"
                name="first_name"
                id="first_name"
                autocomplete="given-name"
                class="bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
              />
            </div>
          </div>

          <div class="col-span-6 sm:col-span-1">
            <label for="first_name" class="lg:pl-6 block text-sm font-medium text-gray-700">
              Guia operadora:
            </label>
            <div class="mt-0 max-w-5xl lg:p-4">
              <input
                v-model="guideManagement.numero_guia"
                type="text"
                name="first_name"
                id="first_name"
                autocomplete="given-name"
                class="shadow-sm focus:ring-indigo-500 bg-white focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
              />
            </div>
          </div>

          <div class="col-span-6 sm:col-span-2">
            <label for="first_name" class="block text-sm font-medium text-gray-700">
              Paciente:
            </label>
            <div class="mt-3 max-w-5xl">
              <Combobox
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
            <label for="local" class="block text-sm font-medium text-gray-700">
              Empresa executante:
            </label>
            <div class="mt-3">
              <select
                v-model="guideManagement.id_solicitante"
                id="select-local-atendimento"
                name="local"
                autocomplete="local"
                class="bg-white mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option v-bind:value="0">Selecione</option>
                <option v-for="i in localAccess.content" :key="i" :value="1">
                  {{ i.localAttendance.local }}
                </option>
              </select>
            </div>
          </div>

           <div class="col-span-6 sm:col-span-2">
            <label for="first_name" class="block text-sm font-medium text-gray-700">
              Empresa Solicitante:
            </label>
            <div class="mt-4 max-w-5xl">
              <select
                v-model="guideManagement.id_empresa_solicitante"
                id="select-local-atendimento"
                name="local"
                autocomplete="local"
                class="bg-white mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option v-bind:value="0">Selecione</option>
                <option v-for="i in localAccess.content" :key="i" :value="1">
                  {{ i.localAttendance.local }}
                </option>
              </select>
            </div>
          </div>

          <div class="col-span-6 sm:col-span-2">
            <label for="local" class="block text-sm font-medium text-gray-700">
              Profissional Autorizador:
            </label>
            <div class="mt-4 max-w-5xl">
              <select
                v-model="guideManagement.id_medico_autorizador"
                id="select-local-atendimento"
                name="local"
                autocomplete="local"
                class="mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option v-bind:value="0">Selecione</option>
                <option v-for="i in professionalAuthorizing.content" :key="i" :value="i.id">
                  {{ i.nome }}
                </option>
              </select>
            </div>
          </div>

          <div class="col-span-6 sm:col-span-2">
            <label for="local" class="block text-sm font-medium text-gray-700">
              Profissional executante:
            </label>
            <div class="mt-4">
              <select
                v-model="guideManagement.id_profissional_executante"
                id="select-local-atendimento"
                name="local"
                autocomplete="local"
                class="max-w-5xl block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option v-bind:value="0">Selecione</option>
                <option v-for="i in professionalRequesting.content" :key="i" :value="i.id">
                  {{ i.nome }}
                </option>
              </select>
            </div>
          </div>
          
          <div class="col-span-6 sm:col-span-2">
            <label for="local" class="block text-sm font-medium text-gray-700">
              Local de Atendimento:
            </label>
            <div class="mt-4">
              <select
                v-model="guideManagement.id_local_atendimento"
                id="select-local-atendimento"
                name="local"
                autocomplete="local"
                class="mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option value="0">Selecionar</option>

                <option v-for="i in localAccess.content" :key="i" :value="2">
                  {{ i.localAttendance.local }}
                </option>
              </select>
            </div>
          </div>

          <div class="col-span-6 sm:col-span-1 m-2">
            <label for="nome" class="block text-sm font-medium text-gray-700"> Tipo de Guia </label>
            <div class="lg:mt-4">
              <select
                disabled
                v-model="guideManagement.tipo"
                name="agenda"
                id="agenda"
                autocomplete="agenda"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option v-bind:value="0">Selecione</option>
                <option v-for="i in guidetypes" :key="i" :value="i.id">{{ i.nome }}</option>
              </select>
            </div>
          </div>

          <div class="col-span-6 sm:col-span-1">
            <label for="local" class="block text-sm font-medium text-gray-700">
              Atendimento RN:
            </label>
            <div class="lg:mt-5 max-w-5xl">
              <select
                v-model="guideManagement.atendimento_rn"
                id="select-local-atendimento"
                name="local"
                autocomplete="local"
                class="bg-white mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option value="">Selecionar</option>
                <option v-bind:value="'S'">Sim</option>
                <option v-bind:value="'N'">Não</option>
              </select>
            </div>
          </div>         

          <div class="col-span-6 sm:col-span-1">
            <label for="first_name" class="block text-sm font-medium text-gray-700">
              Guia Principal:
            </label>
            <div class="lg:mt-5 max-w-5xl">
              <input
                v-model="guideManagement.numero_guia_solicitacao_internacao"
                type="text"
                name="first_name"
                id="first_name"
                autocomplete="given-name"
                class="bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
              />
            </div>
          </div>

          <div class="col-span-6 sm:col-span-1">
            <label for="first_name" class="block text-sm font-medium text-gray-700">
              Data Emissão:
            </label>
            <div class="lg:mt-5 max-w-5xl">
              <input
                type="date"
                pattern="\d{4}-\d{1,2}-\d{1,2}"
                v-model="guideManagement.emissao"
                name="first_name"
                id="first_name"
                autocomplete="given-name"
                class="bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
              />
            </div>
          </div>

          
          <div class="col-span-6 sm:col-span-1">
            <label for="first_name" class="block text-sm font-medium text-gray-700"> Senha: </label>
            <div class="mt-2 max-w-5xl">
              <input
                v-model="guideManagement.senha"
                type="password"
                name="first_name"
                id="first_name"
                autocomplete="given-name"
                class="bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out"
              />
            </div>
          </div>

          <div class="col-span-6 sm:col-span-6">
            <label for="obs" class="block text-sm font-medium text-gray-700"> Obs: </label>
            <div class="mt-3 max-w-5xl">
              <textarea
                v-model="guideManagement.obs"
                id="about"
                name="about"
                rows="1"
                class="w-full shadow-sm bg-white focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-200 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapMutations, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import { GuideManagement } from '@domain/guide-management/guide-management-model'
import Combobox from '@components/combobox/Combobox.vue'
import { PAGINATION_SIZE } from '@core/constaints'
import { RequestPatient } from '@domain/patient/patient'
import { Patient } from '@domain/guide-management/guide-management-model'
import { PatientService } from '@domain/patient/patient-service'

export default defineComponent({
  components: { Combobox },
  methods: {
    ...mapMutations([
      'guideManagement',
      'guideManagements',
      'localAccess',
      'providers',
      'guidetypes',
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
      'professionalRequesting',
      'professionalAuthorizing',
    ]),
    ...mapGetters([
      'guideManagement',
      'localAccess',
      'providers',
      'guidetypes',
      'patients',
      'professionalRequesting',
      'professionalAuthorizing',
    ]),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()

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
      tipo: 6,
      data_fim: '',
      tipo_atendimento: '',
      id_agenda: 1,
      consulta: true,
      senha: '',
      id_agenda_nome: 1,
      id_local_atendimento: 0,
      id_empresa_contratada: 1,
      usuario: '',
      //  data_gravacao: "2021-11-08T18:55:25.421+00:00",
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
      hora_atendimento: '1970-01-01T18:53:00.000+00:00',
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
      await store.dispatch('GUIDES_TYPE_STORE_LOAD')
      await store.dispatch('LOAD_LOCAL_ACESS')
      await store.dispatch('PROVIDER_STORE_LOAD')
      await store.dispatch('PROFESSIONAL_REQUESTING_STORE_LOAD')
      await store.dispatch('PROFESSIONAL_AUTHORIZING_STORE_LOAD')
      const { id } = router.currentRoute.value.params

      if (id !== '0') {
        await store.dispatch(
          'GUIDE_MANAGEMENT_STORE_LOAD_BY_ID',
          router.currentRoute.value.params.id
        )
      } else {
        store.getters.guideManagement.tipo = 6
        await store.dispatch('GUIDE_MANAGEMENT_STORE_SET_BLANK', guideManagement.value)
      }
    })

    const onCancel = async () => {
      router.push('/guide-managements')
    }

    const onSave = async () => {
      store.getters.guideManagement.tipo = 6
      await store.dispatch('GUIDE_MANAGEMENT_STORE_SAVE')
    }

    let state = reactive({
      patients: [] as Patient[],
    })

    const onSearchPatient = async (name: string) => {
      if (!name.length) return
      let requestPatient = new RequestPatient(0, PAGINATION_SIZE, name, store.getters.user.id_corp)
      const patientResults = await PatientService.searchPatient(requestPatient)
      state.patients = patientResults.content
    }

    return {
      onSave,
      onCancel,
      onSearchPatient,
      state,
    }
  },
})
</script>
