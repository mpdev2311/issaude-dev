import { AxiosInstance, AxiosResponse } from 'axios'
import { AccountInfo } from '../../domain/accountinfo/account-info.model'
import { axios } from '@core/services/request'

export default class AccountInfoService {
  public static async getAll(): Promise<Array<AccountInfo>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/account_infos')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/account_infos/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/account_infos/${id}`)
  }

  public static async create(accountinfo: AccountInfo): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/account_infos`, accountinfo)
  }

  public static async update(accountinfo: AccountInfo): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/account_infos`, accountinfo)
  }
}
