import AclModuleRouteService from "../../../services/acl/acl-modules/acl-module-service"
import {AclModule as AclModuleRoute} from "../../../domain/acl/acl-modules/acl-module";
import router from "../../../../router";
import { IsSuccessfulStatusCode } from '../../../helpers/HttpResponseHelpers';

export default {
    state: () => ({
        
        aclModuleRoutes: [],
        aclModuleRoute: {
            id_modulo : 0,
            nome : "",
            rotas : [{
                id_rota:0,
                id_acl_modulo: 0,
                nome: '',
                alias: '',
                rota: '',
            }]
        }
        
    }),

    getters: {
        aclModuleRoute : (state) => state.aclModuleRoute,
        aclModuleRoutes : (state) => state.aclModuleRoutes
    }, 

    mutations: {
        ACL_MODULE_ROUTE_STORE_LOAD : (state, payload) => state.aclModuleRoutes = payload,
        ACL_MODULE_ROUTE_STORE_LOAD_BY_ID : (state, payload) => state.aclModuleRoute = payload,
    },

    actions :{
        
        ACL_MODULE_ROUTE_STORE_LOAD : async ({ commit }) => {
            await commit('ACL_MODULE_ROUTE_STORE_LOAD', await AclModuleRouteService.getAll())
        },

        ACL_MODULE_ROUTE_STORE_SELECTED : async ({ commit }) => {
            await commit('ACL_MODULE_ROUTE_STORE_LOAD_BY_ID', await AclModuleRouteService.getAll())
        },

        ACL_MODULE_ROUTE_STORE_SET_BLANK : async ({ commit }, aclModuleRoutes : AclModuleRoute) =>{
            await commit('ACL_MODULE_ROUTE_STORE_LOAD_BY_ID', aclModuleRoutes)
        },

        ACL_MODULE_ROUTE_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await AclModuleRouteService.getById(id);
            await commit('ACL_MODULE_ROUTE_STORE_LOAD_BY_ID', data)
        },

        ACL_MODULE_ROUTE_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await AclModuleRouteService.deleteById(id)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        await dispatch('ACL_MODULE_ROUTE_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao excluido com sucesso!')
                    }
                })

        },

        ACL_MODULE_ROUTE_STORE_SAVE : async ({ getters, dispatch }) => {
            if(getters.aclModuleRoutes.id > 0)
                await AclModuleRouteService.update(getters.aclModuleRoutes)
                    .then(async (response)=>{
                        if (IsSuccessfulStatusCode(response.status)) {
                            await dispatch('ACL_MODULE_ROUTE_STORE_LOAD_BY_ID', getters.aclModuleRoutes.id)
                            
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao alterado com sucesso!')
                        }
                    })
            else
                await AclModuleRouteService.create(getters.aclModuleRoutes)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                      await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao salvo com sucesso!')
                    }
                })
        }
    }
}