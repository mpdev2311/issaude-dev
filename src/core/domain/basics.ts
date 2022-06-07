import { Uf } from '@domain/basics/uf'
import { AxiosInstance } from 'axios'
import { axios } from '@core/request'

class BasicService {
  public async findEstados(): Promise<Uf[]> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`/basics/state`)
    return data
  }
}

export default BasicService
