import ApproachService from './Approach-service'
import { Approach } from './approach-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    approaches: [],
    approach: {
      id: 0,
      descricao: '',
      id_especialidade: 0,
      id_user: 1,
      id_corp: 1,
      data_gravacao: '',
      ativo: true,
    },
  }),

  getters: {
    approaches: (state) => state.approaches,
    approach: (state) => state.approach,
  },

  mutations: {
    APPROACH_STORE_LOAD: (state, payload) => (state.approaches = payload),
    APPROACH_STORE_LOAD_BY_ID: (state, payload) => (state.approach = payload),
  },

  actions: {
    APPROACH_STORE_LOAD: async ({ commit }) => {
      await commit('APPROACH_STORE_LOAD', await ApproachService.getAll())
    },

    APPROACH_STORE_SET_BLANK: async ({ commit }, approach: Approach) => {
      await commit('APPROACH_STORE_LOAD_BY_ID', approach)
    },

    APPROACH_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await ApproachService.getById(id)

      await commit('APPROACH_STORE_LOAD_BY_ID', data)
    },

    APPROACH_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await ApproachService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('APPROACH_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Approach removida sucesso!')
        }
      })
    },

    APPROACH_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.approach.id === null) {
        getters.approach.id = 1
      }

      if (getters.approach.id > 0)
        await ApproachService.update(getters.approach).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('APPROACH_STORE_LOAD_BY_ID', getters.approach.id)
            router.push('/approaches')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Approach salva com sucesso!')
          }
        })
      else
        await ApproachService.create(getters.approach).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            //router.push('/approaches')
            //await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Approach salva com sucesso!')
          }
        })
    },
  },
}
