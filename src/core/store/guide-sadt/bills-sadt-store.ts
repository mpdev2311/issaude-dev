import BillsService from "../../services/guide-sadt/bills-services"
import { Bill} from "../../domain/guide-sadt/bills-model"
import router from "../../../router";
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers';

export default {
    state: () => ({
        billsSadts: [],
        billsSadt:{},
     
    }),

    getters: {
        billsSadts: (state) => state.billsSadts,
        billsSadt: (state) => state.billsSadt
    }, 

    mutations: {
       BILLS_STORE_LOAD : (state, payload) => state.billsSadts = payload,
        BILLS_STORE_LOAD_BY_ID : (state, payload) => state.billsSadt = payload
    },

    actions :{ 
        
        BILLS_STORE_LOAD : async ({ commit }) => {
            const data = await BillsService.getAll();
            await commit('BILLS_STORE_LOAD', data)
            return data;
        },

        
        BILLS_STORE_SET_BLANK : async ({ commit }, billsSadt : Bill) =>{            
            await commit('BILLS_STORE_LOAD_BY_ID', billsSadt)
        },

        BILLS_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await BillsService.getById(id);
            
            await commit('BILLS_STORE_LOAD_BY_ID', data)
        },


        BILLS_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await BillsService.deleteById(id)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        await dispatch('BILLS_STORE_LOAD')
                        //router.push('/guide-managements')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Procedimento removido sucesso!')
                    }
                })
        },

        BILLS_STORE_SAVE : async ({ getters, dispatch }) => {  
            if(getters.billsSadt.id > 0)
                await BillsService.update(getters.billsSadt)
                    .then(async (response)=>{
                        if (IsSuccessfulStatusCode(response.status)) {
                            await dispatch('BILLS_STORE_LOAD_BY_ID', getters.billsSadt.id)
                            //router.push('/guide-managements')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro atualizado com sucesso!')
                        }
                    })
            else
                await BillsService.create(getters.billsSadt)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        //router.push('/guide-managements')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro salvo com sucesso!')
                    }
                })
        },
        
           
     }
}