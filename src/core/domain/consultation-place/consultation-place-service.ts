import { ConsultationPlace } from './consultation-place-model'
import { AxiosResponse } from 'axios'
import { axios } from '@core/request'
import { AxiosInstance } from 'axios'

export default class ConsultationPlaceService {
  public static async getAll(): Promise<Array<ConsultationPlace>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/consultation_places/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/consultation_places/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/consultation_places/${id}`)
  }

  public static async create(consultationPlace: ConsultationPlace): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/consultation_places`, consultationPlace)
  }

  public static async update(consultationPlace: ConsultationPlace): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/consultation_places`, consultationPlace)
  }
}
