import { AxiosInstance, AxiosResponse } from 'axios'
import { StockType } from '../../domain/stock/stock-type/stock-type-model'
import { axios } from '../../../core/services/request'

export default class StockTypeService{
    public static async getAll() : Promise<Array<any>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/api/stock_types/')
        return data
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/stock_types/${id}`)
    }

    public static async getAllByName(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/stock_types/find/${search}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/api/stock_types/${id}`)
    }

    public static async create(stockType: StockType) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/stock_types`, stockType)
    }

    public static async update(stockType : StockType) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/api/stock_types`, stockType)
    }
}