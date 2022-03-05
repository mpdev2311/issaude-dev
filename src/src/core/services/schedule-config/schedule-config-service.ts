import { axios } from "../../../core/services/request";
import { AxiosInstance, AxiosResponse } from "axios";
import { ScheduleConfig } from "../../domain/scheduling/schedule-config/schedule-config-model";

export default class ScheduleConfigService{

    public static async getAll() : Promise<Array<ScheduleConfig>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/api/schedule-configs/');
        return data
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/schedule-configs/${id}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/api/schedule-configs/${id}`)
    }

    public static async create(scheduleConfig : ScheduleConfig) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/schedule-configs`, scheduleConfig)
    }
    
    public static async update(scheduleConfig : ScheduleConfig) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/api/schedule-configs`, scheduleConfig)
    }
}