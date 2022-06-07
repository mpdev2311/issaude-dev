import AccountInfoService from './account-info-service'
import { AccountInfo } from './account-info.model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    accountInfos: [],
    accountInfo: {
      id: 0,
      nome: '',
      data_abertura: '',
      saldo_abertura: 0,
      agencia: '',
      conta: '',
      tipo_conta: 0,
      obs: '',
      id_corp: 0,
      id_user: 0,
      desativa: false,
      n_convenio: '',
      n_banco: '',
      carteira: '',
      id_empresa: 0,
      ativo: true,
      data_gravacao: '',
    },
  }),

  getters: {
    accountInfos: (state) => state.accountInfos,
    accountInfo: (state) => state.accountInfo,
  },

  mutations: {
    ACCOUNT_STORE_LOAD: (state, payload) => (state.accountInfos = payload),
    ACCOUNT_STORE_LOAD_BY_ID: (state, payload) => (state.accountInfo = payload),
  },

  actions: {
    ACCOUNT_STORE_LOAD: async ({ commit }) => {
      await commit('ACCOUNT_STORE_LOAD', await AccountInfoService.getAll())
    },

    ACCOUNT_STORE_SET_BLANK: async ({ commit }, accountInfo: AccountInfo) => {
      await commit('ACCOUNT_STORE_LOAD_BY_ID', accountInfo)
    },

    ACCOUNT_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await AccountInfoService.getById(id)

      await commit('ACCOUNT_STORE_LOAD_BY_ID', data)
    },

    ACCOUNT_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await AccountInfoService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('ACCOUNT_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Account Info removida sucesso!')
        }
      })
    },

    ACCOUNT_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.accountInfo.id > 0)
        await AccountInfoService.update(getters.accountInfo).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('ACCOUNT_STORE_LOAD_BY_ID', getters.accountInfo.id)
            router.push('/accountinfo')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Account info salva com sucesso!')
          }
        })
      else
        await AccountInfoService.create(getters.accountInfo).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/accountinfo')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Account info salva com sucesso!')
          }
        })
    },
  },
}
