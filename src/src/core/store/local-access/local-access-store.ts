import LocalAccessService from '../../services/local_access/local-acess.service'

export default {
    state: () => ({
        localAccess: [],
    }),

    getters: {
        localAccess : (state) => state.localAccess,
    }, 

    mutations: {
        LOAD_LOCAL_ACESS : (state, payload) => state.localAccess = payload,
    },

    actions : {
        
        LOAD_LOCAL_ACESS : async ({ commit }) => {
            await commit('LOAD_LOCAL_ACESS', await LocalAccessService.getAll())
        }
    }
}