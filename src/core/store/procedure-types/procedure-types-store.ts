import ProcedureTypesService from '@core/services/procedure_types/procedure-types-service'
import { ProcedureType } from '@core/domain/procedure_types/procedure-types-model'
import router from '../../../router'
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers'

export default {
  state: () => ({
    procedureTypes: [],
    procedureType: {
      id: 0,
      nome: '',
      id_corp: 0,
      ativo: true,
    },
  }),

  getters: {
    procedureTypes: (state) => state.procedureTypes,
    procedureType: (state) => state.procedureType,
  },

  mutations: {
    PROCEDURE_TYPE_STORE_LOAD: (state, payload) => (state.procedureTypes = payload),
    PROCEDURE_TYPE_STORE_LOAD_BY_ID: (state, payload) => (state.procedureType = payload),
  },

  actions: {
    PROCEDURE_TYPE_STORE_LOAD: async ({ commit }) => {
      await commit('PROCEDURE_TYPE_STORE_LOAD', await ProcedureTypesService.getAll())
    },

    PROCEDURE_TYPE_STORE_SET_BLANK: async ({ commit }, procedureType: ProcedureType) => {
      await commit('PROCEDURE_TYPE_STORE_LOAD_BY_ID', procedureType)
    },

    PROCEDURE_TYPE_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await ProcedureTypesService.getById(id)

      await commit('PROCEDURE_TYPE_STORE_LOAD_BY_ID', data)
    },

    PROCEDURE_TYPE_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await ProcedureTypesService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('PROCEDURE_TYPE_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tipo de procedimento removido com sucesso!')
        }
      })
    },

    PROCEDURE_TYPE_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.procedureType.id > 0)
        await ProcedureTypesService.update(getters.procedureType).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('PROCEDURE_TYPE_STORE_LOAD_BY_ID', getters.procedureType.id)
            router.push('/procedure_types')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tipo de procedimento salvo com sucesso!')
          }
        })
      else
        await ProcedureTypesService.create(getters.procedureType).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/procedure_types')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tipo de procedimento salvo com sucesso!')
          }
        })
    },
  },
}
