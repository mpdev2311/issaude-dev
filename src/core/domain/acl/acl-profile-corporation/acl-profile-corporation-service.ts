import { axios } from '@core/request'
import { AxiosInstance, AxiosResponse } from 'axios'
import AclProfileCorporation from '@domain/acl/acl-profile-corporation/acl-profile-corporation-model'
import { store } from '@core/store'
import { BaseService } from '@domain/base-service'

export default class AclProfileCorporationService extends BaseService<AclProfileCorporation> {
  constructor(url: string = '/acl/acl-profile-corporations') {
    super(url)
  }
  public async getAllSelected(object): Promise<Array<AclProfileCorporation>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/acl/acl-profile-corporations?id_corp=${this.loggedUser().id_corp}&id_usuario=${
        this.loggedUser().id_user
      }`
    )
    return data
  }

  public async update(
    aclProfileCorporation: Array<AclProfileCorporation>,
    param: any
  ): Promise<AxiosResponse> {
    const { patch } = axios as AxiosInstance

    if (aclProfileCorporation.length === 0) {
      store.dispatch('MESSAGE_STORE_ERROR_PUSH', `Nenhum perfil foi selecionado!`)
      return
    }

    return await patch(
      `/acl/acl-profile-corporations/${param.id_corp}/${param.id_usuario}`,
      aclProfileCorporation
    )
  }
}
