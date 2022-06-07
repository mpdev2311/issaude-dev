import { PrinterConfigurationService } from './printer-configuration-service'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    printerConfiguration: {},
  }),

  getters: {
    printerConfiguration: (state) => state.printerConfiguration,
  },

  mutations: {
    PRINTER_SAVE: (state, payload) => (state.vias = payload),
  },

  actions: {
    PRINTER_SAVE: async ({ dispatch }, printerConfiguration) => {
      await PrinterConfigurationService.save(printerConfiguration).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          router.push('/dashboard')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Configurações salvas sucesso!')
        }
      })
    },
  },
}
