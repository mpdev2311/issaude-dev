import { ScheduleName } from '../../domain/scheduling/schedule_rooms/schedule-name-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../../../core/services/request'

export default class ScheduleNameService{
    public static async getAll() : Promise<Array<ScheduleName>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/api/schedule-names/');
        return data
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/schedule-names/${id}`)
    }

    public static async getAllByName(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/schedule-names/find/${search}`)
    }

    public static async getAllById(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/schedule-names/${search}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/api/schedule-names/${id}`)
    }

    public static async create(scheduleName : ScheduleName) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/schedule-names`, scheduleName)
    }
    
    public static async update(scheduleName : ScheduleName) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/api/schedule-names`, scheduleName)
    }
}