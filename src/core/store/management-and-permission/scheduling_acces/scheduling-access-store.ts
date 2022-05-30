import SchedulingAccessService from "../../../services/management-and-permission/scheduling_access/scheduling-access-service"
import { SchedulingAccess } from "../../../domain/management-and-permission/scheduling_access/scheduling-access-model";
import router from "../../../../router";
import { IsSuccessfulStatusCode } from '../../../helpers/HttpResponseHelpers';

export default {
    state: () => ({
        auxiliaryArray:[],
        schedulingAccessArray: [],
        schedulingAccessObject: {
            
            id_usuario: 0,
            tela: 0,
            id_medico: 0,
            leitura: false,
            alteracao: false,
            gravacao: false,
            excluir: false,
            excluir_bloqueio: false,
            id_user: 0,
            id_corp: 0,
            data_gravacao: "",
            encaixe: false,
            ativo: true,
            id_setor_perfil: 0,
            id_setor: 0,
        }
    }),

    getters: {
        schedulingAccessArray : (state) => state.schedulingAccessArray,
        schedulingAccessObject : (state) => state.schedulingAccessObject,
        auxiliaryArray : (state) => state.auxiliaryArray
    }, 

    mutations: {
        SCHEDULING_ACCESS_STORE_LOAD : (state, payload) => state.schedulingAccessArray = payload,
        SCHEDULING_ACCESS_STORE_LOAD_BY_ID : (state, payload) => state.schedulingAccessObject = payload,
    },

    actions :{
        
        SCHEDULING_ACCESS_STORE_LOAD : async ({ commit }) => {
            await commit('SCHEDULING_ACCESS_STORE_LOAD', await SchedulingAccessService.getAll())
        },

        SCHEDULING_ACCESS_STORE_SET_BLANK : async ({ commit }, schedulingAccessObject : SchedulingAccess) =>{
            await commit('SCHEDULING_ACCESS_STORE_LOAD_BY_ID', schedulingAccessObject)
        },

        SCHEDULING_ACCESS_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await SchedulingAccessService.getById(id);
            await commit('SCHEDULING_ACCESS_STORE_LOAD_BY_ID', data)
        },

        SCHEDULING_ACCESS_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await SchedulingAccessService.deleteById(id)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        await dispatch('SCHEDULING_ACCESS_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao excluido com sucesso!')
                    }
                })

        },

        SCHEDULING_ACCESS_STORE_SAVE : async ({ getters, dispatch }) => {
            

            if(getters.schedulingAccessObject.id > 0)
                await SchedulingAccessService.update(getters.schedulingAccessObject)
                    .then(async (response)=>{
                        if (IsSuccessfulStatusCode(response.status)) {
                            await dispatch('SCHEDULING_ACCESS_STORE_LOAD_BY_ID', getters.schedulingAccessObject.id)
                            
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao alterado com sucesso!')
                        }
                    })
            else
                await SchedulingAccessService.create(getters.schedulingAccessObject)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                      await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao salvo com sucesso!')
                    }
                })
        }
    }
}