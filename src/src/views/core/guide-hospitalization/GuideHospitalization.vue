<template>
  <div class="h-screen">
    <div>
      <div
        class="mt-19 bg-gray-300 hover:bg-gray-200 py-5 px-5 border-b-4 border-gray-400 hover:border-gray-500 rounded"
      >
        <!-- animation transform translate-x-4 translate-y-15 scale-10 rotate-5 -->
        <div class="bg-white rounded-t-md shadow-md rounded-b-lg">
          <div class="w-full">
            <!-- inicio step -->
            <div v-show="step === 'complete'"></div>
            <div class="" v-show="step != 'complete'">
              <!-- Top Navigation -->
              <div class="border-b-2 px-4 py-2 text-white bg-gray-900 rounded-t-lg">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div class="">
                    <div class="mt-0 align-text-top text-lg text-gray-400 font-semibold">
                      Guia DE INTERNAÇÃO
                    </div>
                    <div class="mt-8">
                      <div v-show="step === 1">
                        <div
                          class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight"
                        >
                          GUIA DE INTERNAÇÃO
                        </div>
                      </div>

                      <div v-show="step === 2">
                        <div
                          class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight"
                        >
                          PROCEDIMENTOS
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class=" ">
                    <div class="align-text-top m-2 text-right right-8">
                      <div
                        class="uppercase tracking-wide text-xs font-bold text-white bg-gray-900 leading-tight text-right"
                        v-text="`Página: ${step} - 2`"
                      ></div>
                    </div>
                    <div class="flex items-center md:w-64 mt-10">
                      <div class="w-full bg-white rounded-full mr-2">
                        <div
                          class="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white"
                          :style="'width: ' + parseInt((step / 2) * 100) + '%'"
                        ></div>
                      </div>
                      <div
                        class="text-xs w-10 text-white"
                        v-text="parseInt((step / 2) * 100) + '%'"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Top Navigation -->

              <!-- Step Content -->
              <div class="py-2">
                <div class="px-5 py-1" v-show="step === 1">
                  <GuideHospitalizationForm />
                  <!-- <Template /> -->
                </div>
                <div class="px-5 py-1" v-show="step === 2">
                  <GuideHospitalizationTable />
                </div>
              </div>
              <div class="border-b-2 px-3 py-4 text-white bg-gray-900 rounded-b-lg">
                <div class="flex flex-wrap md:items-center md:justify-between">
                  <div class="w-4/6 text-right"></div>
                  <div class="w-2/2 text-right">
                    <button
                      v-show="step > 1"
                      @click="step--"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center font-medium text-gray-600 bg-white hover:bg-gray-100"
                    >
                      Anterior
                    </button>
                  </div>
                  <div class="w-2/2 text-right">
                    <button
                      v-show="step === 1"
                      @click="onSave()"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-green-600 hover:bg-green-500 font-medium"
                    >
                      Salvar
                      <!-- @click="step = 'complete'" -->
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

                  <div v-show="step < 2" class="w-2/2 text-right">
                    <button
                      v-show="step < 2"
                      @click="step = 2"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-green-600 hover:bg-green-500 font-medium"
                    >
                      Próximo
                    </button>
                  </div>

                  <div class="w-2/2 text-right">
                    <button
                      @click="onCancel()"
                      type="button"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-red-600 hover:bg-red-500 font-medium"
                    >
                      Fechar
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
                  </div>
                </div>
              </div>
            </div>

            <!-- fim -->
          </div>
        </div>
      </div>
      <!-- show message -->
      <div
        :class="{ 'bg-red-200': bgRed, 'bg-green-200': bgGreen }"
        v-if="showMessage"
        class="flex justify-center px-4 py-3 text-right sm:px-6 bg-green-200"
      >
        Usuário salvo com sucesso!
        <a href="#" @click="onCloseMessage"
          ><svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            /></svg
        ></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapState, useStore, mapMutations } from 'vuex'
import { key, store } from '../../../core/store/store'
import GuideHospitalizationForm from '../../../components/layouts/guide-hospitalization/GuideHopitalizationForm.vue'
import GuideHospitalizationTable from '../../../components/layouts/guide-hospitalization/GuideHospitalizationTable.vue'
import { GuideManagement } from '../../../core/domain/guide-management/guide-management-model'

export default defineComponent({
  components: {
    GuideHospitalizationForm,
    GuideHospitalizationTable,
  },

  methods: {
    ...mapMutations([
      'guideManagement',
      'guideManagements',
      'localAccess',
      'providers',
      'guidetypes',
    ]),
  },

  computed: {
    ...mapState(['guideManagement', 'localAccess', 'providers', 'guidetypes']),
    ...mapGetters(['guideManagement', 'localAccess', 'providers', 'guidetypes']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()
    let step = ref<number>(1)

    const guideManagement = ref<GuideManagement>({
      id: 0,
      numero_guia: '0',
      emissao: '',
      id_profissional_executante: 0,
      id_paciente: 0,
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
      cod_tabela_hm: '',
      tempo_doe: '',
      tipo: 7,
      data_fim: '',
      tipo_atendimento: '',
      id_agenda: 1,
      consulta: true,
      senha: '',
      id_agenda_nome: 0,
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
      await store.dispatch('LOAD_LOCAL_ACESS')
      await store.dispatch('PROVIDER_STORE_LOAD')
      await store.dispatch('GUIDES_TYPE_STORE_LOAD')
      const { id } = router.currentRoute.value.params

      if (id !== '0') {
        await store.dispatch(
          'GUIDE_MANAGEMENT_STORE_LOAD_BY_ID',
          router.currentRoute.value.params.id
        )
      } else {
        await store.dispatch('GUIDE_MANAGEMENT_STORE_SET_BLANK', guideManagement.value)
      }
    })

    const onCancel = async () => {
      router.push('/guide-managements')
    }
    const onSave = async () => {
      //store.getters.guideManagement.tipo = 3;
      await store.dispatch('GUIDE_MANAGEMENT_STORE_SAVE')
    }

    return {
      onSave,
      onCancel,
      step,
    }
  },
})
</script>
