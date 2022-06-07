import router from '@src/router'
import PositionsService from './position-service
import { Position } from './position-model'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    positions: [],
    position: {
      id: 0,
      nome: '',
    },
  }),

  getters: {
    positions: (state) => state.positions,
    position: (state) => state.position,
  },

  mutations: {
    POSITIONS_STORE_LOAD: (state, payload) => (state.positions = payload),
    POSITIONS_STORE_LOAD_BY_ID: (state, payload) => (state.position = payload),
  },

  actions: {
    POSITIONS_STORE_LOAD: async ({ commit }) => {
      await commit('POSITIONS_STORE_LOAD', await PositionsService.getAll())
    },

    POSITIONS_STORE_SET_BLANK: async ({ commit }, position: Position) => {
      await commit('POSITIONS_STORE_LOAD_BY_ID', position)
    },

    POSITIONS_STORE_LOAD_GET: async ({ commit }, position: Position) => {
      await commit('POSITIONS_STORE_LOAD', position)
    },

    POSITIONS_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await PositionsService.getById(id)
      //
      await commit('POSITIONS_STORE_LOAD_BY_ID', data)
    },

    POSITIONS_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await PositionsService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('POSITIONS_STORE_LOAD')
          router.push('/positionS')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cargo removido sucesso!')
        }
      })
    },

    POSITIONS_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.position.id > 0)
        await PositionsService.update(getters.position).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('POSITIONS_STORE_LOAD_BY_ID', getters.position.id)
            router.push('/positions')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de Cargo salvo com sucesso!')
          }
        })
      else
        await PositionsService.create(getters.position).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/positions')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de cargos salvo com sucesso!')
          }
        })
    },
  },
}
