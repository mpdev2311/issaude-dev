import { User } from './user-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export class UserService {
  public static async getAll(): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    const corp = JSON.parse(localStorage.getItem('corp'))
    return await get(`/authorization/users/by_corp/${corp.id}`)
  }

  public static async getAllUsers(): Promise<Array<User>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/authorization/users/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/authorization/users/${id}`)
  }

  public static async create(user: User): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/authorization/users`, {
      nome: user.nome,
      cpf: user.cpf,
      senha: user.senha,
      id_corp: user.id_corp,
      duracao_senha: user.duracao_senha,
      senha_anterior: user.senha_anterior,
      data_gravacao: '2020-11-13T14:54:06.843+00:00',
      bloquear_apos: user.bloquear_apos,
      ultima_alteracao_senha: user.ultima_alteracao_senha,
      ativo: true,
    })
  }

  public static async changePassword(user: User): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/authorization/users/change-password`, {
      nome: user.nome,
      cpf: user.cpf,
      senha: user.senha,
      id_corp: user.id_corp,
      duracao_senha: user.duracao_senha,
      senha_anterior: user.senha_anterior,
      data_gravacao: '2020-11-13T14:54:06.843+00:00',
      bloquear_apos: user.bloquear_apos,
      ultima_alteracao_senha: user.ultima_alteracao_senha,
      ativo: true,
    })
  }

  public static async update(user: User): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/authorization/users`, {
      id: user.id,
      nome: user.nome,
      cpf: user.cpf,
      senha: user.senha,
      id_corp: user.id_corp,
      duracao_senha: user.duracao_senha,
      senha_anterior: user.senha_anterior,
      bloquear_apos: user.bloquear_apos,
      ultima_alteracao_senha: user.ultima_alteracao_senha,
      data_gravacao: user.data_gravacao,
      ativo: true,
    })
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/authorization/users/${id}`)
  }
}
