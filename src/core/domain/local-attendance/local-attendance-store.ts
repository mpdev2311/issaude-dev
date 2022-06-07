import router from '@src/router'
import { LocalAttendances } from './local-attendance-model'
import LocalAttendanceService from './local-attendance-service'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    localAttendances: [],
    localAttendance: {
      id: 0,
      local: '',
      user: 0,
      id_corp: 0,
      data_gravacao: '',
      telefone: '',
      companies: '',
      endereco: '',
      uf: '',
      cep: '',
      numero: '',
      cidade: '',
      bairro: '',
      ativo: true,
    },
  }),

  getters: {
    localAttendances: (state) => state.localAttendances,
    localAttendance: (state) => state.localAttendance,
  },

  mutations: {
    LOCAL_ATTENDANCE_STORE_LOAD: (state, payload) => (state.localAttendances = payload),
    LOCAL_ATTENDANCE_STORE_LOAD_BY_ID: (state, payload) => (state.localAttendance = payload),
  },

  actions: {
    LOCAL_ATTENDANCE_STORE_LOAD: async ({ commit }) => {
      await commit('LOCAL_ATTENDANCE_STORE_LOAD', await LocalAttendanceService.getAll())
    },

    LOCAL_ATTENDANCE_STORE_SET_BLANK: async ({ commit }, localAttendances: LocalAttendances) => {
      await commit('LOCAL_ATTENDANCE_STORE_LOAD_BY_ID', localAttendances)
    },

    LOCAL_ATTENDANCE_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await LocalAttendanceService.getById(id)

      await commit('LOCAL_ATTENDANCE_STORE_LOAD_BY_ID', data)
    },

    LOCAL_ATTENDANCE_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await LocalAttendanceService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('LOCAL_ATTENDANCE_STORE_LOAD')
          router.push('/local-attendanceList')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Local de atendimento removido sucesso!')
        }
      })
    },

    LOCAL_ATTENDANCE_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.localAttendance.id > 0)
        await LocalAttendanceService.update(getters.localAttendance).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('LOCAL_ATTENDANCE_STORE_LOAD_BY_ID', getters.localAttendance.id)
            router.push('/local-attendanceList')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro atualizado com sucesso!')
          }
        })
      else
        await LocalAttendanceService.create(getters.localAttendance).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/local-attendanceList')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro salvo com sucesso!')
          }
        })
    },
  },
}
