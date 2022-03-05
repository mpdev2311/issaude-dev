import AclModuleRoutesService from "../../../services/management-and-permission/acl-module-routes/acl-module-routes-service"
import { AclModuleRoute } from "../../../domain/management-and-permission/acl-module-routes/acl-module-routes-model";

export default {
    state: () => ({
        aclModuleRoutes: [],
        aclModuleRoute: {
           
        }
    }),

    getters: {
        aclModuleRoutes : (state) => state.aclModuleRoutes,
        aclModuleRoute : (state) => state.aclModuleRoute
    }, 

    mutations: {
        ACL_MODULE_ROUTE_STORE_LOAD : (state, payload) => state.aclModuleRoutes = payload,
        ACL_MODULE_ROUTE_STORE_LOAD_BY_ID : (state, payload) => state.aclModuleRoute = payload,
    },

    actions :{
        
        ACL_MODULE_ROUTE_STORE_LOAD : async ({ commit }) => {
            await commit('ACL_MODULE_ROUTE_STORE_LOAD', await AclModuleRoutesService.getAll())
        },

        ACL_MODULE_ROUTE_STORE_SET_BLANK : async ({ commit }, aclModuleRoute : AclModuleRoute) =>{
            await commit('ACL_MODULE_ROUTE_STORE_LOAD_BY_ID', aclModuleRoute)
        },

        ACL_MODULE_ROUTE_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await AclModuleRoutesService.getById(id);
            await commit('ACL_MODULE_ROUTE_STORE_LOAD_BY_ID', data)
        },

        ACL_MODULE_ROUTE_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await AclModuleRoutesService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('ACL_MODULE_ROUTE_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao excluido com sucesso!')
                    }
                })

        },

        ACL_MODULE_ROUTE_STORE_SAVE : async ({ getters, dispatch }) => {
            if(getters.aclModuleRoute.id > 0)
                await AclModuleRoutesService.update(getters.aclModuleRoute)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('ACL_MODULE_ROUTE_STORE_LOAD_BY_ID', getters.aclModuleRoute.id)
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao alterado com sucesso!')
                        }
                    })
            else
                await AclModuleRoutesService.create(getters.aclModuleRoute)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                      await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao salvo com sucesso!')
                    }
                })
        }
    }
}