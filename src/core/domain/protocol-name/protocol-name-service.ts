import { ProtocolName } from './protocol-name-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class ProtocolNames {
  public static async getAll(): Promise<Array<ProtocolName>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/protocol_names/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/protocol_names/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/protocol_names/${id}`)
  }

  public static async create(protocolName: ProtocolName): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/protocol_names`, protocolName)
  }

  public static async update(protocolName: ProtocolName): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/protocol_names`, protocolName)
  }
}
