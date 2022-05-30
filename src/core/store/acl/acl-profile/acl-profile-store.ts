import AclProfileService from "../../../services/acl/acl-profile/acl-profile-service"
import AclProfile from "../../../domain/acl/acl-profile/acl-profile-model";
import router from "../../../../router";
import { storeKey } from "vuex";
import { IsSuccessfulStatusCode } from '../../../helpers/HttpResponseHelpers';

export default {
    state: () => ({
        aclProfiles: [],
        aclProfile: {
            id_perfil: 0,
            nome: "",
            descricao: "",
            id_usuario: 0,
            id_corp: 0,
            ativo: true,
            id_grupo: 0,
            permissions: []
        },
        auxiliaryPermissions: []


    }),

    getters: {
        aclProfile: (state) => state.aclProfile,
        aclProfiles: (state) => state.aclProfiles,
        auxiliaryPermissions: (state) => state.auxiliaryPermissions
    },

    mutations: {
        ACL_PROFILE_STORE_LOAD: (state, payload) => state.aclProfiles = payload,
        ACL_PROFILE_STORE_LOAD_BY_ID: (state, payload) => state.aclProfile = payload,

    },

    actions: {

        ACL_PROFILE_APPLY_ROUTE: async ({ commit, getters, state, dispatch }, route: any) => {


            if (getters.aclProfile.permissions.find(c => c.rota.nome === route.rota.nome)) {
                await dispatch('MESSAGE_STORE_ERROR_PUSH', `Já existe uma permissão para a rota ${route.rota.nome}!`)
                return;
            }

            state.aclProfile.permissions.push({
                ...route,
                id_rota: route.rota.id_rota,
            })

            await commit('ACL_PROFILE_STORE_LOAD_BY_ID', state.aclProfile)
        },

        ACL_PROFILE_REMOVE_ROUTE: async ({ commit, state }, permission: any) => {
            const listFiltered = state.aclProfile.permissions.filter(c => c !== permission)
            state.aclProfile.permissions = [...listFiltered]
            

        },

        ACL_PROFILE_STORE_LOAD: async ({ commit }) => {
            await commit('ACL_PROFILE_STORE_LOAD', await AclProfileService.getAllActive())
        },

        ACL_PROFILE_STORE_SET_BLANK: async ({ commit }, aclProfile: AclProfile) => {
            await commit('ACL_PROFILE_STORE_LOAD_BY_ID', aclProfile)
        },

        ACL_PROFILE_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
            const { data } = await AclProfileService.getById(id);
            await commit('ACL_PROFILE_STORE_LOAD_BY_ID', data)
        },

        ACL_PROFILE_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
            await AclProfileService.deleteById(id)
                .then(async (response) => {
                    if (IsSuccessfulStatusCode(response.status)) {
                        await dispatch('ACL_PROFILE_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao excluido com sucesso!')
                    }
                })

        },

        ACL_PROFILE_STORE_SAVE: async ({ getters, dispatch, state }) => {
            

            const user = JSON.parse(localStorage.getItem('user')) || {}
            const corp = JSON.parse(localStorage.getItem('corp')) || {}
            
            state.id_usuario = user.id;
            state.id_corp = corp.id;

            if (getters.aclProfile.id_perfil > 0)
                await AclProfileService.update(getters.aclProfile)
                    .then(async (response) => {
                        if (IsSuccessfulStatusCode(response.status)) {
                            await dispatch('ACL_PROFILE_STORE_LOAD_BY_ID', getters.aclProfile.id_perfil)
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao alterado com sucesso!')
                            router.push('/acl_profiles')
                        }
                    })
            else
                await AclProfileService.create(getters.aclProfile)
                    .then(async (response) => {
                        if (IsSuccessfulStatusCode(response.status)) {
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Permissao salvo com sucesso!')
                            router.push('/acl_profiles')
                        }
                    })
        }
    }
}