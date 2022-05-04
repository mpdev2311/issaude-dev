import { axios } from '../request'
import { AxiosInstance, AxiosResponse } from 'axios';
import Scheduling from '../../../core/domain/scheduling/scheduling-model';
import Generic from '../../../core/domain/generic/generic-mode';
import { filterScheduling } from '../../domain/scheduling/scheduling-model';


export default class SchedulingService {
    
    public static async getMenu() : Promise<Array<Generic>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('https://api.app3.issaude.online/schedulings/scheduling-config?end_date=02/02/2022&start_date=02/02/2022&id_corp=1&id_local=1');
        return data
    }


    public static async getAll(filter: filterScheduling) : Promise<Array<Scheduling>>{
        let _filter = Object.entries(filter).filter(([key, value]) => (key === 'id_medico' || key === 'id_paciente') && value !== undefined)
        let params = Object.fromEntries(_filter)
        let start_date = new Date(filter.range_date.start).toLocaleDateString()
        let end_date = new Date(filter.range_date.end).toLocaleDateString()
        console.log(filter.range_date);
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/schedulings/?id_corp=${filter.id_corp}&start_date=${start_date}&end_date=${end_date}&page=${filter.page}&size=${filter.size}`, {
            params
        });
        return data
    }
}

// https://api.app3.issaude.online/schedulings/?id_corp=1&start_date=24/04/2022&end_date=24/04/2022&page=0&size=20