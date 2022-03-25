import { Provider } from '../../domain/providers/provider-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../../../core/services/request'

export default class ProviderService{

    public static async getAll() : Promise<Array<Provider>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/providers/');
        return data
        
    }
    // public static async getAll() : Promise<Array<Provider>>{
    //     const { get } = axios as AxiosInstance;
    //     const { data } = await get('/providers/');
    //     return data
        
    // }

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