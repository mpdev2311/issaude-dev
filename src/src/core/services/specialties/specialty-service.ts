import { Specialty } from '../../domain/specialty/specialty-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../../../core/services/request'

export default class SpecialtyService{
    public static async getAll() : Promise<Array<Specialty>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/basics/specialties/');
        return data
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/basics/specialties/${id}`)
    }

    public static async getAllByName(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/basics/specialties/find/${search}`)
    }

    public static async getAllById(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/basics/specialties/${search}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/basics/specialties/${id}`)
    }

    public static async create(specialty : Specialty) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/basics/specialties`, specialty)
    }
    
    public static async update(specialty : Specialty) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/basics/specialties`, specialty)
    }
}