import { AxiosInstance } from 'axios';
import { axios } from '../../../core/services/request'

export class PatientService {
    public static async findByCpf (cpf) : Promise<any> {
        const corp = JSON.parse(localStorage.getItem('corp'))
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/find?cpf=${cpf}&id_corp=${corp.id}`)
        return data
    }
}