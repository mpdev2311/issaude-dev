import LanguageService from './language-service'
import { Language } from './language-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    languages: [],
    language: {
      id: 0,
      descricao: '',
      id_user: 0,
      id_corp: 0,
      data_gravacao: '',
      ativo: true,
    },
  }),

  getters: {
    languages: (state) => state.languages,
    language: (state) => state.language,
  },

  mutations: {
    LANGUAGES_STORE_LOAD: (state, payload) => (state.languages = payload),
    LANGUAGES_STORE_LOAD_BY_ID: (state, payload) => (state.language = payload),
  },

  actions: {
    LANGUAGES_STORE_LOAD: async ({ commit }) => {
      await commit('LANGUAGES_STORE_LOAD', await LanguageService.getAll())
    },

    LANGUAGES_STORE_SET_BLANK: async ({ commit }, language: Language) => {
      await commit('LANGUAGES_STORE_LOAD_BY_ID', language)
    },

    LANGUAGES_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await LanguageService.getById(id)
      await commit('LANGUAGES_STORE_LOAD_BY_ID', data)
    },

    LANGUAGES_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await LanguageService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('LANGUAGES_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Idioma excluido com sucesso!')
        }
      })
    },

    LANGUAGES_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.language.id > 0)
        await LanguageService.update(getters.language).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('LANGUAGES_STORE_LOAD_BY_ID', getters.language.id)
            router.push('/languages')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Idioma alterado com sucesso!')
          }
        })
      else
        await LanguageService.create(getters.language).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/languages')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Idioma salvo com sucesso!')
          }
        })
    },
  },
}
