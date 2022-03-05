import { axios } from '../request'
import { AxiosInstance } from 'axios';
import { SchedulingStatus } from '@core/domain/scheduling/scheduling-status/scheduling-status-model';


export default class SchedulingStatusService {
    
    public static async getAll() : Promise<Array<SchedulingStatus>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/schedulings/scheduling-status');
        return data
    }
}