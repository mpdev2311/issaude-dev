import { Company } from '../../domain/company/company-model'
import { AxiosResponse } from 'axios'
import { axios } from '../../../core/services/request'
import { AxiosInstance } from 'axios';

export default class CompanyService{
    
    public static async getAll () : Promise<Array<Company>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/api/companies/')
        return data
    }

    public static async getById (id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/companies/${id}`)
    }

    public static async getAllByName (search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/companies/find/${search}`)
    }

    public static async getAllById (search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/companies/${search}`)
    }

    public static async deleteById (id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/api/companies/${id}`)
    }

    public static async create (company : Company) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/companies`, company)
    }
    
    public static async update (company : Company) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/api/companies`, company)
    }
}