import AclProfileCorporationService from '@domain/acl/acl-profile-corporation/acl-profile-corporation-service'
import AclProfileCorporation from '@domain/acl/acl-profile-corporation/acl-profile-corporation-model'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    aclProfileCorporationSelected: [],
    aclProfileCorporations: [],
    profileSelected: [],
  }),

  getters: {
    aclProfileCorporations: (state) => state.aclProfileCorporations,
    aclProfileCorporationSelected: (state) => state.aclProfileCorporationSelected,
    profileSelected: (state) => state.profileSelected,
  },

  actions: {
    ACL_PROFILE_CORPORATION_STORE_LOAD: async ({ commit, state }) => {
      const data = await AclProfileCorporationService.getAll()
      state.aclProfileCorporations = data
    },

    ACL_PROFILE_CORPORATION_STORE_LOAD_SELECTED: async ({ commit, state }, params: any) => {
      const data = await AclProfileCorporationService.getAllSelected(params)
      state.aclProfileCorporationSelected = data
    },

    ACL_PROFILE_CORPORATION_PROFILES_STORE_SELECTED: async ({ commit, state }, id: string) => {
      state.aclProfileCorporations.forEach((element) => {
        if (element.id_usuario != null) {
          if (element.id_usuario.toString() === id) {
            state.profileSelected.push(element)
          }
        }
      })
    },

    ACL_PROFILE_CORPORATION_STORE_SET_BLANK: async (
      { commit },
      aclProfileCorporations: AclProfileCorporation
    ) => {
      await commit('ACL_PROFILE_CORPORATION_STORE_LOAD_BY_ID', aclProfileCorporations)
    },

    ACL_PROFILE_CORPORATION_STORE_SAVE: async ({ getters, dispatch, state }, data: any) => {
      const { id } = router.currentRoute.value.params
      const user = JSON.parse(localStorage.getItem('user')) || {}
      const corp = JSON.parse(localStorage.getItem('corp')) || {}

      const param = {
        id_usuario: parseInt(id.toString()),
        id_corp: parseInt(corp.id),
      }
      await AclProfileCorporationService.update(data, param).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Rota adicionada com sucesso!')
        }
      })
    },
  },
}
