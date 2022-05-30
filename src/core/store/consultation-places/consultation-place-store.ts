import ConsultationPlacesService from '@core/services/consultation-places/consultation-place-service'
import { ConsultationPlace } from '@core/domain/consultation-places/consultation-place-model'
import router from '../../../router'
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers'

export default {
  state: () => ({
    consultationPlaces: [],
    consultationPlace: {
      local: '',
      id: 0,
      id_corp: 0,
      id_user: 0,
      data_gravacao: '',
      telefone: '',
      endereco: '',
      uf: '',
      cep: '',
      numero: '',
      cidade: '',
      bairro: '',
      id_empresa: 0,
      ativo: true,
    },
  }),

  getters: {
    consultationPlaces: (state) => state.consultationPlaces,
    consultationPlace: (state) => state.consultationPlace,
  },

  mutations: {
    CONSULTATION_PLACE_STORE_LOAD: (state, payload) => (state.consultationPlaces = payload),
    CONSULTATION_PLACE_STORE_LOAD_BY_ID: (state, payload) => (state.consultationPlace = payload),
  },

  actions: {
    CONSULTATION_PLACE_STORE_LOAD: async ({ commit }) => {
      await commit('CONSULTATION_PLACE_STORE_LOAD', await ConsultationPlacesService.getAll())
    },

    CONSULTATION_PLACE_STORE_SET_BLANK: async (
      { commit },
      consultationPlace: ConsultationPlace
    ) => {
      await commit('CONSULTATION_PLACE_STORE_LOAD_BY_ID', consultationPlace)
    },

    CONSULTATION_PLACE_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await ConsultationPlacesService.getById(id)

      await commit('CONSULTATION_PLACE_STORE_LOAD_BY_ID', data)
    },

    CONSULTATION_PLACE_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await ConsultationPlacesService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('CONSULTATION_PLACE_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Consultation Place removida sucesso!')
        }
      })
    },

    CONSULTATION_PLACE_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.consultationPlace.id > 0)
        await ConsultationPlacesService.update(getters.consultationPlace).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('CONSULTATION_PLACE_STORE_LOAD_BY_ID', getters.consultationPlace.id)
            router.push('/consultation_places')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Consultation Place salva com sucesso!')
          }
        })
      else
        await ConsultationPlacesService.create(getters.consultationPlace).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/consultation_places')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Consultation Place salva com sucesso!')
          }
        })
    },
  },
}
