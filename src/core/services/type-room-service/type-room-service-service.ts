import { TypeRoomService } from '@core/domain/type-room-service/type-room-service-model'
import { AxiosInstance } from 'axios'
import { axios } from '@core/services/request'

export default class RoomTypeServiceService {
  public static async getAll(): Promise<TypeRoomService[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/schedulings/type-room-service')
    return data
  }
}
