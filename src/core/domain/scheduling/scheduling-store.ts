import Generic from '@domain/generic/generic-model'
import SchedulingService from './scheduling-service'
import {
  filterScheduling,
  createScheduling,
  searchFreeTimes,
  searchLoadMenu,
  updateStatus,
} from './scheduling-model'

export default {
  state: () => ({
    schedulings: [],
    menus: [] as Generic[],
    freeTimes: [],
  }),

  getters: {
    schedulings: (state) => state.schedulings,
    menus: (state) => state.menus,
    freeTimes: (state) => state.freeTimes,
  },

  mutations: {
    LOAD_MENU: (state, payload) => (state.menus = payload),
    LOAD_SCHEDULINGS: (state, payload) => (state.schedulings = payload.content),
    SEARCH_FREE_TIMES: (state, payload) => {
      if (Array.isArray(payload)) {
        state.freeTimes.content = payload
      } else {
        state.freeTimes = payload
      }
    },
  },

  actions: {
    LOAD_MENU: async ({ commit }, payload: searchLoadMenu) => {
      await commit('LOAD_MENU', await SchedulingService.getMenu(payload))
    },

    ON_SELECT_MENU: async ({ commit, getters }, payload) => {
      getters.menus.forEach((menu: any) => {
        menu.selected = false
      })
      if (payload?.items?.length) {
        payload.selected = true
      }
      await commit('LOAD_MENU', getters.menus /* await SchedulingService.getMenu()*/)
    },

    LOAD_SCHEDULINGS: async ({ commit }, payload: filterScheduling) => {
      let result = await SchedulingService.getAll(payload)
      await commit('LOAD_SCHEDULINGS', result)
      return result
    },
    SEARCH_FREE_TIMES: async ({ commit }, payload: searchFreeTimes) => {
      await commit('SEARCH_FREE_TIMES', await SchedulingService.getFreeTime(payload))
    },
    NEW_SCHEDULING: async ({ commit }, payload: createScheduling) => {
      return await SchedulingService.createNewScheduling(payload)
    },
    UPDATE_STATUS_SCHEDULING: async ({ commit }, payload: updateStatus) => {
      return await SchedulingService.updateStatusScheduling(payload)
    },
  },
}
