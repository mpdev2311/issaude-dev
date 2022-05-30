import { Priority } from '../../domain/priorities/priority-model'
import { axios } from '@core/services/request'

export default class PriorityService {
  public static async getAll(): Promise<Array<Priority>> {
    const { get } = axios
    const { data } = await get('/api/ticket_priorities')
    return data
  }
}
