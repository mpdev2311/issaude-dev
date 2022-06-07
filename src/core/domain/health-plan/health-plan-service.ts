import { HealthPlan } from './health-plan-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class HealthPlanService {
  public static async getAll(): Promise<Array<HealthPlan>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/health_plans/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/health_plans/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/health_plans/${id}`)
  }

  public static async create(healthPlan: HealthPlan): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    //delete healthPlan.selected
    return await post(`/api/health_plans`, healthPlan)
  }

  public static async update(healthPlan: HealthPlan): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    //delete healthPlan.selected
    return await put(`/api/health_plans`, healthPlan)
  }
}
