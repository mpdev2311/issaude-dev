import { Bill, Bills } from './../../domain/guide-sadt/bills-model';
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../request'

export default class BillsService{
    public static async getAll() : Promise<Array<Bills>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/revenues/bills?page=0&size=20&id_corp=1&conta=3&guia=1');
        return data
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/revenues/bills/${id}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/revenues/bills/${id}`)
    }

    public static async create(bill : Bill) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/revenues/bills`, bill)
    }
    
    public static async update(bill :Bill) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/revenues/bills`, bill)
    }
}