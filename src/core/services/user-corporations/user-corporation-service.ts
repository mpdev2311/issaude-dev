import { AxiosInstance } from 'axios'
import { axios } from '@core/services/request'
import { UserCorporation } from '../../domain/user-corporations/user-corporation'

export class UserCorprationService {
  public static async getAll(): Promise<UserCorporation[]> {
    const { get } = axios as AxiosInstance
    const user = JSON.parse(localStorage.getItem('user'))
    const { data } = await get(`/corporations/by_user/${user.id}`)
    return data
  }

  public static async setCorporation(corp) {
    await localStorage.setItem('corp', JSON.stringify(corp))
  }

  public static async getCorporation() {
    return localStorage.getItem('corp')
  }
}
