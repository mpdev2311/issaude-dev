import { UserService } from './user-service'
import { User } from './user-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

let storage = localStorage.getItem('user')
export default {
  state: () => ({
    userPassword: '',
    users: [],
    user: storage
      ? JSON.parse(storage)
      : {
          id: 0,
          nome: '',
          cpf: '',
          senha: '',
          id_corp: 0,
          duracao_senha: 0,
          senha_anterior: '',
          bloquear_apos: 0,
          ultima_alteracao_senha: '',
          data_gravacao: '',
          ativo: true,
        },
  }),

  getters: {
    users: (state) => state.users,
    user: (state) => state.user,
    userPassword: (state) => state.userPassword,
  },

  mutations: {
    USER_STORE_LOAD: (state, payload) => (state.users = payload),
    USER_STORE_LOAD_BY_ID: (state, payload) => (state.user = payload),
  },

  actions: {
    USER_STORE_LOAD: async ({ commit }) => {
      await commit('USER_STORE_LOAD', await UserService.getAllUsers())
    },

    USER_STORE_SET_BLANK: async ({ commit }, user: User) => {
      await commit('USER_STORE_LOAD_BY_ID', user)
    },

    USER_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await UserService.getById(id)
      data.senha = ''
      await commit('USER_STORE_LOAD_BY_ID', data)
    },

    USER_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await UserService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('USER_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Usuário removida sucesso!')
        }
      })
    },

    USER_STORE_SAVE: async ({ getters, dispatch, state }) => {
      const sessionUser = JSON.parse(localStorage.getItem('user')) || {}
      const corp = JSON.parse(localStorage.getItem('corp')) || {}

      state.id_corp = corp.id

      if (getters.user.id > 0) {
        getters.user.id_corp = corp.id
        await UserService.update(getters.user).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('USER_STORE_LOAD_BY_ID', getters.user.id)
            router.push('/users')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'user salva com sucesso!')
          }
        })
      } else {
        getters.user.id_corp = corp.id
        await UserService.create(getters.user)
          .then(async (response) => {
            if (IsSuccessfulStatusCode(response.status)) {
              router.push('/users')
              await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'user salva com sucesso!')
            }
          })
          .catch((error) => {
            throw new Error(error)
          })
      }
    },
  },
}
