import { AxiosResponse } from 'axios'
import { axios } from '../request'
import { AxiosInstance } from 'axios';
import { Manufacturer } from 'core/domain/manufacturers/manufacturers-model';

export default class ManufacturersService{
    
    public static async getAll() : Promise<Array<Manufacturer>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/api/providers/')
        return data;
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/providers/${id}`)
    }

    public static async getAllByName(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/providers/find/${search}`)
    }

    public static async getAllById(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/providers/${search}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/api/providers/${id}`)
    }

    public static async create(manufacture : Manufacturer) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/providers`, manufacture)
    }
    
    public static async update(manufacture : Manufacturer) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/api/providers`, manufacture)
    }
}