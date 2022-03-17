import { AxiosResponse } from 'axios'
import { axios } from '../request'
import { AxiosInstance } from 'axios';
import { GuideManagement } from 'core/domain/guide-management/guide-management-model';

export default class GuideManagementService{
    
    public static async getAll() : Promise<Array<GuideManagement>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/revenues/guides?page=0&size=20&id_corp=1&start_date=01/02/2022&end_date=28/02/2022&id_tipo_guia=5')
        return data;
    }

    // public static async getById(id:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/api/providers/${id}`)
    // }

    // public static async getAllByName(search:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/api/providers/find/${search}`)
    // }

    // public static async getAllById(search:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/api/providers/${search}`)
    // }

    // public static async deleteById(id:any) : Promise<AxiosResponse>{
    //     return await (axios as AxiosInstance).delete(`/api/providers/${id}`)
    // }

    // public static async create(healthInsurance : HealthInsurance) : Promise<AxiosResponse>{
    //     const { post } = axios as AxiosInstance;
    //     return await post(`/api/providers`, healthInsurance)
    // }
    
    // public static async update(healthInsurance : HealthInsurance) : Promise<AxiosResponse>{
    //     const { put } = axios as AxiosInstance;
    //     return await put(`/api/providers`, healthInsurance)
    // }
}