import GuideManagementService from "@services/guide-management/guide-management-service";
import {GuideManagement} from "@core/domain/guide-management/guide-management-model";
import router from "../../../router";
import {Company} from "@core/domain/company/company-model";
import {PlaceServices} from "@core/domain/local-attendance/local-attendance-model";


export default {
    state: () => ({
        localAttendaces: [],
        localAttendace: {
            id: 0,
            local: "",
            user: 0,
            id_corp: 0,
            data_gravacao: "",
            telefone: "",
            companies: "",
            endereco: "",
            uf: "",
            cep: "",
            numero: "",
            cidade: "",
            bairro: "",
            ativo: true,
        },

    }),

    getters: {
        localAttendaces: (state) => state.localAttendaces,
        localAttendace: (state) => state.localAttendace
    },

    mutations: {
        LOCAL_ATTENDANCE_STORE_LOAD : (state, payload) => state.placeServices = payload,
        LOCAL_ATTENDANCE_STORE_LOAD_BY_ID : (state, payload) => state.placeService = payload
    },

    actions :{


        GUIDE_MANAGEMENT_STORE_LOAD : async ({ commit }) => {
            await commit('GUIDE_MANAGEMENT_STORE_LOAD', await GuideManagementService.getAll())
        },


        GUIDE_MANAGEMENT_STORE_SET_BLANK : async ({ commit }, guideManagement : GuideManagement) =>{
            await commit('GUIDE_MANAGEMENT_STORE_LOAD_BY_ID', guideManagement)
        },

        GUIDE_MANAGEMENT_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await GuideManagementService.getById(id);
            console.log(data)
            await commit('GUIDE_MANAGEMENT_STORE_LOAD_BY_ID', data)
        },


        GUIDE_MANAGEMENT_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await GuideManagementService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('GUIDE_MANAGEMENT_STORE_LOAD')
                        router.push('/guide-managements')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Guia removido sucesso!')
                    }
                })
        },

        GUIDE_MANAGEMENT_STORE_SAVE : async ({ getters, dispatch }) => {
            if(getters.guideManagement.id > 0)
                await GuideManagementService.update(getters.guideManagement)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('GUIDE_MANAGEMENT_STORE_LOAD_BY_ID', getters.guideManagement.id)
                            router.push('/guide-managements')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro atualizado com sucesso!')
                        }
                    })
            else
                await GuideManagementService.create(getters.guideManagement)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201) {
                            router.push('/guide-managements')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro salvo com sucesso!')
                        }
                    })
        },


    }
}