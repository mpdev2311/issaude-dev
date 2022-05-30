import { RequestProduct } from './../../domain/product/product-model';
import { Product } from '../../domain/product/product-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../request'
import { BasePaginator } from '../../domain/pagination/Paginator'

export default class Productservice{
    public static async getAll() : Promise<Array<Product>>{
        //const corp = JSON.parse(localStorage.getItem('corp'))
        const { get } = axios as AxiosInstance;
        const { data } = await get('/revenues/table-amb/dadosProduto?id_corp=1&codigo=10101012&id_plano=122');
        return data
    }

    public static async searchProduct(parameter: RequestProduct): Promise<BasePaginator<Product>> {
      const { get } = axios as AxiosInstance
      const { data } = await get(`/revenues/table-amb`, {
        params: parameter,
      })
  
      return data
    }

}
