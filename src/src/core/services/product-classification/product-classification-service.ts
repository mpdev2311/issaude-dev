import { ProductClassification } from '../../domain/product-classification/product-classification-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../request'

export default class ProductClassificationService{
    public static async getAll() : Promise<Array<ProductClassification>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/api/product_classifications/');
        return data
    }

    public static async getById(id:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/product_classifications/${id}`)
    }

    public static async getAllByName(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/product_classifications/find/${search}`)
    }

    public static async getAllById(search:any) : Promise<AxiosResponse>{
        const { get } = axios as AxiosInstance;
        return await get(`/api/product_classifications/${search}`)
    }

    public static async deleteById(id:any) : Promise<AxiosResponse>{
        return await (axios as AxiosInstance).delete(`/api/product_classifications/${id}`)
    }

    public static async create(productClassification: ProductClassification) : Promise<AxiosResponse>{
        const { post } = axios as AxiosInstance;
        return await post(`/api/product_classifications`, productClassification)
    }
    
    public static async update(productClassification : ProductClassification) : Promise<AxiosResponse>{
        const { put } = axios as AxiosInstance;
        return await put(`/api/product_classifications`, productClassification)
    }
}
