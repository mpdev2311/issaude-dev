import { PAGINATION_SIZE } from '@core/constaints'
import { BasePaginator } from '@domain/pagination/Paginator'
import { Param } from '@domain/params/param-model'
import { store } from '@core/store'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import { generateSuccessAlert, generateErrorAlert } from '@core/helpers/alert'

export abstract class BaseService<T> {
  public _url: string
  constructor(url: string) {
    this._url = url
  }

  public buildParam(url: string, parameters?: Param[], basePaginator?: BasePaginator<T>): string {
    const corpId = this.loggedUser().id_corp
    const page = basePaginator?.pageable?.pageNumber ?? 0
    const size = basePaginator?.pageable?.pageSize ?? PAGINATION_SIZE
    let params: Array<string> = []
    params.push(`${url}?page=${page}&size=${size}&id_corp=${corpId}`)
    parameters?.forEach((parameter) => params.push(`&${parameter?.name}=${parameter?.value}`))
    return params.join('')
  }

  public loggedUser() {
    return store.getters.user
  }

  public async getAll(
    parameters?: Param[],
    paginator?: BasePaginator<T>,
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

  public async getById(id: number): Promise<T> {
    const { get } = axios as AxiosInstance
    const { data } = await get(`${this._url}/${id}`)
    return data
  }

  public async deleteById(id: number): Promise<AxiosResponse> {
    const response = await (axios as AxiosInstance).delete(
      `${this._url}/${id}/${this.loggedUser().id_user}/${this.loggedUser().id_corp}`
    )
    if (!IsSuccessfulStatusCode(response.status)) {
      generateErrorAlert('Erro ao deletar', response.data?.message)
    } else {
      generateSuccessAlert('Registro excluído com sucesso')
    }
    return response
  }

  public async create(t: T): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    const response = await post(this._url, t)
    if (!IsSuccessfulStatusCode(response.status)) {
      generateErrorAlert('Erro ao adicionar', response.data?.message)
    } else {
      generateSuccessAlert('Registro adicionado com sucesso')
    }
    return response
  }

  public async update(t: T): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    const response = await put(this._url, t)
    if (!IsSuccessfulStatusCode(response.status)) {
      generateErrorAlert('Erro ao atualizar', response.data?.message)
    } else {
      generateSuccessAlert('Registro atualizado com sucesso')
    }
    return response
  }
}
