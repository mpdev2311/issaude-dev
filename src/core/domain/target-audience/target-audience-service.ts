import { TargetAudience } from './target-audience-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class TargetAudienceService {
  public static async getAll(): Promise<Array<TargetAudience>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/basics/targetAudience/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/basics/targetAudience/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/basics/targetAudience/${id}`)
  }

  public static async create(targetAudience: TargetAudience): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/basics/targetAudience`, targetAudience)
  }

  public static async update(targetAudience: TargetAudience): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/basics/targetAudience`, targetAudience)
  }
}
