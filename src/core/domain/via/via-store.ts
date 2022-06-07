import ViaService from './via-service'
import { Via } from './via-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    vias: [],
    via: {
      id: 0,
      nome: '',
      ativo: true,
    },
  }),

  getters: {
    vias: (state) => state.vias,
    via: (state) => state.via,
  },

  mutations: {
    VIA_STORE_LOAD: (state, payload) => (state.vias = payload),
    VIA_STORE_LOAD_BY_ID: (state, payload) => (state.via = payload),
  },

  actions: {
    VIA_STORE_LOAD: async ({ commit }) => {
      await commit('VIA_STORE_LOAD', await ViaService.getAll())
    },

    VIA_STORE_SET_BLANK: async ({ commit }, via: Via) => {
      await commit('VIA_STORE_LOAD_BY_ID', via)
    },

    VIA_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await ViaService.getById(id)

      await commit('VIA_STORE_LOAD_BY_ID', data)
    },

    VIA_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await ViaService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('VIA_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Via salva removida sucesso!')
        }
      })
    },

    VIA_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.via.id > 0)
        await ViaService.update(getters.via).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('VIA_STORE_LOAD_BY_ID', getters.via.id)
            router.push('/via')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Via salva com sucesso!')
          }
        })
      else
        await ViaService.create(getters.via).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/via')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Via salva com sucesso!')
          }
        })
    },
  },
}
