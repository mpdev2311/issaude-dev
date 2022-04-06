import AclGroupService from "../../../services/acl/acl-group/acl-group-service"
import AclGroup from "../../../domain/acl/acl-group/acl-group-model";
import router from "../../../../router";
import AclProfileService from "../../../services/acl/acl-profile/acl-profile-service";

export default {
    state: () => ({
       
    }),

    getters: {
        
    }, 

    mutations: {
        
    },

    actions : {
        
        CHECK_PERMISSION : async ({ dispatch }, pathRoute : string) => {
            
            let havePermission = false;

            const modules = await AclProfileService.getAll();
                modules.forEach(module => module.rotas.forEach(route =>{
                    havePermission = route.rota.includes(pathRoute.replace("/", ""))
                     
            }))

            if(!havePermission){
                await dispatch('MESSAGE_STORE_ERROR_PUSH', 'O usuário não tem permissão para acessar rota!');
                router.push('/dashboard')
            }

        },
    }
}