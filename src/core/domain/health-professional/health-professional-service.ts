import { HealthProfessional, RequestHealthProfessional } from './health-professional-model'
import { AxiosResponse } from 'axios'
import { axios } from '@core/request'
import { AxiosInstance } from 'axios'

export default class HealthProfessionalService {
  public static async getAll(
    requestHealthProfessional: RequestHealthProfessional
  ): Promise<Array<HealthProfessional>> {
    let url = '/providers'
    if (requestHealthProfessional) {
      url += `/filters?page=${requestHealthProfessional.page}&size=${requestHealthProfessional.size}&id_corp=${requestHealthProfessional.id_corp}&id_tipo_prestador=${requestHealthProfessional.page}&nao_atende=${requestHealthProfessional.nao_atende}&do_corpo_clinico=${requestHealthProfessional.do_corpo_clinico}&nome=${requestHealthProfessional.nome}`
    }
    const { get } = axios as AxiosInstance
    const { data } = await get(url)
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/providers/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/providers/${id}`)
  }

  public static async create(healthProfessional: HealthProfessional): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/providers`, healthProfessional)
  }

  public static async update(healthProfessional: HealthProfessional): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/providers`, healthProfessional)
  }
}
