import ProductClassificationService from "../../services/product-classification/product-classification-service"
import { ProductClassification } from "../../domain/product-classification/product-classification-model"
import router from "../../../router";
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers';

export default {
    state: () => ({
        productClassifications: [],
        productClassification: {
            
                nome: "",
                taxas: true,
                taxa_depreciacao: 0,
                vida_util: 0,
                id_user: 0,
                id_corp: 0,
                tipo: 0,
                id_servico: 0,
                item_conta: 0,
                data_gravacao: "",
                ativo: true
            
        }
    }),

    getters: {
        productClassifications : (state) => state.productClassifications,
        productClassification : (state) => state.productClassification
    }, 

    mutations: {
        PRODUCT_CLASSIFICATION_STORE_LOAD : (state, payload) => state.productClassifications = payload,
        PRODUCT_CLASSIFICATION_STORE_LOAD_BY_ID : (state, payload) => state.productClassification = payload,
    },

    actions :{
        
        PRODUCT_CLASSIFICATION_STORE_LOAD : async ({ commit }) => {
            await commit('PRODUCT_CLASSIFICATION_STORE_LOAD', await ProductClassificationService.getAll())
        },

        PRODUCT_CLASSIFICATION_STORE_SET_BLANK : async ({ commit }, productClassification : ProductClassification) =>{
            await commit('PRODUCT_CLASSIFICATION_STORE_LOAD_BY_ID', productClassification)
        },

        PRODUCT_CLASSIFICATION_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await ProductClassificationService.getById(id);
            
            await commit('PRODUCT_CLASSIFICATION_STORE_LOAD_BY_ID', data)
        },

        PRODUCT_CLASSIFICATION_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await ProductClassificationService.deleteById(id)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        await dispatch('PRODUCT_CLASSIFICATION_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Product Classification removida sucesso!')
                    }
                })

        },

        PRODUCT_CLASSIFICATION_STORE_SAVE : async ({ getters, dispatch }) => {
            
            

            if(getters.productClassification.id > 0)
                await ProductClassificationService.update(getters.productClassification)
                    .then(async (response)=>{
                        if (IsSuccessfulStatusCode(response.status)) {
                            await dispatch('PRODUCT_CLASSIFICATION_STORE_LOAD_BY_ID', getters.productClassification.id)
                            router.push("/product-classification")
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Product Classification salva com sucesso!')
                        }
                    })
            else
                await ProductClassificationService.create(getters.productClassification)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        router.push('/product-classification')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Product Classification salva com sucesso!')
                    }
                })
        }
    }
}