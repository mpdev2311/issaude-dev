import BillsService from './bill-services'
import { Bill } from './bill-model'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    billsSadts: [],
    billsSadt: {},
  }),

  getters: {
    billsSadts: (state) => state.billsSadts,
    billsSadt: (state) => state.billsSadt,
  },

  mutations: {
    BILLS_STORE_LOAD: (state, payload) => (state.billsSadts = payload),
    BILLS_STORE_LOAD_BY_ID: (state, payload) => (state.billsSadt = payload),
  },

  actions: {
    BILLS_STORE_LOAD: async ({ commit }) => {
      const data = await BillsService.getAll()
      await commit('BILLS_STORE_LOAD', data)
      return data
    },

    BILLS_STORE_SET_BLANK: async ({ commit }, billsSadt: Bill) => {
      await commit('BILLS_STORE_LOAD_BY_ID', billsSadt)
    },

    BILLS_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      await commit('BILLS_STORE_LOAD_BY_ID', await new BillsService().getById(id))
    },

    BILLS_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await new BillsService().deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('BILLS_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Procedimento removido sucesso!')
        }
      })
    },

    BILLS_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.billsSadt.id > 0)
        await new BillsService().update(getters.billsSadt).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('BILLS_STORE_LOAD_BY_ID', getters.billsSadt.id)
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro atualizado com sucesso!')
          }
        })
      else
        await new BillsService().create(getters.billsSadt).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro salvo com sucesso!')
          }
        })
    },
  },
}
