import { SchedulingAccess } from './scheduling-access-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class SchedulingAccessService {
  public static async getAll(): Promise<Array<SchedulingAccess>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/scheduling_mark/scheduling_acess')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/scheduling_mark/scheduling_acess${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/scheduling_mark/scheduling_acess${id}`)
  }

  public static async create(schedulingAccess: SchedulingAccess): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/scheduling_mark/scheduling_acess`, schedulingAccess)
  }

  public static async update(schedulingAccess: SchedulingAccess): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/scheduling_mark/scheduling_acess`, schedulingAccess)
  }
}
