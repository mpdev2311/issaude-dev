import { Patient } from './../../domain/guide-management/guide-management-model'
import { BasePaginator } from '@core/domain/pagination/Paginator'
import { Cbo } from '@core/domain/patient/cbo'
import { Ethnicitie } from '@core/domain/patient/ethnicitie'
import { MaritalStatus } from '@core/domain/patient/marital-status'
import { OrganDocument } from '@core/domain/patient/organ-document'
import { Race } from '@core/domain/patient/race'
import { Religion } from '@core/domain/patient/religion'
import { Schooling } from '@core/domain/patient/schooling'
import { Uf } from '@core/domain/patient/uf'
import { PlanAggree } from '@core/domain/plan/plan-agreee-model'
import { AxiosInstance } from 'axios'
import { axios } from '@core/services/request'
import { Patient, RequestPatient } from '../../domain/patient/patient'
import { PAGINATION_SIZE } from '@core/constaints'
import { BaseService } from '../base-service'
import { Country } from '@core/domain/patient/country'
import { BasePaginator } from '../../domain/pagination/Paginator'

class PatientService extends BaseService<Patient> {
  constructor(url: string = '/patients') {
    super(url)
  }
  public async findByCpf(cpf: string): Promise<Patient> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients/find?cpf=${cpf}&id_corp=${this.loggedUser().id_corp}`)
    return data
  }

  public async findSchooling(): Promise<Schooling[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients/schooling`)
    return data
  }

  public async findRace(): Promise<Race[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients/race-color`)
    return data
  }

  public async findReligion(): Promise<Religion[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients/religion`)
    return data
  }

  public async findEthnicities(): Promise<Ethnicitie[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients/ethnicities`)
    return data
  }

  public async findMaritalStatus(): Promise<MaritalStatus[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients/marital-status`)
    return data
  }

  public async findPlanAgree(): Promise<PlanAggree[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/providers/plan-agreements?page=0&size=${PAGINATION_SIZE}&id_corp=${
        this.loggedUser().id_corp
      }`
    )
    return data
  }

  public async findMaritalCbos(): Promise<BasePaginator<Cbo>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients/cbo?page=0&size=100`)
    return data.content
  }

  public async findorganizacoesDocumentos(): Promise<OrganDocument[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients/document-organ`)
    return data
  }

  public async findEstados(): Promise<Uf[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/basics/state`)
    return data
  }

  public async findCountries(): Promise<Country[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients/countries`)
    return data
  }

  public async searchPatient(parameter: RequestPatient): Promise<BasePaginator<Patient>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/patients`, {
      params: parameter,
    })

    return data
  }
}

export { PatientService }
