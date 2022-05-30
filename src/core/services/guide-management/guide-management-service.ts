import {
  GuideManagements,
  TypeService,
} from './../../domain/guide-management/guide-management-model'
import { PerformerType } from './../../domain/performer-type/performer-type-model'
import { axios } from '../request'
import { AxiosInstance } from 'axios'
import { PAGINATION_SIZE } from '@core/constaints'
import { BaseService } from '../base-service'

export default class GuideManagementService extends BaseService {
  constructor(url: string = '/revenues/service-type-guide') {
    super(url)
  }
  public async getAll(): Promise<Array<GuideManagements>> {
    let date = new Date(),
      dia = date.getDate().toString().padStart(2, '0'),
      mes = (date.getMonth() + 1).toString().padStart(2, '0'),
      ano = date.getFullYear()
    const dataAtual = `${dia}/${mes}/${ano}`

    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/revenues/guides?page=0&size=${PAGINATION_SIZE}&id_corp=${
        this.loggedUser().id_corp
      }&start_date=01/02/2022&end_date=${dataAtual}`
    )
    return data
  }

  public async getTypeService(): Promise<Array<TypeService>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/revenues/service-type-guide?page=0&size=${PAGINATION_SIZE}&id_corp=${
        this.loggedUser().id_corp
      }`
    )
    return data
  }

  public async getPerformeType(): Promise<Array<PerformerType>> {
    //const corp = JSON.parse(localStorage.getItem('corp'))
    const { get } = axios as AxiosInstance
    const { data } = await get('/revenues/performer-type')
    return data
  }
}
