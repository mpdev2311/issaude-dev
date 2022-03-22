import { NewScheduling } from '@core/domain/scheduling/scheduling-status/scheduling-status-model'
import SchedulingStatusService from '../../services/scheduling-status/scheduling-status.service'

export default {
  state: () => ({
    schedulingStatus: [],
  }),

  getters: {
    schedulingStatus: (state) => state.schedulingStatus,
  },

  mutations: {
    LOAD_SCHEDULING_STATUS: (state, payload) => (state.schedulingStatus = payload),
  },

  actions: {
    LOAD_SCHEDULING_STATUS: async ({ commit }) => {
      await commit('LOAD_SCHEDULING_STATUS', await SchedulingStatusService.getAll())
    },
    CREATE_NEW_SCHEDULING: async ({ dispatch }, payload: NewScheduling) => {
      const save = await SchedulingStatusService.save(payload)
      dispatch('LOAD_SCHEDULING_STATUS')
      return save
    },
    UPDATE_SCHEDULING: async ({ dispatch }, payload: NewScheduling) => {
      const update = await SchedulingStatusService.update(payload)
      dispatch('LOAD_SCHEDULING_STATUS')
      return update
    },
    DELETE_SCHEDULING: async ({ dispatch }, payload: number) => {
      const removed = await SchedulingStatusService.delete(payload)
      dispatch('LOAD_SCHEDULING_STATUS')
      return removed
    },
  },
}
