import { AxiosResponse } from 'axios'
import { axios } from '../request'
import { AxiosInstance } from 'axios'
import { Sector } from '../../domain/sectors/sectors-model'

export default class SectorsService {
  public static async getAll(): Promise<Array<Sector>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/providers/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/providers/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/providers/${id}`)
  }

  public static async create(sector: Sector): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/providers`, sector)
  }

  public static async update(sector: Sector): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/providers`, sector)
  }
}
