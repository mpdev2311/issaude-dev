import { PrinterConfigurationService } from "../../services/printer-configuration/printer-configuration-service"
import router from "../../../router";
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers';

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
            
            

            await PrinterConfigurationService.save(printerConfiguration)
                .then(async (response)=>{
                    if (IsSuccessfulStatusCode(response.status)) {
                        router.push('/dashboard')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Configurações salvas sucesso!')
                    }
                })
        }
    }
}