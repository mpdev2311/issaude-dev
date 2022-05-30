import { Approach } from '../../domain/approach/Approach-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../request'

export default class ApproachService {
  public static async getAll(): Promise<Array<Approach>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/basics/approachs/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/basics/approachs/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/basics/approachs/${id}`)
  }

  public static async create(approach: Approach): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/basics/approachs/`, approach)
  }

  public static async update(approach: Approach): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/basics/approachs/`, approach)
  }
}
