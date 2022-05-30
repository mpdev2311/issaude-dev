import AclGroupService from "../../../services/acl/acl-group/acl-group-service"
import AclGroup from "../../../domain/acl/acl-group/acl-group-model";
import router from "../../../../router";
import { IsSuccessfulStatusCode } from '../../../helpers/HttpResponseHelpers';

export default {
    state: () => ({
        aclGroups: [],
        aclGroup: {
            id : 0,
            nome :""
        }
        
    }),

    getters: {
        aclGroup : (state) => state.aclGroup,
        aclGroups : (state) => state.aclGroups
    }, 

    mutations: {
        ACL_GROUP_STORE_LOAD : (state, payload) => state.aclGroups = payload,
        ACL_GROUP_STORE_LOAD_BY_ID : (state, payload) => state.aclGroup = payload,
    },

    actions :{
        
        ACL_GROUP_STORE_LOAD : async ({ commit }) => {
            await commit('ACL_GROUP_STORE_LOAD', await AclGroupService.getAll())
        },

        ACL_GROUP_STORE_SET_BLANK : async ({ commit }, aclGroups : AclGroup) =>{
            await commit('ACL_GROUP_STORE_LOAD_BY_ID', aclGroups)
        },

        ACL_GROUP_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await AclGroupService.getById(id);
            await commit('ACL_GROUP_STORE_LOAD_BY_ID', data)
        },

        ACL_GROUP_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await AclGroupService.deleteById(id)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        await dispatch('ACL_GROUP_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao excluido com sucesso!')
                    }
                })

        },

        ACL_GROUP_STORE_SAVE : async ({ getters, dispatch }) => {
            if(getters.aclGroups.id > 0)
                await AclGroupService.update(getters.aclGroups)
                    .then(async (response)=>{
                        if (IsSuccessfulStatusCode(response.status)) {
                            await dispatch('ACL_GROUP_STORE_LOAD_BY_ID', getters.aclGroups.id)
                            
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao alterado com sucesso!')
                        }
                    })
            else
                await AclGroupService.create(getters.aclGroups)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                      await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao salvo com sucesso!')
                    }
                })
        }
    }
}