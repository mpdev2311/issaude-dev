import PasswordAttendanceService from "../../../../core/services/reception/password-attendance/password-attendance-service"
import { PasswordAttendance } from "../../../../core/domain/reception/password-attendance/password-attendance-domain"
import router from "../../../../router";
import { PatientService } from '../../../services/patients/patient-service'

export default {
    state: () => ({
        passwordAttendances: [],
        passwordAttendance: {
            id: 0,
            ativo: true,
            id_user: 1,
            id_corp: 1,
            senha: "",
            sigla_servico: "",
            prioridade: false,
            senha_chamada: false,
            id_paciente: 1,
            id_agenda: 1,
            id_agenda_marcacao: 1
        } 
    }),

    getters: {
        passwordAttendances : (state) => state.passwordAttendances,
        passwordAttendance : (state) => state.passwordAttendance
    }, 

    mutations: {
        PASSWORD_ATTENDANCE_STORE_LOAD : (state, payload) => state.passwordAttendances = payload,
        PASSWORD_ATTENDANCE_STORE_LOAD_BY_ID : (state, payload) => state.passwordAttendance = payload,
    },

    actions : {
        
        PASSWORD_ATTENDANCE_STORE_LOAD : async ({ commit }) => {
            await commit('PASSWORD_ATTENDANCE_STORE_LOAD', await PasswordAttendanceService.getAll())
        },
 
        PASSWORD_ATTENDANCE_STORE_SET_BLANK : async ({ commit }, passwordAttendance : PasswordAttendance) =>{
            await commit('PASSWORD_ATTENDANCE_STORE_LOAD_BY_ID', passwordAttendance)
        },

        PASSWORD_ATTENDANCE_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await PasswordAttendanceService.getById(id);
            console.log(data)
            await commit('PASSWORD_ATTENDANCE_STORE_LOAD_BY_ID', data)
        },

        FIND_PATIENT_BY_CPF : async ({ dispatch, getters, commit }, cpf : string) => {
            await PatientService.findByCpf(cpf)
                .then(async (response)=> {
                    if(response){

                        console.log(response)
                        getters.passwordAttendance.id_paciente = response.id
                        await commit('PASSWORD_ATTENDANCE_STORE_LOAD_BY_ID', getters.passwordAttendance)
                        console.log(getters.passwordAttendance)

                    }
                }).catch(()=>{
                     dispatch('MESSAGE_STORE_ERROR_PUSH', 'Nenhum paciente foi encontrado com esse CPF!')
                })
        },

        PASSWORD_ATTENDANCE_STORE_DELETE_BY_ID : async ({ dispatch }, id : number) => {
            await PasswordAttendanceService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('PASSWORD_ATTENDANCE_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Agenda removida com sucesso!')
                    }
                })
        },

        PASSWORD_ATTENDANCE_STORE_SAVE : async ({ getters, dispatch }) => {
            await PasswordAttendanceService.create(getters.passwordAttendance)
            .then(async (response)=>{
                if(response.status === 200 || response.status === 201){
                    await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Senha gerada com sucesso!')
                    router.push('/password_attendance')
                }
            })
        }
    }
}