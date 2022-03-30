import GuideTypeService from "../../services/guides-type/guides-type-services"
import { GuideType } from "../../domain/guides-type/guides-type-model";
import router from "../../../router";

export default {
    state: () => ({
        guidetypes: [],
        guidetype: {
            id: 0,
            nome: "",
            ativo: true,
            servico_tipo: "",
        }
    }),

    getters: {
        guidetypes : (state) => state.guidetypes,
     //   guidetype : (state) => state.guidetype
    }, 

    mutations: {
        GUIDES_TYPE_STORE_LOAD : (state, payload) => state.guidetypes = payload,
      //  GUIDES_TYPE_STORE_LOAD_BY_ID : (state, payload) => state.guidetype = payload,
    },

    actions :{
        
       GUIDES_TYPE_STORE_LOAD : async ({ commit }) => {
            await commit('GUIDES_TYPE_STORE_LOAD', await GuideTypeService.getAll())
        },

    //     GUIDES_TYPE_STORE_SET_BLANK : async ({ commit }, guidetype : GuideType) =>{
    //         await commit('TYPE_GUIDES_STORE_LOAD_BY_ID', guidetype)
    //     },

    //     GUIDES_TYPE_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
    //         const { data } = await GuideTypeService.getById(id);
    //         console.log(data)
    //         await commit('TYPE_GUIDES_STORE_LOAD_BY_ID', data)
    //     },

    //     GUIDES_TYPE_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
    //         await GuideTypeService.deleteById(id)
    //             .then(async (response)=>{
    //                 if(response.status === 200 || response.status === 201){
    //                     await dispatch('TYPE_GUIDES_STORE_LOAD')
    //                     await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tabela removido com sucesso!')
    //                 }
    //             })

    //     },

    //   GUIDES_TYPE_STORE_SAVE : async ({ getters, dispatch }) => {
            
    //         console.log(getters.guidetype)

    //         if(getters.guidetype.id > 0)
    //             await GuideTypeService.update(getters.guidetype)
    //                 .then(async (response)=>{
    //                     if(response.status === 200 || response.status === 201){
    //                         await dispatch('TYPE_GUIDES_STORE_LOAD_BY_ID', getters.guidetype.id)
    //                         router.push('/plans')
    //                         await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tabela alterado com sucesso!')
    //                     }
    //                 })
    //         else
    //             await GuideTypeService.create(getters.guidetype)
    //             .then(async (response)=>{
    //                 if(response.status === 200 || response.status === 201){
    //                     router.push('/plans')
    //                     await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tabela salvo com sucesso!')
    //                 }
    //             })
    //     }
    }
}