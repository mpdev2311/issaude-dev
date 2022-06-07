import { axios } from '@core/request'
import { AxiosInstance } from 'axios'
import { NewScheduling, SchedulingStatus } from './scheduling-status-model'

export default class SchedulingStatusService {
  public static async getAll(): Promise<Array<SchedulingStatus>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/schedulings/scheduling-status')
    return data
  }

  public static async save(parameters: NewScheduling): Promise<void> {
    const { post } = axios as AxiosInstance
    const { data } = await post('/schedulings/', parameters)
    return data
  }

  public static async update(parameters: NewScheduling): Promise<void> {
    const { put } = axios as AxiosInstance
    const { data } = await put('/schedulings/', parameters)
    return data
  }

  public static async delete(id: number): Promise<void> {
    return await (axios as AxiosInstance).delete(`/schedulings/${id}`)
  }
}
