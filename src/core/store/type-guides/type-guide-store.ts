import TypeGuideService from "../../services/type-guides/type-guides-service"
import { TypeGuide } from "../../domain/type-guides/type-guide-model";
import router from "../../../router";
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers';

export default {
    state: () => ({
        typeGuides: [],
        typeGuide: {
            id:0,
            nome:"",
            servico_tipo:0,
            guia_tipo:"",
            ativo:true
        }
    }),

    getters: {
        typeGuides : (state) => state.typeGuides,
        typeGuide : (state) => state.typeGuide
    }, 

    mutations: {
        TYPE_GUIDES_STORE_LOAD : (state, payload) => state.typeGuides = payload,
        TYPE_GUIDES_STORE_LOAD_BY_ID : (state, payload) => state.typeGuide = payload,
    },

    actions :{
        
        TYPE_GUIDES_STORE_LOAD : async ({ commit }) => {
            await commit('TYPE_GUIDES_STORE_LOAD', await TypeGuideService.getAll())
        },

        TYPE_GUIDES_STORE_SET_BLANK : async ({ commit }, typeGuide : TypeGuide) =>{
            await commit('TYPE_GUIDES_STORE_LOAD_BY_ID', typeGuide)
        },

        TYPE_GUIDES_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await TypeGuideService.getById(id);
            
            await commit('TYPE_GUIDES_STORE_LOAD_BY_ID', data)
        },

        TYPE_GUIDES_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await TypeGuideService.deleteById(id)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        await dispatch('TYPE_GUIDES_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tabela removido com sucesso!')
                    }
                })

        },

        TYPE_GUIDES_STORE_SAVE : async ({ getters, dispatch }) => {
            
            

            if(getters.typeGuide.id > 0)
                await TypeGuideService.update(getters.typeGuide)
                    .then(async (response)=>{
                        if (IsSuccessfulStatusCode(response.status)) {
                            await dispatch('TYPE_GUIDES_STORE_LOAD_BY_ID', getters.typeGuide.id)
                            router.push('/plans')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tabela alterado com sucesso!')
                        }
                    })
            else
                await TypeGuideService.create(getters.typeGuide)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        router.push('/plans')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Tabela salvo com sucesso!')
                    }
                })
        }
    }
}