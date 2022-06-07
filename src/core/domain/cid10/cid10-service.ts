import { Cid10 } from './cid10-model'
import { AxiosResponse } from 'axios'
import { axios } from '@core/request'
import { AxiosInstance } from 'axios'

export default class Cid10Service {
  public static async getAll(): Promise<Array<Cid10>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/cid10/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/cid10/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/cid10/${id}`)
  }

  public static async create(cid10: Cid10): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/dosages`, cid10)
  }

  public static async update(cid10: Cid10): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/cid10`, cid10)
  }
}
