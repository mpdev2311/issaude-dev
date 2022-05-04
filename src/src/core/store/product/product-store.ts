import ProductService from "../../services/product/product-service"
import { Products } from "../../domain/product/product-model";
import router from "../../../router";

export default {
    state: () => ({
        Products: [],
        
    
    }),

    getters: {
        Products : (state) => state. Products,
      //  provider : (state) => state.provider
    }, 

    mutations: {
        PRODUCTS_STORE_LOAD : (state, payload) => state.Products = payload,
      //  PROVIDERS_STORE_LOAD_BY_ID : (state, payload) => state.provider = payload
    },

    actions :{        
        
        
        PRODUCTS_STORE_LOAD : async ({ commit }) => {
            await commit('PRODUCTS_STORE_LOAD', await ProductService.getAll())
        },

    //     PROVIDERS_STORE_SET_BLANK : async ({ commit }, providers : Provider) =>{
            
    //         await commit('PROVIDERS_STORE_LOAD_BY_ID', providers)
    //     },

    //     PROVIDERS_PROFESSIONA_STORE_LOAD_GET : async ({ commit }, providers : Provider) => {  
    //         console.log(providers)
    //         await commit('PROVIDERS_STORE_LOAD', providers)
    //     },

    //     PROVIDERS_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
    //         const { data } = await ProvidersService.getById(id);
    //         //console.log(data)
    //         await commit('PROVIDERS_STORE_LOAD_BY_ID', data)
    //     },

    //     PROVIDERS_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
    //         await ProvidersService.deleteById(id)
    //             .then(async (response)=>{
    //                 if(response.status === 200 || response.status === 201){
    //                     await dispatch('PROVIDERS_STORE_LOAD')
    //                     router.push('/providers')
    //                     await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Fornecedores removido sucesso!')
    //                 }
    //             })

    //     },

    //     PROVIDERS_STORE_SAVE : async ({ getters, dispatch }) => {
            
    //         console.log(getters.providers)

    //         if(getters.providers.id > 0)
    //             await ProvidersService.update(getters.providers)
    //                 .then(async (response)=>{
    //                     if(response.status === 200 || response.status === 201){
    //                         await dispatch('PROVIDERS_STORE_LOAD_BY_ID', getters.providers.id)
    //                         router.push('/providers')
    //                         await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de fornecedores salvo com sucesso!')
    //                     }
    //                 })
    //         else
    //             await ProvidersService.create(getters.providers)
    //             .then(async (response)=>{
    //                 if(response.status === 200 || response.status === 201){
    //                     router.push('/providers')
    //                     await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de fornecedores salvo com sucesso!')
    //                 }
    //             })
    //     }
     }
}