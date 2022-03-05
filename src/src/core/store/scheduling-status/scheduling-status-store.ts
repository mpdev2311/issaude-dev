import SchedulingStatusService from '../../services/scheduling-status/scheduling-status.service'

export default {
    state: () => ({
        schedulingStatus: [],
    }),

    getters: {
        schedulingStatus : (state) => state.schedulingStatus,
    }, 

    mutations: {
        LOAD_SCHEDULING_STATUS : (state, payload) => state.schedulingStatus = payload,
    },

    actions : {
        
        LOAD_SCHEDULING_STATUS : async ({ commit }) => {
            await commit('LOAD_SCHEDULING_STATUS', await SchedulingStatusService.getAll())
        }
    }
}