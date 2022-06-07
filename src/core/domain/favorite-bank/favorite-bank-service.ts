import { AxiosResponse } from 'axios'
import { axios } from '@core/request'
import { AxiosInstance } from 'axios'
import { FavoriteBank } from './favorite-bank-model'

export default class FavoriteBanksService {
  public static async getAll(): Promise<Array<FavoriteBank>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/providers/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/providers/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/providers/${id}`)
  }

  public static async create(favoriteBank: FavoriteBank): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/providers`, favoriteBank)
  }

  public static async update(favoriteBank: FavoriteBank): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/providers`, favoriteBank)
  }
}
