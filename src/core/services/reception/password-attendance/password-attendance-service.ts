import { PasswordAttendance } from '../../../domain/reception/password-attendance/password-attendance-domain'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/services/request'

export default class PasswordAttendanceService {
  public static async getAll(): Promise<Array<PasswordAttendance>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/schedulings/password_attendance/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/schedulings/password_attendance/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/schedulings/password_attendance/${id}`)
  }

  public static async create(passwordAttendance: PasswordAttendance): Promise<AxiosResponse> {
    const user = JSON.parse(localStorage.getItem('user')) || {}
    const corp = JSON.parse(localStorage.getItem('corp')) || {}

    const params = {
      id_usuario: parseInt(user.id),
      id_corp: parseInt(corp.id),
    }

    passwordAttendance.id_corp = params.id_corp
    passwordAttendance.id_user = params.id_usuario

    const { post } = axios as AxiosInstance
    return await post(`schedulings/password_attendance/`, passwordAttendance)
  }

  public static async update(passwordAttendance: PasswordAttendance): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`schedulings/password_attendance/`, passwordAttendance)
  }
}
