import { PatientService } from './patient-service'
import { State, Patient, RequestPatient } from './patient'
import { BasePaginator } from '@domain/pagination/Paginator'

export default {
  state: {
    paginator: {} as BasePaginator<Patient>,
  },
  getters: {
    paginator: (state: State) => state.paginator,
  },
  mutations: {
    PATIENTS_STORE_LOAD_PAGINATOR: (state, payload) => (state.paginator = payload),
  },

  actions: {
    PATIENTS_STORE_CHANGE_PAGE_NUMBER: async ({ commit }, pageNumber: number) => {},

    SEARCH_PATIENT: async ({ commit }, parameter: RequestPatient) => {
      await commit(
        'PATIENTS_STORE_LOAD_PAGINATOR',
        await new PatientService().searchPatient(parameter)
      )
    },
  },
}
