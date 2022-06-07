import StockNameService from '@domain/stock/stock-service'
import { StockName } from './stock-name-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    stockNames: [],
    stockName: {
      nome: '',
      id: 0,
      tipo: 0,
      id_corp: 0,
      ativo: true,
      id_user: 0,
      data_gravacao: '',
    },
  }),

  getters: {
    stockNames: (state) => state.stockNames,
    stockName: (state) => state.stockName,
  },

  mutations: {
    STOCK_NAME_STORE_LOAD: (state, payload) => (state.stockNames = payload),
    STOCK_NAME_STORE_LOAD_BY_ID: (state, payload) => (state.stockName = payload),
  },

  actions: {
    STOCK_NAME_STORE_LOAD: async ({ commit }) => {
      await commit('STOCK_NAME_STORE_LOAD', await StockNameService.getAll())
    },

    STOCK_NAME_STORE_SET_BLANK: async ({ commit }, stockName: StockName) => {
      await commit('STOCK_NAME_STORE_LOAD_BY_ID', stockName)
    },

    STOCK_NAME_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await StockNameService.getById(id)

      await commit('STOCK_NAME_STORE_LOAD_BY_ID', data)
    },

    STOCK_NAME_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await StockNameService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('STOCK_NAME_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Stock Name removida sucesso!')
        }
      })
    },

    STOCK_NAME_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.stockName.id > 0)
        await StockNameService.update(getters.stockName).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('STOCK_NAME_STORE_LOAD_BY_ID', getters.stockName.id)
            router.push('/stock_names')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'stock_names salva com sucesso!')
          }
        })
      else
        await StockNameService.create(getters.stockName).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/stock_names')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'stock_names salva com sucesso!')
          }
        })
    },
  },
}
