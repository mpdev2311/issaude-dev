import { Unit } from './unit-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class UnitService {
  public static async getAll(): Promise<Array<Unit>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/unit_measure/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/unit_measure/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/unit_measure/${id}`)
  }

  public static async create(unit: Unit): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/unit_measure`, unit)
  }

  public static async update(unit: Unit): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/unit_measure`, unit)
  }
}
