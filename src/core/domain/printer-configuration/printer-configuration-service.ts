import { AxiosResponse } from 'axios'
import { axios } from '@core/request'

export class PrinterConfigurationService {
  public static async save(printConfiguration): Promise<AxiosResponse> {
    const { post } = axios
    return await post('/printer/configurations', { ...printConfiguration })
  }
}
