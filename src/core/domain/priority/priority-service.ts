import { Priority } from './priority-model'
import { axios } from '@core/request'

export default class PriorityService {
  public static async getAll(): Promise<Array<Priority>> {
    const { get } = axios
    const { data } = await get('/api/ticket_priorities')
    return data
  }
}
