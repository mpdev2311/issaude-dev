import { Presentation } from './presentation-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class PresentationService {
  public static async getAll(): Promise<Array<Presentation>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/presentations/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/presentations/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/presentations/${id}`)
  }

  public static async create(presentation: Presentation): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/presentations`, presentation)
  }

  public static async update(presentation: Presentation): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/presentations`, presentation)
  }
}
