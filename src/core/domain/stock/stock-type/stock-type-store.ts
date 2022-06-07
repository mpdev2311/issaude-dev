import StockTypeService from '@domain/stock/stock-type/stock-type-service'
import { StockType } from './stock-type-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    stockTypes: [],
    stockType: {
      id: 0,
      ativo: true,
      nome: '',
    },
  }),

  getters: {
    stockTypes: (state) => state.stockTypes,
    stockType: (state) => state.stockType,
  },

  mutations: {
    STOCK_TYPE_STORE_LOAD: (state, payload) => (state.stockTypes = payload),
    STOCK_TYPE_STORE_LOAD_BY_ID: (state, payload) => (state.stockType = payload),
  },

  actions: {
    STOCK_TYPE_STORE_LOAD: async ({ commit }) => {
      await commit('STOCK_TYPE_STORE_LOAD', await StockTypeService.getAll())
    },

    STOCK_TYPE_STORE_SET_BLANK: async ({ commit }, stockType: StockType) => {
      await commit('STOCK_TYPE_STORE_LOAD_BY_ID', stockType)
    },

    STOCK_TYPE_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await StockTypeService.getById(id)

      await commit('STOCK_TYPE_STORE_LOAD_BY_ID', data)
    },

    STOCK_TYPE_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await StockTypeService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('STOCK_TYPE_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Stock TYPE removida sucesso!')
        }
      })
    },

    STOCK_TYPE_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.stockType.id > 0)
        await StockTypeService.update(getters.stockType).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('STOCK_TYPE_STORE_LOAD_BY_ID', getters.stockType.id)
            router.push('/stock_types')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'stock_types salva com sucesso!')
          }
        })
      else
        await StockTypeService.create(getters.stockType).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/stock_types')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'stock_types salva com sucesso!')
          }
        })
    },
  },
}
