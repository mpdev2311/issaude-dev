import { AxiosResponse } from 'axios'
import { axios } from '../request'
import { AxiosInstance } from 'axios';
import { HealthInsurance } from 'core/domain/health-insurances/health-insurances-model';

export default class HealthInsurancesService{
    
    public static async getAll() : Promise<Array<HealthInsurance>>{
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

    public static async create(healthInsurance : HealthInsurance) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/providers`, healthInsurance)
    }
    
    public static async update(healthInsurance : HealthInsurance) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/api/providers`, healthInsurance)
    }
}