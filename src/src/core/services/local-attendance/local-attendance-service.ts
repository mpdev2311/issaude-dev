import { AxiosResponse } from 'axios'
import { axios } from '../request'
import { AxiosInstance } from 'axios';
import { PlaceServices } from "@core/domain/local-attendance/local-attendance-model";


export default class PlaceService {

    public static async getAll() : Promise<Array<PlaceServices>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/basics/local-attendance?page=0&size=20&id_corp=1`)
        return data;
    }

    public static async deleteById(id : any , id_user : any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/basics/local-attendance/${id}/${id_user}/1`)
    }

    public static async create(placeService : PlaceService) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/basics/local-attendance`, placeService)
    }

    public static async update(placeService : PlaceService) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/basics/local-attendance`, placeService)
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/basics/local-attendance/${id}`)
    }
}