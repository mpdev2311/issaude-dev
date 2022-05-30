import AclModule from '../../../domain/acl/acl-profile/acl-module-model'
import { axios } from '../../request'
import { AxiosInstance, AxiosResponse } from 'axios'
import AclProfile from '@core/domain/acl/acl-profile/acl-profile-model'

export default class AclProfileService {
  public static async getAll(): Promise<Array<AclModule>> {
    const { get } = axios as AxiosInstance
    const user = JSON.parse(localStorage.getItem('user')) || {}
    const corp = JSON.parse(localStorage.getItem('corp')) || {}
    const { data } = await get(`/acl/acl-modules/permissions/${corp.id}/${user.id}`)
    return data
  }

  public static async getAllActive(): Promise<Array<AclProfile>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/acl/acl-profiles/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/acl/acl-profiles/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/acl/acl-profiles/${id}`)
  }

  public static async create(aclProfile: AclProfile): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance

    delete aclProfile.selected

    const parsePermissions = []

    aclProfile.permissions.forEach((perm) => {
      parsePermissions.push({
        alias: perm.alias,
        download: perm.download,
        editar: perm.editar,
        excluir: perm.excluir,
        exportar: perm.exportar,
        importar: perm.importar,
        nome: perm.nome,
        ver: perm.ver,
        copiar: perm.copiar,
        criar: perm.criar,
        id_rota: perm.id_rota,
      })
    })

    return await post(`/acl/acl-profiles/`, {
      nome: aclProfile.nome,
      descricao: aclProfile.descricao,
      id_corp: aclProfile.id_corp,
      id_usuario: aclProfile.id_usuario,
      id_grupo: aclProfile.id_grupo,
      permissions: parsePermissions,
      ativo: true,
    })
  }

  public static async update(aclProfile: AclProfile): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    delete aclProfile.selected
    return await put(`/acl/acl-profiles/`, aclProfile)
  }
}
