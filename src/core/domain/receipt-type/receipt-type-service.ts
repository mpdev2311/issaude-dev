import { ReceiptType } from './receipt-type-model'
import { AxiosInstance, AxiosResponse } from 'axios'
import { axios } from '@core/request'

export default class ReceiptTypeService {
  public static async getAll(): Promise<Array<ReceiptType>> {
    const { get } = axios as AxiosInstance
    const { data } = await get('/api/receipt_types/')
    return data
  }

  public static async getById(id: any): Promise<AxiosResponse> {
    const { get } = axios as AxiosInstance
    return await get(`/api/receipt_types/${id}`)
  }

  public static async deleteById(id: any): Promise<AxiosResponse> {
    return await (axios as AxiosInstance).delete(`/api/receipt_types/${id}`)
  }

  public static async create(receiptType: ReceiptType): Promise<AxiosResponse> {
    const { post } = axios as AxiosInstance
    return await post(`/api/receipt_types`, receiptType)
  }

  public static async update(receiptTypes: ReceiptType): Promise<AxiosResponse> {
    const { put } = axios as AxiosInstance
    return await put(`/api/receipt_types`, receiptTypes)
  }
}
