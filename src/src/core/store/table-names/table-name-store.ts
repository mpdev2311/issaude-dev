import TableNameService from "../../services/table-names/table-name-service"
import { TableName } from "../../domain/table-names/table-name-model";
import router from "../../../router";

export default {
    state: () => ({
        tableNames: [],
        tableName: {
            id:0,
            codigo:"",
            descri:"",
            id_corp:0,
            id_tipo:0,
            ativo:true,
            id_user:0,
            tabela_tipo:"",
            data_gravacao:""
        }
    }),

    getters: {
        tableNames : (state) => state.tableNames,
        tableName : (state) => state.tableName
    }, 

    mutations: {
        TABLE_NAMES_STORE_LOAD : (state, payload) => state.tableNames = payload,
        TABLE_NAMES_STORE_LOAD_BY_ID : (state, payload) => state.tableName = payload,
    },

    actions :{
        
        TABLE_NAMES_STORE_LOAD : async ({ commit }) => {
            await commit('TABLE_NAMES_STORE_LOAD', await TableNameService.getAll())
        },

        TABLE_NAMES_STORE_SET_BLANK : async ({ commit }, tableName : TableName) =>{
            await commit('TABLE_NAMES_STORE_LOAD_BY_ID', tableName)
        },

        TABLE_NAMES_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await TableNameService.getById(id);
            console.log(data)
            await commit('TABLE_NAMES_STORE_LOAD_BY_ID', data)
        },

        TABLE_NAMES_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await TableNameService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('TABLE_NAMES_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tabela removido com sucesso!')
                    }
                })

        },

        TABLE_NAMES_STORE_SAVE : async ({ getters, dispatch }) => {
            
            console.log(getters.tableName)

            if(getters.tableName.id > 0)
                await TableNameService.update(getters.tableName)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('TABLE_NAMES_STORE_LOAD_BY_ID', getters.tableName.id)
                            router.push('/plans')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tabela alterado com sucesso!')
                        }
                    })
            else
                await TableNameService.create(getters.tableName)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        router.push('/plans')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tabela salvo com sucesso!')
                    }
                })
        }
    }
}