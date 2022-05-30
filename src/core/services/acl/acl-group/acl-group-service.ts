import { axios } from '../../request'
import { AxiosInstance, AxiosResponse } from 'axios'
import AclGroup from '@core/domain/acl/acl-Group/acl-Group-model'

export default class AclGroupService {
  public static async getAll(): Promise<Array<AclGroup>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/acl/acl-groups/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/acl/acl-groups/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/acl/acl-groups/${id}`)
  }

  public static async create(aclGroup: AclGroup): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/acl/acl-groups/`, aclGroup)
  }

  public static async update(aclGroup: AclGroup): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/acl/acl-groups/`, aclGroup)
  }
}
