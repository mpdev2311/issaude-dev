import { axios } from '../../../core/services/request'
import { AxiosInstance, AxiosResponse } from 'axios';
import { LocalAccess } from '@core/domain/scheduling/local-access/local-acess-model';


export default class LocalAccessService {
    
    public static async getAll() : Promise<Array<LocalAccess>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/schedulings/local-access?page=0&size=20&id_usuario=1&id_corp=1');
        console.log(data);
        return data
    }
}