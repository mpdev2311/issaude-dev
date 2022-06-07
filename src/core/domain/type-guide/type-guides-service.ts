import { TypeGuide } from './type-guide-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class TypeGuideService {
  public static async getAll(): Promise<Array<TypeGuide>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/type_guides/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/type_guides/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/type_guides/${id}`)
  }

  public static async create(typeGuide: TypeGuide): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/type_guides`, typeGuide)
  }

  public static async update(typeGuide: TypeGuide): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/type_guides`, typeGuide)
  }
}
