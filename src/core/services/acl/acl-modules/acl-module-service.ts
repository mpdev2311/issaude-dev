import { AxiosInstance, AxiosResponse } from 'axios'
import { AclModule } from '@core/domain/acl/acl-modules/acl-module'
import { axios } from '../../request'

export default class AclModuleService {
  public static async getAll(): Promise<Array<AclModule>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/acl/acl-modules/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/acl/acl-modules/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/acl/acl-modules/${id}`)
  }

  public static async create(aclModule: AclModule): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/acl-modules`, aclModule)
  }

  public static async update(aclModule: AclModule): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/acl-modules`, aclModule)
  }
}
