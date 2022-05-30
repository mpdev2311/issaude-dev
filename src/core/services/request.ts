import Axios, { AxiosStatic } from "axios";
import router from "../../router";
import { InjectionKey } from "vue";
import { store } from "../../core/store/store";

const key : InjectionKey<AxiosStatic> = Symbol()


const axios = Axios.create({
    baseURL: 'https://api.app3.issaude.online',
});

axios.interceptors.request.use(async (config) => {
    
    const token = localStorage.getItem('token')
    const bearer = 'Bearer'        
    const header = { 'Authorization': `${bearer} ${token}` }
    config.headers = (token ? header : {})

    /*
    *
    *
    *
    *
    */

    return await config;

}, (error) => {
    /*
    *
    *
    *
    *
    */
    
        if(error.status === 401)
            router.push('/')
});

axios.interceptors.response.use(async (response) => {

    /*
    *
    *
    *
    *
    */

    
        if(response.status === 401)
            router.push('/')


    /*
    *
    *
    *
    *
    */
   

    return response;

    }, (error) => {

        
        
    /*
    *
    *
    *
    *
    */
        
        if(error.response && error.response.status === 401){
            store.dispatch('MESSAGE_STORE_ERROR_PUSH', 'Usuário não conectado!')
            
            localStorage.removeItem('is_legacy')
            localStorage.removeItem('user')
            localStorage.removeItem('corp')
            localStorage.removeItem('token')

            router.push('/')
        }

        if(error.response && error.response.status === 404){
            store.dispatch('MESSAGE_STORE_ERROR_PUSH', 'O recurso solicitado não existe!')
        }
        if(error.response && error.response.status === 400)
            store.dispatch('MESSAGE_STORE_ERROR_PUSH', error.response.data.message)

    /*
    *
    *
    *
    *
    */
    return error
});

export { axios, key } 