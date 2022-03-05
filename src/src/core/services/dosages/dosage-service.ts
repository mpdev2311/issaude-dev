import { Dosage } from '../../domain/dosage/dosage-model'
import { AxiosResponse } from 'axios'
import { axios } from '../../../core/services/request'
import { AxiosInstance } from 'axios';


export default class DosageService{
    public static async getAll() : Promise<Array<Dosage>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/api/dosages/');
        return data
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/dosages/${id}`)
    }

    public static async getAllByName(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/dosages/find/${search}`)
    }

    public static async getAllById(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/dosages/${search}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/api/dosages/${id}`)
    }

    public static async create(dosage : Dosage) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/dosages`, dosage)
    }
    
    public static async update(dosage : Dosage) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/dosages`, dosage)
    }
}