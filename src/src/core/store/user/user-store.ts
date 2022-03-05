import { UserService } from "../../../core/services/users/user-service"
import { User } from "../../../core/domain/users/user-model";
import router from "../../../router";

export default {
    state: () => ({
        userPassword: '',
        users: [],
        user: {
            id:0,
            nome: "",
            cpf: "",
            senha: "",
            id_corp: 0,
            duracao_senha: 0,
            senha_anterior: "",
            bloquear_apos: 0,
            ultima_alteracao_senha: "",
            data_gravacao: "",
            ativo: true
        }
    }),

    getters: {
        users: (state) => state.users,
        user: (state) => state.user,
        userPassword: (state) => state.userPassword
    },

    mutations: {
        USER_STORE_LOAD: (state, payload) => state.users = payload,
        USER_STORE_LOAD_BY_ID: (state, payload) => state.user = payload,
    },

    actions: {

        USER_STORE_LOAD: async ({ commit }) => {
            await commit('USER_STORE_LOAD', await UserService.getAllUsers())
        },

        USER_STORE_SET_BLANK: async ({ commit }, user: User) => {
            await commit('USER_STORE_LOAD_BY_ID', user)
        },

        USER_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
            const { data } = await UserService.getById(id);
            console.log(data)
            data.senha = ""
            await commit('USER_STORE_LOAD_BY_ID', data)
        },

        USER_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
            await UserService.deleteById(id)
                .then(async (response) => {
                    if (response.status === 200 || response.status === 201) {
                        await dispatch('USER_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'USER removida sucesso!')
                    }
                })

        },

        USER_STORE_SAVE: async ({ getters, dispatch, state }) => {
            const sessionUser = JSON.parse(localStorage.getItem('user')) || {}
            const corp = JSON.parse(localStorage.getItem('corp')) || {}
            
            state.id_corp = corp.id;

            console.log(getters.user)
            if (getters.user.id > 0) {
                getters.user.id_corp = corp.id
                await UserService.update(getters.user)
                    .then(async (response) => {
                        if (response.status === 200 || response.status === 201) {
                            await dispatch('USER_STORE_LOAD_BY_ID', getters.user.id)
                            router.push('/users')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'user salva com sucesso!')

                        }
                    })
            } else {
                
                getters.user.id_corp = corp.id
                await UserService.create(getters.user)
                    .then(async (response) => {
                        if (response.status === 200 || response.status === 201) {
                            router.push('/users')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'user salva com sucesso!')
                        }
                    })
            }
        }
    }
}