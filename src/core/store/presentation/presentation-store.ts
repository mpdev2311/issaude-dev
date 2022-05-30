import PresentationService from '@core/services/presentation/presentation-service'
import { Presentation } from '@core/domain/presentation/presentation-model'
import router from '../../../router'
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers'

export default {
  state: () => ({
    presentations: [],
    presentation: {
      id: 0,
      nome: '',
      id_corp: 0,
      id_user: 0,
      data_gravacao: '',
    },
  }),

  getters: {
    presentations: (state) => state.presentations,
    presentation: (state) => state.presentation,
  },

  mutations: {
    PRESENTATION_STORE_LOAD: (state, payload) => (state.presentations = payload),
    PRESENTATION_STORE_LOAD_BY_ID: (state, payload) => (state.presentation = payload),
  },

  actions: {
    PRESENTATION_STORE_LOAD: async ({ commit }) => {
      await commit('PRESENTATION_STORE_LOAD', await PresentationService.getAll())
    },

    PRESENTATION_STORE_SET_BLANK: async ({ commit }, presentation: Presentation) => {
      await commit('PRESENTATION_STORE_LOAD_BY_ID', presentation)
    },

    PRESENTATION_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await PresentationService.getById(id)

      await commit('PRESENTATION_STORE_LOAD_BY_ID', data)
    },

    PRESENTATION_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await PresentationService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('PRESENTATION_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Presentation removida sucesso!')
        }
      })
    },

    PRESENTATION_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.presentation.id > 0)
        await PresentationService.update(getters.presentation).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('PRESENTATION_STORE_LOAD_BY_ID', getters.presentation.id)
            router.push('/presentation')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Presentation salva com sucesso!')
          }
        })
      else
        await PresentationService.create(getters.presentation).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/Presentation')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Presentations salva com sucesso!')
          }
        })
    },
  },
}
