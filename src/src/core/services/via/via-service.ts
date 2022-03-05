import { Via } from '../../domain/via/via-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../../../core/services/request'

export default class ViaService{
    public static async getAll() : Promise<Array<Via>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/api/via/')
        return data
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/via/${id}`)
    }

    public static async getAllByName(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/via/find/${search}`)
    }

    public static async getAllById(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/via/${search}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/api/via/${id}`)
    }

    public static async create(via : Via) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/via`, via)
    }
    
    public static async update(via : Via) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/api/via`, via)
    }
}