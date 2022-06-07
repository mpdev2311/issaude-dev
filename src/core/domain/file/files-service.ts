import { axios } from '@core/request'
import { AxiosInstance } from 'axios'

export default class FilessService {
  public static async getFilesbyChamado(parameter: any): Promise<Array<any>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/api/files/${parameter}`)
    return data
  }
}
