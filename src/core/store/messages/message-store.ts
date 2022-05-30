export default {
    state : () => ({
        messages : []
    }),

    getters: {
        messages : (state) => state.messages
    },

    mutations: {
        MESSAGE_STORE_PUSH : (state, payload) => state.messages = payload    
    },

    actions: {

        MESSAGE_STORE_CLOSE_MESSAGE : async ({ commit, getters, state }, uid : string) => {
            const messages = getters.messages.filter(c => c.uid !== uid)
            messages.forEach(async (c: any) => await commit('MESSAGE_STORE_PUSH', messages))
        },

        MESSAGE_STORE_SUCCESS_PUSH : async ({ commit, getters }, message) => {

            if(getters.messages == null)
                getters.messages = []

            getters.messages.push({
                type: 'success',
                uid : Math.random().toString(36).substring(2),
                message: message,
                opened : true,
            })

            await commit('MESSAGE_STORE_PUSH', getters.messages)
        },

        MESSAGE_STORE_ERROR_PUSH : async ({ commit, getters }, message) => {

            getters.messages.push({
                type: 'error',
                uid : Math.random().toString(36).substring(2),
                message: message,
                opened : true,
            })

            await commit('MESSAGE_STORE_PUSH', getters.messages)
        }
    }
}