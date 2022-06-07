import TargetAudienceService from './target-audience-service'
import { TargetAudience } from './target-audience-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    targetAudiences: [],
    targetAudience: {
      id: 0,
      descricao: '',
      id_user: 0,
      id_corp: 0,
      data_gravacao: '',
      ativo: true,
    },
  }),

  getters: {
    targetAudiences: (state) => state.targetAudiences,
    targetAudience: (state) => state.targetAudience,
  },

  mutations: {
    TARGET_AUDIENCE_STORE_LOAD: (state, payload) => (state.targetAudiences = payload),
    TARGET_AUDIENCE_STORE_LOAD_BY_ID: (state, payload) => (state.targetAudience = payload),
  },

  actions: {
    TARGET_AUDIENCE_STORE_LOAD: async ({ commit }) => {
      await commit('TARGET_AUDIENCE_STORE_LOAD', await TargetAudienceService.getAll())
    },

    TARGET_AUDIENCE_STORE_SET_BLANK: async ({ commit }, targetAudience: TargetAudience) => {
      await commit('TARGET_AUDIENCE_STORE_LOAD_BY_ID', targetAudience)
    },

    TARGET_AUDIENCE_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await TargetAudienceService.getById(id)

      await commit('TARGET_AUDIENCE_STORE_LOAD_BY_ID', data)
    },

    TARGET_AUDIENCE_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await TargetAudienceService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('TARGET_AUDIENCE_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Target audience removida sucesso!')
        }
      })
    },

    TARGET_AUDIENCE_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.targetAudience.id > 0)
        await TargetAudienceService.update(getters.targetAudience).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('TARGET_AUDIENCE_STORE_LOAD_BY_ID', getters.targetAudience.id)
            router.push('/target-audience')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Target audience salva com sucesso!')
          }
        })
      else
        await TargetAudienceService.create(getters.targetAudience).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            // router.push('/target-audience')
            // await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Target audience salva com sucesso!')
          }
        })
    },
  },
}
