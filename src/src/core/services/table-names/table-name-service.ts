import { TableName } from '../../domain/table-names/table-name-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../request'

export default class TableNameService{
    public static async getAll() : Promise<Array<TableName>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/api/table_names/');
        return data
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/table_names/${id}`)
    }

    public static async getAllByName(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/table_names/find/${search}`)
    }

    public static async getAllById(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/table_names/${search}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/api/table_names/${id}`)
    }

    public static async create(tableName : TableName) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/table_names`, tableName)
    }
    
    public static async update(tableName : TableName) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/api/table_names`, tableName)
    }
}