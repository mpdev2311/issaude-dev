import ScheduleNameService from "../../../core/services/schedule_rooms/schedule-name-service"
import { ScheduleName } from "../../domain/scheduling/schedule_rooms/schedule-name-model"
import router from "../../../router";

export default {
    state: () => ({
        scheduleNames: [],
        scheduleName: {
            id: 0,
            nome: "",
            id_local: 0,
            id_user: 0,
            id_corp: 0,
            id_setor: 0,
            id_tipo_sala: 0,
            desativado: false,
            ativo: true,
            sigla: "",
            leito: "",
            idade_max: 0,
            idade_min: 0,
            protocolos: ""
        } 
    }),

    getters: {
        scheduleNames : (state) => state.scheduleNames,
        scheduleName : (state) => state.scheduleName
    }, 

    mutations: {
        SCHEDULE_NAME_STORE_LOAD : (state, payload) => state.scheduleNames = payload,
        SCHEDULE_NAME_STORE_LOAD_BY_ID : (state, payload) => state.scheduleName = payload,
    },

    actions :{
        
        SCHEDULE_NAME_STORE_LOAD : async ({ commit }) => {
            await commit('SCHEDULE_NAME_STORE_LOAD', await ScheduleNameService.getAll())
        },
 
        SCHEDULE_NAME_STORE_SET_BLANK : async ({ commit }, scheduleName : ScheduleName) =>{
            await commit('SCHEDULE_NAME_STORE_LOAD_BY_ID', scheduleName)
        },

        SCHEDULE_NAME_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await ScheduleNameService.getById(id);
            console.log(data)
            await commit('SCHEDULE_NAME_STORE_LOAD_BY_ID', data)
        },

        SCHEDULE_NAME_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await ScheduleNameService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('SCHEDULE_NAME_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Agendas e Salas removido com sucesso!')
                    }
                })

        },

        SCHEDULE_NAME_STORE_SAVE : async ({ getters, dispatch }) => {
            
            console.log(getters.scheduleName)

            if(getters.scheduleName.id > 0)
                await ScheduleNameService.update(getters.scheduleName)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('SCHEDULE_NAME_STORE_LOAD_BY_ID', getters.scheduleName.id)
                            router.push('/schedule_rooms')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Agendas e Salas salvo com sucesso!')
                        }
                    })
            else
                await ScheduleNameService.create(getters.scheduleName)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        router.push('/schedule_rooms')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Agendas e Salas salvo com sucesso!')
                    }
                })
        }
    }
}