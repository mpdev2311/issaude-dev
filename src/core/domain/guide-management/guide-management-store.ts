import GuideManagementService from './guide-management-service'
import { GuideManagement } from './guide-management-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    guideManagements: [],
    getTypeService: [],
    getPerformeType: [],
    hospitalizationRegime: [],
    typeOutputIntermment: [],
    accommodationType: [],
    guideManagement: {
      id: 0,
      numero_guia: '',
      emissao: '',
      id_profissional_executante: 0,
      id_paciente: 0,
      tipo_doenca: '',
      tempo_doenca: '',
      ndicacao_acidente: 0,
      cid_principal: '',
      cid1: null,
      cid2: null,
      id3: null,
      data_atendimento: '',
      od_procedimento: '',
      tipo_consulta: 0,
      tipo_saida: 0,
      obs: '',
      cod_tabela_hm: '0',
      tempo_doe: 'A',
      tipo: 0,
      data_fim: '',
      tipo_atendimento: '0',
      id_agenda: 1,
      consulta: true,
      senha: '',
      id_agenda_nome: 1,
      id_local_atendimento: 0,
      id_empresa_contratada: 1,
      usuario: '',
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
    },
  }),

  getters: {
    guideManagements: (state) => state.guideManagements,
    guideManagement: (state) => state.guideManagement,
    getTypeService: (state) => state.getTypeService,
    getPerformeType: (state) => state.getPerformeType,
    hospitalizationRegime: (state) => state.hospitalizationRegime,
    typeOutputIntermment: (state) => state.typeOutputIntermment,
    accommodationType: (state) => state.accommodationType,
  },

  mutations: {
    GUIDE_MANAGEMENT_STORE_LOAD: (state, payload) => (state.guideManagements = payload),
    GUIDE_MANAGEMENT_STORE_LOAD_BY_ID: (state, payload) => (state.guideManagement = payload),
    TYPE_SERVICE_GUIDE_LOAD: (state, payload) => (state.getTypeService = payload),
    PERFORMER_TYPE_STORE_LOAD: (state, payload) => (state.getPerformeType = payload),
    HOSPITALIZATION_REGIME_STORE_LOAD: (state, payload) => (state.hospitalizationRegime = payload),
    TYPE_OUTPUT_INTERMMENT_STORE_LOAD: (state, payload) => (state.typeOutputIntermment = payload),
    ACCOMMODATION_TYPE_STORE_LOAD: (state, payload) => (state.accommodationType = payload),
  },

  actions: {
    GUIDE_MANAGEMENT_STORE_LOAD: async ({ commit }) => {
      const data = await new GuideManagementService().getAllTds()
      await commit('GUIDE_MANAGEMENT_STORE_LOAD', data)
      return data
    },

    GUIDE_MANAGEMENT_STORE_SET_BLANK: async ({ commit }, guideManagement: GuideManagement) => {
      await commit('GUIDE_MANAGEMENT_STORE_LOAD_BY_ID', guideManagement)
    },

    GUIDE_MANAGEMENT_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      await commit(
        'GUIDE_MANAGEMENT_STORE_LOAD_BY_ID',
        await new GuideManagementService().getById(id)
      )
    },

    GUIDE_MANAGEMENT_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await new GuideManagementService().deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('GUIDE_MANAGEMENT_STORE_LOAD')
          router.push('/guide-managements')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Guia removido sucesso!')
        }
      })
    },

    GUIDE_MANAGEMENT_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.guideManagement.id > 0)
        await new GuideManagementService()
          .update(getters.guideManagement)
          .then(async (response) => {
            if (IsSuccessfulStatusCode(response.status)) {
              await dispatch('GUIDE_MANAGEMENT_STORE_LOAD_BY_ID', getters.guideManagement.id)
              router.push('/guide-managements')
              await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro atualizado com sucesso!')
            }
          })
      else
        await new GuideManagementService()
          .create(getters.guideManagement)
          .then(async (response) => {
            if (IsSuccessfulStatusCode(response.status)) {
              router.push('/guide-managements')
              await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro salvo com sucesso!')
            }
          })
    },

    PERFORMER_TYPE_STORE_LOAD: async ({ commit }) => {
      const data = await new GuideManagementService().getPerformeType()
      await commit('PERFORMER_TYPE_STORE_LOAD', data)
      return data
    },

    TYPE_SERVICE_GUIDE_LOAD: async ({ commit }) => {
      const data = await new GuideManagementService().getTypeService()
      await commit('TYPE_SERVICE_GUIDE_LOAD', data)
      return data
    },

    HOSPITALIZATION_REGIME_STORE_LOAD: async ({ commit }) => {
      const data = await new GuideManagementService().getHospitalizationRegime()
      await commit('HOSPITALIZATION_REGIME_STORE_LOAD', data)
      return data
    },

    TYPE_OUTPUT_INTERMMENT_STORE_LOAD: async ({ commit }) => {
      const data = await new GuideManagementService().getTypeOutputIntermment()
      await commit('TYPE_OUTPUT_INTERMMENT_STORE_LOAD', data)
      return data
    },

    ACCOMMODATION_TYPE_STORE_LOAD: async ({ commit }) => {
      const data = await new GuideManagementService().getAccommodationType()
      await commit('ACCOMMODATION_TYPE_STORE_LOAD', data)
      return data
    },
  },
}
