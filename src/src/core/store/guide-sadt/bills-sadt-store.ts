import BillsService from "../../services/guide-sadt/bills-services"
import { Bill} from "../../domain/guide-sadt/bills-model"
import router from "../../../router";

export default {
    state: () => ({
        billsSadts: [],
        billsSadt:{
            id_paciente: 1,
            id_protocolo: 2,
            data_prescricao: "2022-02-04T00:00:00.000+00:00",
            codigo_tiss: "10101012",
            quant: 0,
            valor_unitario: 0,
            valor_total: 0,
            tipo: 5,
            linha: null,
            conta: 1,
            acrescimo: 0.0,
            id_medico: 2,
            id_plano: 1,
            glosa: 0.0,
            obs: null,
            data_recebimento: null,
            recebido: false,
            guia: 1,
            id_orcamento: 0,
            id_produto: 0,
            id_tipo_recebimento: null,
            id_pagamento_medico: null,
            via_acesso: "U",
            tecnica_utilizada: "C",
            usuario: "suport",
            usuario_encerrou: "suport",
            //data_gravacao: "2022-02-04",
            id_corp: 1,
            id_glosa: null,
            ata_recebimento_usuario: null,
            repre_conta: null,
            inicio: "11:54:00",
            fim: "11:54:00",
            cid_c: null,
            grau_part: "12",
            ativo: true,
            id_conta_corrente: null,
            id_user: 1,
            nfe: null,
            codigo_prestador: null,
            guia_secundaria: null,
            id_remessa: null,
            opme: false,
            data_baixa_financeiro: null,
            id_user_recebeu_financeiro: null,
            provider: {
                id: null,
                nome: null
            },
            honorario: {}
        },
     
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
            console.log(data)
            await commit('BILLS_STORE_LOAD_BY_ID', data)
        },


        BILLS_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await BillsService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
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
                        if(response.status === 200 || response.status === 201){
                            await dispatch('BILLS_STORE_LOAD_BY_ID', getters.billsSadt.id)
                            //router.push('/guide-managements')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro atualizado com sucesso!')
                        }
                    })
            else
                await BillsService.create(getters.billsSadt)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        //router.push('/guide-managements')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro salvo com sucesso!')
                    }
                })
        },
        
           
     }
}