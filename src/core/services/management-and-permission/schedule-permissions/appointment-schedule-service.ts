import { AppointmentSchedule } from '../../../domain/management-and-permission/schedule-permissions/appointment-schedule-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '../../request'

export default class AppointmentScheduleService {
  public static async getAll(): Promise<Array<AppointmentSchedule>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/appointment_schedule/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/appointment_schedule/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/appointment_schedule/${id}`)
  }

  public static async create(appointmentSchedule: AppointmentSchedule): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/appointment_schedule/`, appointmentSchedule)
  }

  public static async update(appointmentSchedule: AppointmentSchedule): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/appointment_schedule/`, appointmentSchedule)
  }
}
