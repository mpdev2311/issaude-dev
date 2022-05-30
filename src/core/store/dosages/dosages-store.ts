import DosageService from '@core/services/dosages/dosage-service'
import { Dosage } from '@core/domain/dosage/dosage-model'
import router from '../../../router'
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers'

export default {
  state: () => ({
    dosages: [],
    dosage: {
      nome: '',
      id: 0,
      quant: 0,
      data_gravacao: '',
      id_corp: 0,
      ativo: true,
      id_user: 0,
    },
  }),

  getters: {
    dosages: (state) => state.dosages,
    dosage: (state) => state.dosage,
  },

  mutations: {
    DOSAGE_STORE_LOAD: (state, payload) => (state.dosages = payload),
    DOSAGE_STORE_LOAD_BY_ID: (state, payload) => (state.dosage = payload),
  },

  actions: {
    DOSAGE_STORE_LOAD: async ({ commit }) => {
      await commit('DOSAGE_STORE_LOAD', await DosageService.getAll())
    },

    DOSAGE_STORE_SET_BLANK: async ({ commit }, dosage: Dosage) => {
      await commit('DOSAGE_STORE_LOAD_BY_ID', dosage)
    },

    DOSAGE_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await DosageService.getById(id)

      await commit('DOSAGE_STORE_LOAD_BY_ID', data)
    },

    DOSAGE_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await DosageService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('DOSAGE_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Dosage removida sucesso!')
        }
      })
    },

    DOSAGE_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.dosage.id > 0)
        await DosageService.update(getters.dosage).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('DOSAGE_STORE_LOAD_BY_ID', getters.dosage.id)
            router.push('/dosages')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Dosage salva com sucesso!')
          }
        })
      else
        await DosageService.create(getters.dosage).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/dosages')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Dosages salva com sucesso!')
          }
        })
    },
  },
}
