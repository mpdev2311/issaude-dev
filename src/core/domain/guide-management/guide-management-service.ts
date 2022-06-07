import { AccommodationType, GuideManagement, HospitalizationRegime, TypeOutputIntermment, TypeService } from './guide-management-model'
import { PerformerType } from '@domain/performer-type/performer-type-model'
import { axios } from '@core/request'
import { AxiosInstance, AxiosResponse } from 'axios'
import { PAGINATION_SIZE } from '@core/constaints'
import { BaseService } from '@domain/base-service'

export default class GuideManagementService extends BaseService<GuideManagement> {
  constructor(url: string = '/revenues/guides') {
    super(url)
  }
  public async getAllTds(): Promise<Array<GuideManagement>> {
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

  public async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/revenues/guides/${id}/1`)
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
    const { get } = axios as AxiosInstance
    const { data } = await get('/revenues/performer-type')
    return data
  }

  public async getHospitalizationRegime(): Promise<Array<HospitalizationRegime>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/revenues/hospitalization-regime')
    return data
  }

  public async getTypeOutputIntermment(): Promise<Array<TypeOutputIntermment>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/revenues/type-output-intermment/')
    return data
  }

  public async getAccommodationType(): Promise<Array<AccommodationType>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/revenues/accommodation-type/findAll?page=0&size=${PAGINATION_SIZE}&id_corp=${
      this.loggedUser().id_corp}`)
    return data
  }
}
