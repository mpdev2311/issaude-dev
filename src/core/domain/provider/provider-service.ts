import { BaseService } from '@domain/base-service'
import { Providers } from './provider-model'
import { AxiosInstance } from 'axios'
import { axios } from '@core/request'
import { PAGINATION_SIZE } from '@core/constaints'
import { createParameter } from '@core/helpers/param'
import { Param } from '@domain/param/param-model'

export default class ProviderService extends BaseService<Providers> {
  constructor(url: string = '/providers') {
    super(url)
  }
  public async getAll(): Promise<Array<Providers>> {
    const providerParams = new Array<Param>()
    providerParams.push(createParameter('id_tipo_prestador', '1'))
    providerParams.push(createParameter('nao_atende', 'false'))

    return super.getAll(providerParams, null, '/filters')
  }

  public async getProfessionalPerformer(): Promise<Array<Providers>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/providers/filters?page=0&size=${PAGINATION_SIZE}&id_corp=${
        this.loggedUser().id_corp
      }&id_tipo_prestador=1&do_corpo_clinico=true&nao_atende=false`
    )
    return data
  }

  public async getProfessionalRequest(name: string): Promise<Array<Providers>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/providers/filters?page=0&size=${PAGINATION_SIZE}&id_corp=${
        this.loggedUser().id_corp
      }&id_tipo_prestador=1&nao_atende=false&nome=${name}`
    )
    return data
    //basics/companies/findall?page=0&size=${PAGINATION_SIZE}&id_corp=idcorp
  }

  public async getProfessionalAuthorizing(): Promise<Array<Providers>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/providers/filters?page=0&size=${PAGINATION_SIZE}&id_corp=${
        this.loggedUser().id_corp
      }&id_tipo_prestador=1&do_corpo_clinico=true&nao_atende=false`
    )
    return data
  }
}
