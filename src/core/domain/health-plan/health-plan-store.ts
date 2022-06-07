import HealthPlanService from './health-plan-service'
import { HealthPlan } from './health-plan-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    selectedItem: {},
    healthPlans: [],
    healthPlan: {
      id: 0,
      nome: '',
      ch_sadt: 0.0,
      ch_hi: 0.0,
      ch_tx: 0.0,
      ch_us: 0.0,
      ch_hon: 0.0,
      retorno: 0,
      id_convenio: 0,
      nome_convenio: '',
      id_tabela_med: 0,
      id_tabela_tx: 0,
      id_tabela_mat: 0,
      guia_consulta: 0,
      filme: 0,
      suspenso: false,
      id_user: 0,
      id_corp: 0,
      prazo_carencia: 0,
      imagem: '',
      id_tabela_amb: 0,
      id_tipo_guia_procedimento: 0,
      ativo: true,
      id_tipo_guia_internacao: 0,
      data_gravacao: '',
      selected: false,
    },
  }),

  getters: {
    healthPlans: (state) => state.healthPlans,
    healthPlan: (state) => state.healthPlan,
    selectedItem: (state) => state.selectedItem,
  },

  mutations: {
    HEALTH_PLAN_STORE_LOAD: (state, payload) => (state.healthPlans = payload),
    HEALTH_PLAN_STORE_LOAD_BY_ID: (state, payload) => (state.healthPlan = payload),
    SELECTED_ITEM_LOAD: (state, payload) => (state.selectedItem = payload),
  },

  actions: {
    SELECTED_ITEM_LOAD: async ({ commit }, objectSelected: any) => {
      await commit('SELECTED_ITEM_LOAD', objectSelected)
    },

    HEALTH_PLAN_STORE_LOAD: async ({ commit }) => {
      await commit('HEALTH_PLAN_STORE_LOAD', await HealthPlanService.getAll())
    },

    HEALTH_PLAN_STORE_SET_BLANK: async ({ commit }, healthPlan: HealthPlan) => {
      await commit('HEALTH_PLAN_STORE_LOAD_BY_ID', healthPlan)
    },

    HEALTH_PLAN_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await HealthPlanService.getById(id)

      await commit('HEALTH_PLAN_STORE_LOAD_BY_ID', data)
    },

    HEALTH_PLAN_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await HealthPlanService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('HEALTH_PLAN_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Plano removido com sucesso!')
        }
      })
    },

    HEALTH_PLAN_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.healthPlan.id > 0)
        await HealthPlanService.update(getters.healthPlan).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('HEALTH_PLAN_STORE_LOAD_BY_ID', getters.healthPlan.id)
            router.push('/plans')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Plano alterado com sucesso!')
          }
        })
      else
        await HealthPlanService.create(getters.healthPlan).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/plans')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Plano salvo com sucesso!')
          }
        })
    },
  },
}
