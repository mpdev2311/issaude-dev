import { Products } from '../../domain/product/product-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../request'

export default class Productservice{
    public static async getAll() : Promise<Array<Products>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/revenues/table-amb?page=0&size=20&id_corp=1&descricao=consulta&codigo=10101012&id_plano=3');
        return data
    }

    // public static async getById(id:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/basics/Products/${id}`)
    // }

    // public static async getAllByName(search:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/basics/Products/find/${search}`)
    // }

    // public static async getAllById(search:any) : Promise<AxiosResponse>{
    //     const { get } = axios as AxiosInstance;
    //     return await get(`/basics/Products/${search}`)
    // }

    // public static async deleteById(id:any) : Promise<AxiosResponse>{
    //     return await (axios as AxiosInstance).delete(`/basics/Products/${id}`)
    // }

    // public static async create(Products : Products) : Promise<AxiosResponse>{
    //     const { post } = axios as AxiosInstance;
    //     return await post(`/basics/Products/`, Products)
    // }
    
    // public static async update(Products : Products) : Promise<AxiosResponse>{
    //     const { put } = axios as AxiosInstance;
    //     return await put(`/basics/Products/`, Products)
    // }
}