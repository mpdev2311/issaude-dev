import { GuideManagement, GuideManagements } from './../../domain/guide-management/guide-management-model';
import { AxiosResponse } from 'axios'
import { axios } from '../request'
import { AxiosInstance } from 'axios';

export default class GuideManagementService{
    
    public static async getAll() : Promise<Array<GuideManagements>>{
        let date = new Date(),
        dia  = date.getDate().toString().padStart(2, '0'),
        mes  = (date.getMonth()+1).toString().padStart(2, '0'),
        ano  = date.getFullYear();
        const dataAtual =  `${dia}/${mes}/${ano}`;

        const { get } = axios as AxiosInstance;
        const { data } = await get(`/revenues/guides?page=0&size=20&id_corp=1&start_date=01/02/2022&end_date=${dataAtual}`)
        return data;
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/revenues/guides/${id}/1`)
    }

     public static async create(guideManagement : GuideManagement) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/revenues/guides`, guideManagement)
    }
    
    public static async update(guideManagement : GuideManagement) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/revenues/guides`, guideManagement)
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/revenues/guides/${id}`)
    }

    // public static async getAllByName(search:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/api/providers/find/${search}`)
    // }

    // public static async getAllById(search:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/api/providers/${search}`)
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