import { HealthProfessional } from '../../domain/heath-professional/health-professional-model'
import { AxiosResponse } from 'axios'
import { axios } from '../request'
import { AxiosInstance } from 'axios';

export default class HealthProfessionalService{
    
    public static async getAll() : Promise<Array<HealthProfessional>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/providers/')
        return data;
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

    public static async create(healthProfessional : HealthProfessional) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/providers`, healthProfessional)
    }
    
    public static async update(healthProfessional : HealthProfessional) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/providers`, healthProfessional)
    }
}