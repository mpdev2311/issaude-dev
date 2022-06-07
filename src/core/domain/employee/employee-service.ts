import { AxiosResponse } from 'axios'
import { axios } from '@core/request'
import { AxiosInstance } from 'axios'
import { Employee } from './employee-model'

export default class EmployeesService {
  public static async getAll(): Promise<Array<Employee>> {
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

  public static async create(employee: Employee): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/providers`, employee)
  }

  public static async update(employee: Employee): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/providers`, employee)
  }
}
