import ProtocolNamesService from "../../../core/services/protocol_names/protocol-names-service"
import { ProtocolName } from "../../../core/domain/protocol_names/protocol-names-model"
import router from "../../../router";

export default {
    state: () => ({
        protocolNames: [],
        protocolName: {

            nome: "",
            descri:"",
            quant_ciclo: 0,
            intervalo_ciclo:0,
            quant_dias:0,
            intervalo_dia:0,
            id_user:0,
            id_corp:0,
            encerrado:false,
            valor_protocolo:0,
            duracao:"",
            ativo:true,
            cid:"",
            cid10:"",
            data_gravacao:"",
} 
    }),

    getters: {
        protocolNames : (state) => state.protocolNames,
        protocolName : (state) => state.protocolName
    }, 

    mutations: {
        PROTOCOL_NAME_STORE_LOAD : (state, payload) => state.protocolNames = payload,
        PROTOCOL_NAME_STORE_LOAD_BY_ID : (state, payload) => state.protocolName = payload,
    },

    actions :{
        
        PROTOCOL_NAME_STORE_LOAD : async ({ commit }) => {
            await commit('PROTOCOL_NAME_STORE_LOAD', await ProtocolNamesService.getAll())
        },
 
        PROTOCOL_NAME_STORE_SET_BLANK : async ({ commit }, protocolName : ProtocolName) =>{
            await commit('PROTOCOL_NAME_STORE_LOAD_BY_ID', protocolName)
        },

        PROTOCOL_NAME_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await ProtocolNamesService.getById(id);
            console.log(data)
            await commit('PROTOCOL_NAME_STORE_LOAD_BY_ID', data)
        },

        PROTOCOL_NAME_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await ProtocolNamesService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('PROTOCOL_NAME_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Protocolo removido com sucesso!')
                    }
                })

        },

        PROTOCOL_NAME_STORE_SAVE : async ({ getters, dispatch }) => {
            
            console.log(getters.protocolName)

            if(getters.protocolName.id > 0)
                await ProtocolNamesService.update(getters.protocolName)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('PROTOCOL_NAME_STORE_LOAD_BY_ID', getters.protocolName.id)
                            router.push('/protocol_names')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Protocolo salvo com sucesso!')
                        }
                    })
            else
                await ProtocolNamesService.create(getters.protocolName)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        router.push('/protocol_names')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Protocolo salvo com sucesso!')
                    }
                })
        }
    }
}