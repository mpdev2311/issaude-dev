import { BaseService } from '../base-service'
import { Providers, Provider } from '../../domain/providers/provider-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/services/request'
import { PAGINATION_SIZE } from '@core/constaints'
import { createParameter } from '@core/helpers/param'

export default class ProviderService extends BaseService<Provider> {
  constructor(url: string = '/providers') {
    super(url)
  }
  public async getAll(): Promise<Array<Providers>> {
    const providerParams = new Array<Param>()
    providerParams.push(createParameter('id_tipo_prestador', '1'))
    providerParams.push(createParameter('nao_atende', 'false'))

    return super.getAll(providerParams, null, '/filters')
  }

  public static async getProfessionalPerformer(): Promise<Array<Providers>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/providers/filters?page=0&size=${PAGINATION_SIZE}&id_corp=${
        this.loggedUser().id_corp
      }&id_tipo_prestador=1&do_corpo_clinico=true&nao_atende=false`
    )
    return data
  }

  public static async getProfessionalRequest(): Promise<Array<Providers>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/providers/filters?page=0&size=${PAGINATION_SIZE}&id_corp=${
        this.loggedUser().id_corp
      }&id_tipo_prestador=1&nao_atende=false`
    )
    return data
    //basics/companies/findall?page=0&size=${PAGINATION_SIZE}&id_corp=idcorp
  }

  public static async getProfessionalAuthorizing(): Promise<Array<Providers>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/providers/filters?page=0&size=${PAGINATION_SIZE}&id_corp=${
        this.loggedUser().id_corp
      }&id_tipo_prestador=1&do_corpo_clinico=true&nao_atende=false`
    )
    return data
  }
}
