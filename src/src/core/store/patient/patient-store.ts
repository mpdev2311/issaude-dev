import { PatientService } from '../../services/patients/patient-service';
import { State, Patient, RequestPatient } from '../../domain/patient/Patient';
export default {
  state: () => ({
    patients: [] as Patient [],
    patient: {} as Patient,
    parameters: {} as RequestPatient
  }),

  getters: {
    listPatients: (state: State) => state.patients,
    patientSelected: (state: State) => state.patient,
    searchPatient: (state: State) => state.parameters.paciente_nome
  },

  mutations: {
    SET_PATIENT_SELECTED: (state: State, payload: number) => {
      state.patient = state.patients.find(pacient => pacient.id == payload)
    },
    SET_PATIENTS_SEARCH: (state: State, payload: Patient[]) => {
      console.log(payload)
      state.patients = payload
    },
    SEARCH_PATIENT: (state: State, payload: string) => state.parameters.paciente_nome = payload,
    SET_CLEAR_PATIENT_SELECTED: (state: State, payload: Patient) => state.patient = payload, 
    SET_CLEAR_PARAMETERS: (state: State) => {
      state.parameters.id_corp = 0,
      state.parameters.size = 0,
      state.parameters.paciente_nome = '',
      state.parameters.id_corp = 0
    }
  },

  actions: {
    SEARCH_PATIENT: async({ commit }, parameter: RequestPatient) => {
      await commit('SET_PATIENTS_SEARCH', await PatientService.searchPatient(parameter))
    },
  }

  
}