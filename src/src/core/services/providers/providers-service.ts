import { Providers, Provider } from '../../domain/providers/provider-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../../../core/services/request'

export default class ProviderService{

    public static async getAll() : Promise<Array<Providers>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/providers/filters?page=0&size=20&id_corp=1&id_tipo_prestador=1&nao_atende=false');
        return data        
    }

    public static async getProfessionalPerformer() : Promise<Array<Providers>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/providers/filters?page=0&size=20&id_corp=1&id_tipo_prestador=1&do_corpo_clinico=true&nao_atende=false');
        return data        
    }

    public static async getProfessionalRequest() : Promise<Array<Providers>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/providers/filters?page=0&size=20&id_corp=1&id_tipo_prestador=1&nao_atende=false');
        return data       
        //basics/companies/findall?page=0&size=20&id_corp=idcorp 
    }

    public static async getProfessionalAuthorizing() : Promise<Array<Providers>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/providers/filters?page=0&size=20&id_corp=1&id_tipo_prestador=1&do_corpo_clinico=true&nao_atende=false');
        return data        
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/providers/${id}`)
    }

    public static async getAllByName(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/providers/find/${search}`)
    }

    public static async getAllById(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/providers/${search}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/providers/${id}`)
    }

    public static async create(provider : Provider) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/providers`, provider)
    }
    
    public static async update(provider : Provider) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/providers`, provider)
    }
}