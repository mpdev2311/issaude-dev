import router from "../../../router";
import SectorsService from "../../services/sectors/sectors-service";
import { Sector } from "../../domain/sectors/sectors-model";

export default {
    state: () => ({
        sectors: [],
        sector: {
            id:0,
            ativo:true,
            nome:'',
            id_nivelPrevilegio: 0
              
        },
    
    }),

    getters: {
        sectors : (state) => state.sectors,
        sector : (state) => state.sector
    }, 

    mutations: {
        SECTORS_STORE_LOAD : (state, payload) => state.sectors = payload,
        SECTORS_STORE_LOAD_BY_ID : (state, payload) => state.sector = payload
    },

    actions :{        
        
        
        SECTORS_STORE_LOAD : async ({ commit }) => {
            await commit('SECTORS_STORE_LOAD', await SectorsService.getAll())
        },

        SECTORS_STORE_SET_BLANK : async ({ commit }, sector : Sector) =>{
            
            await commit('SECTORS_STORE_LOAD_BY_ID', sector)
        },

        SECTORS_STORE_LOAD_GET : async ({ commit }, sector : Sector) => {  
            console.log(sector)
            await commit('SECTORS_STORE_LOAD', sector)
        },

        SECTORS_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await SectorsService.getById(id);
            //console.log(data)
            await commit('SECTORS_STORE_LOAD_BY_ID', data)
        },

        SECTORS_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await SectorsService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('SECTORS_STORE_LOAD')
                        router.push('/sectorS')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Fabricantes removido sucesso!')
                    }
                })

        },

        SECTORS_STORE_SAVE : async ({ getters, dispatch }) => {
            
            console.log(getters.sector)

            if(getters.sector.id > 0)
                await SectorsService.update(getters.sector)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('SECTORS_STORE_LOAD_BY_ID', getters.sector.id)
                            router.push('/sectors')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de fabricantes salvo com sucesso!')
                        }
                    })
            else
                await SectorsService.create(getters.sector)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        router.push('/sectors')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de fabricantes salvo com sucesso!')
                    }
                })
        }
    }
}