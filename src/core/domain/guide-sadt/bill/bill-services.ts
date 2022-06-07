import { axios } from '@core/request'
import { AxiosInstance } from 'axios'
import { PAGINATION_SIZE } from '@core/constaints'
import { BaseService } from '@domain/base-service'
import { Bill } from './bill-model'

export default class BillsService extends BaseService<Bill> {
  constructor(url: string = '/revenues/bills') {
    super(url)
  }

  public static async getAll(): Promise<Array<Bill>> {
    const { get } = axios as AxiosInstance
    const { data } = await get(
      `/revenues/bills?page=0&size=${PAGINATION_SIZE}&id_corp=1&conta=3&guia=1`
    )
    return data
  }
}
