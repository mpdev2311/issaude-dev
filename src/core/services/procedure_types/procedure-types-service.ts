import { ProcedureType } from '../../domain/procedure_types/procedure-types-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/services/request'

export default class ProcedureTypeService {
  public static async getAll(): Promise<Array<ProcedureType>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/procedure_types/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/procedure_types/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/procedure_types/${id}`)
  }

  public static async create(procedureType: ProcedureType): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/procedure_types`, procedureType)
  }

  public static async update(procedureType: ProcedureType): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/procedure_types`, procedureType)
  }
}
