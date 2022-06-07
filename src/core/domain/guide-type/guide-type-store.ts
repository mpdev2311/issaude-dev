import GuideTypeService from './guide-type-service'

export default {
  state: () => ({
    guidetypes: [],
    guidetype: {
      id: 0,
      nome: '',
      ativo: true,
      servico_tipo: '',
    },
  }),

  getters: {
    guidetypes: (state) => state.guidetypes,
  },

  mutations: {
    GUIDES_TYPE_STORE_LOAD: (state, payload) => (state.guidetypes = payload),
  },

  actions: {
    GUIDES_TYPE_STORE_LOAD: async ({ commit }) => {
      await commit('GUIDES_TYPE_STORE_LOAD', await GuideTypeService.getAllTds())
    },
  },
}
