import UnitMeasureService from '@core/services/units/unit-service'
import { Unit } from '@core/domain/units/unit-model'
import router from '../../../router'
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers'

export default {
  state: () => ({
    unitMeasures: [],
    unitMeasure: {
      nome: '',
      id: 0,
      formula: 0,
      ativo: true,
    },
  }),

  getters: {
    unitMeasures: (state) => state.unitMeasures,
    unitMeasure: (state) => state.unitMeasure,
  },

  mutations: {
    UNIT_STORE_LOAD: (state, payload) => (state.unitMeasures = payload),
    UNIT_STORE_LOAD_BY_ID: (state, payload) => (state.unitMeasure = payload),
  },

  actions: {
    UNIT_STORE_LOAD: async ({ commit }) => {
      await commit('UNIT_STORE_LOAD', await UnitMeasureService.getAll())
    },

    UNIT_STORE_SET_BLANK: async ({ commit }, unitMeasure: Unit) => {
      await commit('UNIT_STORE_LOAD_BY_ID', unitMeasure)
    },

    UNIT_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await UnitMeasureService.getById(id)

      await commit('UNIT_STORE_LOAD_BY_ID', data)
    },

    UNIT_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await UnitMeasureService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('UNIT_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Unit Measure removida sucesso!')
        }
      })
    },

    UNIT_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.unitMeasure.id > 0)
        await UnitMeasureService.update(getters.unitMeasure).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('UNIT_STORE_LOAD_BY_ID', getters.unitMeasure.id)
            router.push('/unitmeasure')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Unit Measure salva com sucesso!')
          }
        })
      else
        await UnitMeasureService.create(getters.unitMeasure).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/unitmeasure')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'unitMeasure salva com sucesso!')
          }
        })
    },
  },
}
