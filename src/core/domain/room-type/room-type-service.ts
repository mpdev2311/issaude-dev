import { RoomType } from './room-type-model'
import { AxiosInstance } from 'axios'
import { axios } from '@core/request'

export default class RoomTypeService {
  public static async getAll(): Promise<RoomType[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/schedulings/type-room-service')
    return data
  }
}
