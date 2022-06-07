import { StockName } from '@domain/stock/stock-name/stock-name-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class StockService {
  public static async getAll(): Promise<Array<StockName>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/stock_names/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/stock_names/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/stock_names/${id}`)
  }

  public static async create(stockname: StockName): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/stock_names`, stockname)
  }

  public static async update(stockname: StockName): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/stock_names`, stockname)
  }
}
