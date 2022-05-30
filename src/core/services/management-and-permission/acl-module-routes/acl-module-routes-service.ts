import { AclModuleRoute } from '../../../domain/management-and-permission/acl-module-routes/acl-module-routes-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../../request'

export default class AclModuleRoutesService {
  public static async getAll(): Promise<Array<AclModuleRoute>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/acl/acl_modules/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/acl/acl_modules/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/acl/acl_modules/${id}`)
  }

  public static async create(aclModuleRoute: AclModuleRoute): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/acl/acl_modules/`, aclModuleRoute)
  }

  public static async update(aclModuleRoute: AclModuleRoute): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/acl/acl_modules/`, aclModuleRoute)
  }
}
