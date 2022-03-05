import { AxiosResponse } from 'axios';
import { axios } from '../request'

export class PrinterConfigurationService {
    public static async save(printConfiguration) : Promise<AxiosResponse>{
        const { post } = axios;
        return await post('/printer/configurations', { ...printConfiguration });
    }
}