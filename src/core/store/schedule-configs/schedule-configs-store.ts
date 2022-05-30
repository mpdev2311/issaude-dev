import ScheduleConfigService from '@core/services/schedule-config/schedule-config-service'
import { ScheduleConfig } from '../../domain/scheduling/schedule-config/schedule-config-model'
import router from '../../../router'
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers'

export default {
  state: () => ({
    scheduleConfigs: [],
    scheduleConfig: {
      id: 0,
      p_consulta: 0,
      seguimento: 0,
      retorno: 0,
      id_medico: 0,
      id_local_atendimento: 0,
      id_dia_semana: 0,
      id_agenda_nome: 0,
      data_inicio: '',
      data_fim: '',
      id_user: 0,
      id_corp: 0,
      data_gravacao: '',
      obs: '',
      inicio: '',
      fim: '',
      tempo_consulta: '',
      agenda_unica: false,
      primeira_consulta: 0,
      ativo: true,
      bloquear_online: false,
      video: false,
      procedimento_amb: '',
    },
  }),

  getters: {
    scheduleConfigs: (state) => state.scheduleConfigs,
    scheduleConfig: (state) => state.scheduleConfig,
  },

  mutations: {
    SCHEDULE_CONFIGS_STORE_LOAD: (state, payload) => (state.scheduleConfigs = payload),
    SCHEDULE_CONFIGS_STORE_LOAD_BY_ID: (state, payload) => (state.scheduleConfig = payload),
  },

  actions: {
    SCHEDULE_CONFIGS_STORE_LOAD: async ({ commit }) => {
      await commit('SCHEDULE_CONFIGS_STORE_LOAD', await ScheduleConfigService.getAll())
    },

    SCHEDULE_CONFIGS_STORE_SET_BLANK: async ({ commit }, scheduleConfig: ScheduleConfig) => {
      await commit('SCHEDULE_CONFIGS_STORE_LOAD_BY_ID', scheduleConfig)
    },

    SCHEDULE_CONFIGS_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await ScheduleConfigService.getById(id)

      await commit('SCHEDULE_CONFIGS_STORE_LOAD_BY_ID', data)
    },

    SCHEDULE_CONFIGS_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await ScheduleConfigService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('SCHEDULE_CONFIGS_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Agenda removida com sucesso!')
        }
      })
    },

    SCHEDULE_CONFIGS_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.scheduleConfig.id > 0)
        await ScheduleConfigService.update(getters.scheduleConfig).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('SCHEDULE_CONFIGS_STORE_LOAD_BY_ID', getters.scheduleConfig.id)
            router.push('/schedule_configs')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro agenda salvo com sucesso!')
          }
        })
      else
        await ScheduleConfigService.create(getters.scheduleConfig).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/schedule_configs')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro agenda salvo com sucesso!')
          }
        })
    },
  },
}
