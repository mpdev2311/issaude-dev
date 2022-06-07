import { AxiosInstance } from 'axios'
import { axios } from '@core/request'
import { UserCorporation } from './user-corporation'

export class UserCorporationService {
  public static async getAll(): Promise<UserCorporation[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/corporations/user`)
    return data
  }

  public static async authorizationCorporation(id: string | number) {
    const { post } = axios as AxiosInstance
    const { data } = await post(`/authorization/corporations/${id}`)
    return data
  }
}
