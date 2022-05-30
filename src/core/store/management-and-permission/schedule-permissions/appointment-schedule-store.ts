import AppointmentScheduleService from "../../../services/management-and-permission/schedule-permissions/appointment-schedule-service"
import { AppointmentSchedule } from "../../../domain//management-and-permission/schedule-permissions/appointment-schedule-model";
import router from "../../../../router";
import { IsSuccessfulStatusCode } from '../../../helpers/HttpResponseHelpers';

export default {
    state: () => ({
        appointmentSchedules: [],
        appointmentSchedule: {
           
        }
    }),

    getters: {
        appointmentSchedules : (state) => state.appointmentSchedules,
        appointmentSchedule : (state) => state.appointmentSchedule
    }, 

    mutations: {
        APPOINTMENT_SCHEDULE_STORE_LOAD : (state, payload) => state.appointmentSchedules = payload,
        APPOINTMENT_SCHEDULE_STORE_LOAD_BY_ID : (state, payload) => state.appointmentSchedule = payload,
    },

    actions :{
        
        APPOINTMENT_SCHEDULE_STORE_LOAD : async ({ commit }) => {
            await commit('APPOINTMENT_SCHEDULE_STORE_LOAD', await AppointmentScheduleService.getAll())
        },

        APPOINTMENT_SCHEDULE_STORE_SET_BLANK : async ({ commit }, appointmentSchedule : AppointmentSchedule) =>{
            await commit('APPOINTMENT_SCHEDULE_STORE_LOAD_BY_ID', appointmentSchedule)
        },

        APPOINTMENT_SCHEDULE_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await AppointmentScheduleService.getById(id);
            await commit('APPOINTMENT_SCHEDULE_STORE_LOAD_BY_ID', data)
        },

        APPOINTMENT_SCHEDULE_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await AppointmentScheduleService.deleteById(id)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        await dispatch('APPOINTMENT_SCHEDULE_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao excluido com sucesso!')
                    }
                })

        },

        APPOINTMENT_SCHEDULE_STORE_SAVE : async ({ getters, dispatch }) => {
            if(getters.appointmentSchedule.id > 0)
                await AppointmentScheduleService.update(getters.appointmentSchedule)
                    .then(async (response)=>{
                        if (IsSuccessfulStatusCode(response.status)) {
                            await dispatch('APPOINTMENT_SCHEDULE_STORE_LOAD_BY_ID', getters.appointmentSchedule.id)
                            router.push('/appointmentSchedules')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao alterado com sucesso!')
                        }
                    })
            else
                await AppointmentScheduleService.create(getters.appointmentSchedule)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                      await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao salvo com sucesso!')
                    }
                })
        }
    }
}