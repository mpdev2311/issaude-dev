import SpecialtyService from '@core/services/specialties/specialty-service'
import { Specialty } from '@core/domain/specialty/specialty-model'
import router from '../../../router'
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers'

export default {
  state: () => ({
    specialties: [],
    specialty: {
      nome_especialidade: '',
      codigo: 0,
      id: 0,
      codigo2: 0,
      id_user: 0,
      id_corp: 0,
      ativo: true,
      codigo_3: '',
    },
  }),

  getters: {
    specialties: (state) => state.specialties,
    specialty: (state) => state.specialty,
  },

  mutations: {
    SPECIALTY_STORE_LOAD: (state, payload) => (state.specialties = payload),
    SPECIALTY_STORE_LOAD_BY_ID: (state, payload) => (state.specialty = payload),
  },

  actions: {
    SPECIALTY_STORE_LOAD: async ({ commit }) => {
      await commit('SPECIALTY_STORE_LOAD', await SpecialtyService.getAll())
    },

    SPECIALTY_STORE_SET_BLANK: async ({ commit }, specialty: Specialty) => {
      await commit('SPECIALTY_STORE_LOAD_BY_ID', specialty)
    },

    SPECIALTY_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await SpecialtyService.getById(id)
      await commit('SPECIALTY_STORE_LOAD_BY_ID', data)
    },

    SPECIALTY_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await SpecialtyService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('SPECIALTY_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Especialidade removida com sucesso!')
        }
      })
    },

    SPECIALTY_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.specialty.id > 0)
        await SpecialtyService.update(getters.specialty).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('SPECIALTY_STORE_LOAD_BY_ID', getters.specialty.id)
            router.push('/specialties/')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Especialidade salva com sucesso!')
          }
        })
      else
        await SpecialtyService.create(getters.specialty).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/specialties/')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Especialidade salva com sucesso!')
          }
        })
    },
  },
}
