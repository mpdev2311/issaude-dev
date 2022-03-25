import GuideManagementService from "../../services/guide-management/guide-management-service"
import { GuideManagement } from "../../domain/guide-management/guide-management-model";
import router from "../../../router";

export default {
    state: () => ({
        guideManagement: {
        guideManagements: [],
        guideManagement: {
            id: 0,
            numero_guia: "",
            emissao: "",
            id_profissional_executante: 0,
            d_paciente: 0,
            tipo_doenca: "",
            tempo_doenca: "",
            ndicacao_acidente: 0,
            cid_principal: "",
            cid1: null,
            cid2: null,
            id3: null,
            data_atendimento: "",
            od_procedimento: "",
            tipo_consulta: 0,
            tipo_saida: 0,
            obs: "",
            cod_tabela_hm: "",
            tempo_doe: "A",
            tipo: 5,
            data_fim: "",
            tipo_atendimento: "0",
            id_agenda: 1,
            consulta: true,
            senha: "",
            id_agenda_nome: 0,
            id_local_atendimento: 0,
            id_empresa_contratada: 1,
            usuario: "suport",
            data_gravacao: "2021-11-08T18:55:25.421+00:00",
            id_solicitante: 2,
            id_corp: 1,
            id_tipo_internacao: null,
            id_regime_internacao: null,
            carater_internacao: "",
            id_user: 1,
            id_empresa_solicitante: 0,
            qdiarias: null,
            id_plano: 1,
            id_acomodacao: null,
            alta: null,
            id_paciente: 0,
            id_entrega: null,
            data_hora_recebimento: null,
            id_user_recebeu: null,
            hora_atendimento: "1970-01-01T18:53:00.000+00:00",
            data_autorizacao: "",
            justificativa: null,
            id_especialidade: 0,
            id_medico_autorizador: 0,
            atendimento_rn: "",
            sintomas: null,
            prova_diagnostica: null,
            ativo: true,
            guia_glosa: null,
            validade_senha: "2021-11-08T00:00:00.000+00:00",
            data_solicitacao: "",
            cod_solicitante: null,
            cod_executante: null,
            numero_guia_solicitacao_internacao: null,
            is_venda: false,
            id_prestador: null,
            id_user_quitou: null,
            dados_neo_natal: null,
            dados_parto: null,
        },
    
    }),

    getters: {
        guideManagements: (state) => state.guideManagements,
        guideManagement: (state) => state.guideManagement
    }, 

    mutations: {
        GUIDE_MANAGEMENT_STORE_LOAD : (state, payload) => state.guideManagements = payload,
        GUIDE_MANAGEMENT_STORE_LOAD_BY_ID : (state, payload) => state.guideManagement = payload
    },

    actions :{        
        
        
        GUIDE_MANAGEMENT_STORE_LOAD : async ({ commit }) => {
            await commit('GUIDE_MANAGEMENT_STORE_LOAD', await GuideManagementService.getAll())
        },

        
        GUIDE_MANAGEMENT_STORE_SET_BLANK : async ({ commit }, guideManagement : GuideManagement) =>{            
            await commit('GUIDE_MANAGEMENT_STORE_LOAD_BY_ID', guideManagement)
        },

        GUIDE_MANAGEMENT_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await GuideManagementService.getById(id);
            console.log(data)
            await commit('GUIDE_MANAGEMENT_STORE_LOAD_BY_ID', data)
        },


        GUIDE_MANAGEMENT_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await GuideManagementService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('GUIDE_MANAGEMENT_STORE_LOAD')
                        router.push('/guide-managements')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Guia removido sucesso!')
                    }
                })
        },

        GUIDE_MANAGEMENT_STORE_SAVE : async ({ getters, dispatch }) => {  
            if(getters.guideManagement.id > 0)
                await GuideManagementService.update(getters.guideManagement)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('GUIDE_MANAGEMENT_STORE_LOAD_BY_ID', getters.guideManagement.id)
                            router.push('/guide-managements')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro atualizado com sucesso!')
                        }
                    })
            else
                await GuideManagementService.create(getters.guideManagement)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        router.push('/guide-managements')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro salvo com sucesso!')
                    }
                })
        },
        
           
     }
}