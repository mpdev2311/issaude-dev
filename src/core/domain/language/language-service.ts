import { Language } from './language-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class LanguageService {
  public static async getAll(): Promise<Array<Language>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/basics/languages/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/basics/languages/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/basics/languages/${id}`)
  }

  public static async create(language: Language): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/basics/languages`, language)
  }

  public static async update(language: Language): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/basics/languages`, language)
  }
}
