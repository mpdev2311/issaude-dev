import HealthInsurancesService from "../../services/health-insurances/health-insurances-service"
import { HealthInsurance } from "../../domain/health-insurances/health-insurances-model";
import router from "../../../router";

export default {
    state: () => ({
        guiamanagements: [],
        guiamanagement: {
            numero_guia: '',
            emissao: '',
            id_profissional_executante: 0,
            id_paciente: 0,
            tipo_doenca:'',
            tempo_doenca: '',
            indicacao_acidente: 0,
            cid_principal: '',
            cid1: null,
            cid2: null,
            cid3: null,
            data_atendimento: '',
            cod_procedimento: '',
            tipo_consulta: 0,
            tipo_saida: 0,
            obs: '',
            cod_tabela_hm: '',
            tempo_doe: '',
            tipo: 0,
            data_fim: '',
            tipo_atendimento: '',
            id_agenda: 0,
            consulta: false,
            senha: '',
            id_agenda_nome: 0,
            id_local_atendimento: 0,
            id_empresa_contratada: 0,
            usuario: '',
            data_gravacao: '',
            id_solicitante: 0,
            id_corp: 0,
            id_tipo_internacao:0,
            id_regime_internacao:0,
            carater_internacao:'',
            id_user: 0,
            id_empresa_solicitante: 0,
            qdiarias:0,
            id_plano: 0,
            id_acomodacao: 0,
            alta: '',
            id_entrega: 0,
            data_hora_recebimento: '',
            id_user_recebeu: 0,
            hora_atendimento: '',
            data_autorizacao: '',
            justificativa: '',
            id_especialidade: 0,
            id_medico_autorizador: 0,
            atendimento_rn:'',
            sintomas: '',
            prova_diagnostica: '',
            ativo: true,
            guia_glosa: '',
            validade_senha: '',
            data_solicitacao: '',
            cod_solicitante: 0,
            cod_executante: 0,
            numero_guia_solicitacao_internacao: 0,
            is_venda: false,
            id_prestador: 0,
            id_user_quitou: 0,
            dados_neo_natal: '',
            dados_parto: '',   
        },
    
    }),

    getters: {
        healthInsurances : (state) => state.healthInsurances,
        healthInsurance : (state) => state.healthInsurance
    }, 

    mutations: {
        HEALTH_INSURANCES_STORE_LOAD : (state, payload) => state.healthInsurances = payload,
        HEALTH_INSURANCES_STORE_LOAD_BY_ID : (state, payload) => state.healthInsurance = payload
    },

    actions :{        
        
        
        HEALTH_INSURANCES_STORE_LOAD : async ({ commit }) => {
            await commit('HEALTH_INSURANCES_STORE_LOAD', await HealthInsurancesService.getAll())
        },

        HEALTH_INSURANCES_STORE_SET_BLANK : async ({ commit }, healthInsurance : HealthInsurance) =>{
            
            await commit('HEALTH_INSURANCES_STORE_LOAD_BY_ID', healthInsurance)
        },

        HEALTH_INSURANCES_PROFESSIONA_STORE_LOAD_GET : async ({ commit }, healthInsurance : HealthInsurance) => {  
            console.log(healthInsurance)
            await commit('HEALTH_INSURANCES_STORE_LOAD', healthInsurance)
        },

        HEALTH_INSURANCES_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await HealthInsurancesService.getById(id);
            //console.log(data)
            await commit('HEALTH_INSURANCES_STORE_LOAD_BY_ID', data)
        },

        HEALTH_INSURANCES_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await HealthInsurancesService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('HEALTH_INSURANCES_STORE_LOAD')
                        router.push('/health_insurances')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Convênio removido sucesso!')
                    }
                })

        },

        HEALTH_INSURANCES_STORE_SAVE : async ({ getters, dispatch }) => {
            
            console.log(getters.healthInsurance)

            if(getters.healthInsurance.id > 0)
                await HealthInsurancesService.update(getters.healthInsurance)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('HEALTH_INSURANCES_STORE_LOAD_BY_ID', getters.healthInsurance.id)
                            router.push('/health_insurances')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de convênios salva com sucesso!')
                        }
                    })
            else
                await HealthInsurancesService.create(getters.healthInsurance)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        router.push('/health_insurances')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de convênios salva com sucesso!')
                    }
                })
        }
    }
}