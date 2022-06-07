import { ServiceType } from './service-type-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'
export default class ServiceTypeService {
  public static async getAll(): Promise<Array<ServiceType>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/service_types/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/service_types/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/service_types/${id}`)
  }

  public static async create(serviceType: ServiceType): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/service_types`, serviceType)
  }

  public static async update(serviceType: ServiceType): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/service_types`, serviceType)
  }
}
