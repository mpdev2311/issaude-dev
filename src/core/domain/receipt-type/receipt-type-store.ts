import ReceiptTypesService from './receipt-type-service'
import { ReceiptType } from './receipt-type-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    receiptTypes: [],
    receiptType: {
      id: 0,
      nome: '',
      desconto: 0,
      ativo: true,
    },
  }),

  getters: {
    receiptTypes: (state) => state.receiptTypes,
    receiptType: (state) => state.receiptType,
  },

  mutations: {
    RECEIPT_TYPE_STORE_LOAD: (state, payload) => (state.receiptTypes = payload),
    RECEIPT_TYPE_STORE_LOAD_BY_ID: (state, payload) => (state.receiptType = payload),
  },

  actions: {
    RECEIPT_TYPE_STORE_LOAD: async ({ commit }) => {
      await commit('RECEIPT_TYPE_STORE_LOAD', await ReceiptTypesService.getAll())
    },

    RECEIPT_TYPE_STORE_SET_BLANK: async ({ commit }, receiptType: ReceiptType) => {
      await commit('RECEIPT_TYPE_STORE_LOAD_BY_ID', receiptType)
    },

    RECEIPT_TYPE_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await ReceiptTypesService.getById(id)

      await commit('RECEIPT_TYPE_STORE_LOAD_BY_ID', data)
    },

    RECEIPT_TYPE_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await ReceiptTypesService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('RECEIPT_TYPE_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tipo de Recebimento removido com sucesso!')
        }
      })
    },

    RECEIPT_TYPE_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.receiptType.id > 0)
        await ReceiptTypesService.update(getters.receiptType).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('RECEIPT_TYPE_STORE_LOAD_BY_ID', getters.receiptType.id)
            router.push('/receipt_types')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tipo de Recebimento salvo com sucesso!')
          }
        })
      else
        await ReceiptTypesService.create(getters.receiptType).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/receipt_types')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tipo de Recebimento salvo com sucesso!')
          }
        })
    },
  },
}
