import ServiceTypeService from './service-type-service'
import { ServiceType } from './service-type-model'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    serviceTypes: [],
    serviceType: {
      id: 0,
      id_corp: 0,
      nome: '',
      ativo: true,
    },
  }),

  getters: {
    serviceTypes: (state) => state.serviceTypes,
    serviceType: (state) => state.serviceType,
  },

  mutations: {
    SERVICE_TYPE_STORE_LOAD: (state, payload) => (state.serviceTypes = payload),
    SERVICE_TYPE_STORE_LOAD_BY_ID: (state, payload) => (state.serviceType = payload),
  },

  actions: {
    SERVICE_TYPE_STORE_LOAD: async ({ commit }) => {
      await commit('SERVICE_TYPE_STORE_LOAD', await ServiceTypeService.getAll())
    },

    SERVICE_TYPE_STORE_SET_BLANK: async ({ commit }, serviceType: ServiceType) => {
      await commit('SERVICE_TYPE_STORE_LOAD_BY_ID', serviceType)
    },

    SERVICE_TYPE_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await ServiceTypeService.getById(id)

      await commit('SERVICE_TYPE_STORE_LOAD_BY_ID', data)
    },

    SERVICE_TYPE_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await ServiceTypeService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('SERVICE_TYPE_STORE_LOAD')
          await dispatch(
            'MESSAGE_STORE_SUCCESS_PUSH',
            'Tipo Sala Atendimento removido com sucesso!'
          )
        }
      })
    },

    SERVICE_TYPE_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.serviceType.id > 0)
        await ServiceTypeService.update(getters.serviceType).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('SERVICE_TYPE_STORE_LOAD_BY_ID', getters.serviceType.id)
            //router.push('/schedule_rooms')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tipo sala atendimento salvo com sucesso!')
          }
        })
      else
        await ServiceTypeService.create(getters.serviceType).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            //router.push('/schedule_rooms')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'tipo sala atendimento salvo com sucesso!')
          }
        })
    },
  },
}
