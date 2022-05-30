import { GuideType } from '../../domain/guides-type/guides-type-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../request'

export default class GuideTypeService {
  public static async getAll(): Promise<Array<GuideType>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/revenues/guides-type')
    return data
  }

  // public static async getById(id:any) : Promise<AxiosResponse>{
  //     const { get } = axios as AxiosInstance;
  //     return await get(`/basics/approachs/${id}`)
  // }

  // public static async deleteById(id:any) : Promise<AxiosResponse>{
  //     return await (axios as AxiosInstance).delete(`/basics/approachs/${id}`)
  // }

  // public static async create(approach : GuideType) : Promise<AxiosResponse>{
  //     const { post } = axios as AxiosInstance;
  //     return await post(`/basics/approachs/`, approach)
  // }

  // public static async update(approach :GuideType) : Promise<AxiosResponse>{
  //     const { put } = axios as AxiosInstance;
  //     return await put(`/basics/approachs/`, approach)
  // }
}
