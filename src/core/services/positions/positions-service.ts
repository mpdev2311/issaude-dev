import { AxiosResponse } from 'axios'
import { axios } from '../request'
import { AxiosInstance } from 'axios'
import { Position } from '../../domain/positions/positions-model'

export default class PositionsService {
  public static async getAll(): Promise<Array<Position>> {
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

  public static async create(position: Position): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/providers`, position)
  }

  public static async update(position: Position): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/providers`, position)
  }
}
