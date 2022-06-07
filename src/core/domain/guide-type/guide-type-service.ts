import { GuideType } from './guide-type-model'
import { AxiosInstance } from 'axios'
import { axios } from '@core/request'
import { BaseService } from '@domain/base-service'

export default class GuideTypeService extends BaseService<GuideType> {
  constructor(url: string = '/revenues/guides-type') {
    super(url)
  }

  public static async getAllTds(): Promise<Array<GuideType>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/revenues/guides-type')
    return data
  }
}
