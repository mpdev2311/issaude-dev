import { PatientService } from '../../services/patients/patient-service';
import { State, Patient, RequestPatient, PatientDto, Plan } from '../../domain/patient/Patient';
import { BasePaginator } from '../../domain/pagination/Paginator';
import { store } from '../store';
import { Ethnicitie } from '../../domain/patient/ethnicitie';
import { Race } from '../../domain/patient/race';
import { Schooling } from '../../domain/patient/schooling';
import { Religion } from '../../domain/patient/religion';
import { MaritalStatus } from '../../domain/patient/marital-status';
import { OrganDocument } from '../../domain/patient/organ-document';
import { Uf } from '../../domain/patient/uf';
import { Cbo } from '../../domain/patient/cbo';
import { PlanAggree } from '@core/domain/plan/plan-agreee-model';

export default {

  state: () => ({
    paginator : {} as BasePaginator<Patient>,
    patients: [] as Patient [],
    patient: {planos: [] as Plan[]} as Patient,
    parameters: {} as RequestPatient,
    etinias : [] as Ethnicitie [],
    racas : [] as Race[],
    religioes : [] as Religion[],
    escolaridades : [] as Schooling[],
    estadoCivil: [] as MaritalStatus [],
    organizacoesDocumentos: [] as OrganDocument [],
    estados : [] as Uf[],
    cbos : [] as Cbo[],
    planAgree : [] as PlanAggree []
  }),

  getters: {
    patient : (state: State) => state.patient,
    patients : (state: State) => state.patients,
    listPatients: (state: State) => state.patients,
    patientSelected: (state: State) => state.patient,
    searchPatient: (state: State) => state.parameters.paciente_nome,
    paginator : (state: State) => state.paginator,
    etinias : (state: State) => state.etinias,
    racas : (state: State) => state.racas,
    religioes : (state: State) => state.religioes,
    escolaridades : (state: State) => state.escolaridades,
    estadoCivil: (state: State) => state.estadoCivil,
    organizacoesDocumentos: (state: State) => state.organizacoesDocumentos,
    estados: (state: State) => state.estados,
    cbos: (state: State) => state.cbos,
    planAgree: (state: State) => state.planAgree,
    
  },

  mutations: {

    PATIENTS_STORE_LOAD_TYPE_PLAN_AGREE : (state, payload) => state.planAgree = payload,
    PATIENTS_STORE_LOAD_TYPE_CBOS : (state, payload) => state.cbos = payload,
    PATIENTS_STORE_LOAD_TYPE_ESTADOS : (state, payload) => state.estados = payload,
    PATIENTS_STORE_LOAD_TYPE_ORGANIZACOES_DOCUMENTOS : (state, payload) => state.organizacoesDocumentos = payload,
    PATIENTS_STORE_LOAD_TYPE_MARITAL_STATUS : (state, payload) => state.estadoCivil = payload,
    PATIENTS_STORE_LOAD_TYPE_ETHNICITIE : (state, payload) => state.etinias = payload,
    PATIENTS_STORE_LOAD_TYPE_RACE : (state, payload) => state.racas = payload,
    PATIENTS_STORE_LOAD_TYPE_SCHOOLING : (state, payload) => state.escolaridades = payload,
    PATIENTS_STORE_LOAD_TYPE_RELIGION : (state, payload) => state.religioes = payload,
    PATIENTS_STORE_LOAD_PAGINATOR : (state, payload) => state.paginator = payload,
    PATIENTS_STORE_LOAD_BY_ID : (state, payload) => state.patient = payload,
    PATIENTS_STORE_LOAD : (state, payload) => state.patients = payload,
    SET_PATIENT_SELECTED: (state: State, payload: number) => {
      state.patient = state.patients.find(pacient => pacient.id == payload)
    },
    SET_PATIENTS_SEARCH: (state: State, payload: PatientDto[]) => {
      console.log(payload)
      state.patients = payload
    },
    SEARCH_PATIENT: (state: State, payload: string) => state.parameters.paciente_nome = payload,
    SET_CLEAR_PATIENT_SELECTED: (state: State, payload: PatientDto) => state.patient = payload, 
    SET_CLEAR_PARAMETERS: (state: State) => {
      state.parameters.id_corp = 0,
      state.parameters.size = 0,
      state.parameters.paciente_nome = '',
      state.parameters.id_corp = 0
    },
  },

  actions: {

    

    PATIENT_REMOVE_PLAN :async ({ commit, getters }, index : number) => {
      console.log(index)
      getters.patient?.planos?.splice(index, 1); 
      console.log(getters.patient?.planos)
      commit('PATIENTS_STORE_LOAD_BY_ID', getters.patient)
    },

    PATIENT_ADD_PLAN :async ({ commit, getters }) => {
      getters.patient?.planos?.push({})
      commit('PATIENTS_STORE_LOAD_BY_ID', getters.patient)
    },

    PATIENTS_STORE_SET_BLANK : async ({ commit }) => {
        const patient = new Patient();
        patient.planos = [{} as Plan]
        commit('PATIENTS_STORE_LOAD_BY_ID', patient)
    },

    PATIENTS_STORE_LOAD_TYPES : async ({ commit }) => {
      commit('PATIENTS_STORE_LOAD_TYPE_PLAN_AGREE',  await PatientService.findPlanAgree())
      commit('PATIENTS_STORE_LOAD_TYPE_CBOS', await PatientService.findMaritalCbos())
      commit('PATIENTS_STORE_LOAD_TYPE_ETHNICITIE', await PatientService.findEthnicities())
      commit('PATIENTS_STORE_LOAD_TYPE_RACE', await PatientService.findRace())
      commit('PATIENTS_STORE_LOAD_TYPE_SCHOOLING', await PatientService.findSchooling())
      commit('PATIENTS_STORE_LOAD_TYPE_RELIGION', await PatientService.findReligion())
      commit('PATIENTS_STORE_LOAD_TYPE_MARITAL_STATUS', await PatientService.findMaritalStatus())
      commit('PATIENTS_STORE_LOAD_TYPE_ORGANIZACOES_DOCUMENTOS',await PatientService.findorganizacoesDocumentos())
      commit('PATIENTS_STORE_LOAD_TYPE_ESTADOS', await PatientService.findEstados())
    },

    PATIENTS_STORE_INIT : async ({ commit }) => {
      await commit('PATIENTS_STORE_LOAD_PAGINATOR', new BasePaginator<Patient>())
    },

    PATIENTS_STORE_FIND_ALL : async ({ commit, getters }) => {
      await commit('PATIENTS_STORE_LOAD_PAGINATOR', await PatientService.getAll([], getters.paginator))
    },

    PATIENTS_STORE_LOAD_BY_ID : async({ commit }, id : number) =>{
      const patient = await PatientService.findById(id);
      console.log(patient)
      await commit('PATIENTS_STORE_LOAD_BY_ID', patient)
    }, 
    PATIENTS_STORE_LOAD: async({ commit }) => {
      await commit('PATIENTS_STORE_LOAD', await PatientService.findAll())
    },

    PATIENTS_STORE_SAVE : async({ getters }) => {
      await PatientService.save(getters.patient)
        .then(()=>{
          store.dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Paciente salvo com sucesso!')
        }).catch((error)=>{
            store.dispatch('MESSAGE_STORE_ERROR_PUSH', 'Erro ao salvar paciente!')
        })
    },

    SEARCH_PATIENT: async({ commit }, parameter: RequestPatient) => {
      await commit('SET_PATIENTS_SEARCH', await PatientService.searchPatient(parameter))
    },
  }

  
}