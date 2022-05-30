import { axios } from '@core/services/request'
import { AxiosInstance, AxiosResponse } from 'axios';

export default class ManagementService {
  public static async getService(parameter: {page: number, size: number, id_rota: number, id_corp: number | string}) {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/basics/management-services?page=${parameter.page}&size=${parameter.size}&id_rota=${parameter.id_rota}&id_corp=${parameter.id_corp}`)
    return data
  }
}