import { PAGINATION_SIZE } from '@core/constaints'
import { BasePaginator } from '@core/domain/pagination/Paginator'
import { Param } from '@core/domain/params/param-model'
import { store } from '@core/store/store'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/services/request'

export abstract class BaseService<T> {
  public _url: string
  constructor(url: string) {
    this._url = url
  }

  public buildParam(url: string, parameters: Param[], basePaginator: BasePaginator<T>): string {
    const corpId = this.loggedUser().id_corp
    const page = basePaginator?.pageable?.pageNumber ?? 0
    const size = basePaginator?.pageable?.pageSize ?? PAGINATION_SIZE
    let params: Array<string> = []
    params.push(`${url}?page=${page}&size=${size}&id_corp=${corpId}`)
    console.log(url, parameters, basePaginator)
    parameters?.forEach((parameter) => params.push(`&${parameter?.name}=${parameter?.value}`))
    return params.join('')
  }

  public loggedUser() {
    return store.getters.user
  }

  public async getAll(
    parameters: Param[],
    paginator: BasePaginator<T>,
    route = null
  ): Promise<BasePaginator<T>> {
    const { get } = axios as AxiosInstance
    let endpoint = this._url
    if (route) {
      {
        endpoint = endpoint + route
      }
    }
    const url = this.buildParam(`${endpoint}`, parameters, paginator)
    const { data } = await get(url)
    return data
  }

  public async getById(id: any): Promise<T> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`${this._url}/${id}`)
    return data
  }

  public async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(
      `${this._url}/${id}/${this.loggedUser().id}/${this.loggedUser().id_corp}`
    )
  }

  public async create(t: T): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(this._url, t)
  }

  public async update(t: T): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(this._url, t)
  }
}
