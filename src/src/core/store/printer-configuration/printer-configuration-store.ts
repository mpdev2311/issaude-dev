import { PrinterConfigurationService } from "../../services/printer-configuration/printer-configuration-service"

import router from "../../../router";

export default {
    state : () =>({
        printerConfiguration : {}
    }),

    getters: {
        printerConfiguration : (state) => state.printerConfiguration,
    }, 
    
    mutations: {
        PRINTER_SAVE : (state, payload) => state.vias = payload,
    },

    actions : {
        PRINTER_SAVE : async ({ dispatch }, printerConfiguration) => {
            
            console.log(printerConfiguration)

            await PrinterConfigurationService.save(printerConfiguration)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        router.push('/dashboard')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Configurações salvas sucesso!')
                    }
                })
        }
    }
}