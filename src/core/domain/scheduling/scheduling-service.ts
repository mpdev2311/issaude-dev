import { axios } from '@core/request'
import { AxiosInstance } from 'axios'
import Scheduling from './scheduling-model'
import Generic from '@domain/generic/generic-model'
import {
  filterScheduling,
  createScheduling,
  searchFreeTimes,
  searchLoadMenu,
  updateStatus,
} from './scheduling-model'

export default class SchedulingService {
  public static async getMenu(payload: searchLoadMenu): Promise<Array<Generic>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/schedulings/scheduling-config?start_date=${payload.date.toLocaleDateString()}&end_date=${payload.date.toLocaleDateString()}&id_corp=${
        payload.id_corp
      }&id_local=${payload.id_local}`
    )
    return data
  }

  public static async getAll(filter: filterScheduling): Promise<Array<Scheduling>> {
    let _filter = Object.entries(filter).filter(
      ([key, value]) => (key === 'id_medico' || key === 'id_paciente') && value !== undefined
    )
    let params = Object.fromEntries(_filter)
    let date =
      typeof filter.date === 'object' ? new Date(filter.date).toLocaleDateString() : filter.date
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/schedulings/?id_corp=${filter.id_corp}&start_date=${date}&end_date=${date}&page=${filter.page}&size=${filter.size}`,
      {
        params,
      }
    )
    return data
  }

  public static async createNewScheduling(payload: createScheduling) {
    const { post } = axios as AxiosInstance
    const { data, status } = await post('/schedulings/', payload)
    return { ...data, status }
  }

  public static async getFreeTime(payload: searchFreeTimes) {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/schedulings/scheduling-acess/free-times?page=${payload.page}&size=${
        payload.size
      }&id_provider=${payload.id_medico}&start_date=${payload.date
        .toLocaleDateString()
        .split('/')
        .reverse()
        .join('-')}&end_date=${payload.date
        .toLocaleDateString()
        .split('/')
        .reverse()
        .join('-')}&id_agenda=${payload.id_agenda}&id_tipo_sala=${payload.id_local}&id_local=${
        payload.id_local
      }&id_corp=${payload.id_corp}`
    )
    return data
  }

  public static async updateStatusScheduling(payload: updateStatus) {
    const { put } = axios as AxiosInstance
    const { data, status } = await put('/schedulings/definirStatus', payload)
    return { ...data, status }
  }
}

// https://api.app3.issaude.online/schedulings/?id_corp=1&start_date=24/04/2022&end_date=24/04/2022&page=0&size=${PAGINATION_SIZE}
