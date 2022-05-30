import ManagementService from "@services/management-service/management-service"

export default {
  state: () => ({
    managements: {} as any
  }),

  getters: {
    managements: (state: any) => state.managements
  },

  mutations: {
    SET_MANAGEMENTS: (state, payload) => state.managements = payload.content
  },

  actions: {
    SET_MANAGEMENTS: async ({ commit }, payload) => {
      await commit('SET_MANAGEMENTS', await ManagementService.getService(payload))
    }
  }
}