import ScheduleNameService from '@core/services/schedule_rooms/schedule-name-service'
import { ScheduleName } from '../../domain/scheduling/schedule_rooms/schedule-name-model'
import router from '../../../router'
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers'

export default {
  state: () => ({
    scheduleNames: [],
    scheduleName: {
      id: 0,
      nome: '',
      id_local: 0,
      id_user: 0,
      id_corp: 0,
      id_setor: 0,
      id_tipo_sala: 0,
      desativado: false,
      ativo: true,
      sigla: '',
      leito: '',
      idade_max: 0,
      idade_min: 0,
      protocolos: '',
    },
  }),

  getters: {
    scheduleNames: (state) => state.scheduleNames,
    scheduleName: (state) => state.scheduleName,
  },

  mutations: {
    SCHEDULE_NAME_STORE_LOAD: (state, payload) => (state.scheduleNames = payload),
    SCHEDULE_NAME_STORE_LOAD_BY_ID: (state, payload) => (state.scheduleName = payload),
  },

  actions: {
    SCHEDULE_NAME_STORE_LOAD: async ({ commit }) => {
      await commit('SCHEDULE_NAME_STORE_LOAD', await new ScheduleNameService().getAll([], null))
    },
  },
}
