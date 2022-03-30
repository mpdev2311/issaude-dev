import { Bills} from '../../domain/guide-sadt/bills-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../request'

export default class BillsService{
    public static async getAll() : Promise<Array<Bills>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/revenues/bills?page=0&size=20&id_corp=1&conta=3&guia=1');
        console.log(data);
        return data
    }

    // public static async getById(id:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/basics/approachs/${id}`)
    // }

    // public static async getAllByName(search:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/basics/approachs/find/${search}`)
    // }

    // public static async getAllById(search:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/basics/approachs/${search}`)
    // }

    // public static async deleteById(id:any) : Promise<AxiosResponse>{
    //     return await (axios as AxiosInstance).delete(`/basics/approachs/${id}`)
    // }

    // public static async create(approach : GuideType) : Promise<AxiosResponse>{
    //     const { post } = axios as AxiosInstance;
    //     return await post(`/basics/approachs/`, approach)
    // }
    
    // public static async update(approach :GuideType) : Promise<AxiosResponse>{
    //     const { put } = axios as AxiosInstance;
    //     return await put(`/basics/approachs/`, approach)
    // }
}