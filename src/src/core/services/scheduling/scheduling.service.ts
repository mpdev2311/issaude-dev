import { axios } from '../request'
import { AxiosInstance, AxiosResponse } from 'axios';
import Scheduling from '../../../core/domain/scheduling/scheduling-model';
import Generic from '../../../core/domain/generic/generic-mode';


export default class SchedulingService {
    
    public static async getMenu() : Promise<Array<Generic>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('https://api.app3.issaude.online/schedulings/scheduling-config?end_date=02/02/2022&start_date=02/02/2022&id_corp=1&id_local=1');
        return data
    }


    public static async getAll() : Promise<Array<Scheduling>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/schedulings/?id_medico=2&id_corp=1&data_inicio=11/11/2020&data_fim=11/11/2022&page=0&size=8');
        return data
    }
}