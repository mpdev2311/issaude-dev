import { BasePaginator } from '@core/domain/pagination/Paginator';
import { Param } from '@core/domain/params/param-model';
import { Cbo } from '@core/domain/patient/cbo';
import { Ethnicitie } from '@core/domain/patient/ethnicitie';
import { MaritalStatus } from '@core/domain/patient/marital-status';
import { OrganDocument } from '@core/domain/patient/organ-document';
import { Race } from '@core/domain/patient/race';
import { Religion } from '@core/domain/patient/religion';
import { Schooling } from '@core/domain/patient/schooling';
import { Uf } from '@core/domain/patient/uf';
import { PlanAggree } from '@core/domain/plan/plan-agreee-model';
import { Ticket } from '@core/domain/tickets/ticket-model';
import { AxiosInstance } from 'axios';
import { axios } from '../../../core/services/request'
import { Patient, RequestPatient } from '../../domain/patient/patient';

export class PatientService {
    public static async findByCpf (cpf) : Promise<any> {
        const corp = JSON.parse(localStorage.getItem('corp'))
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/find?cpf=${cpf}&id_corp=${corp.id}`)
        return data
    }

    public static async findSchooling () : Promise<Schooling[]> {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/schooling`)
        return data
    }

    public static async findRace () : Promise<Race[]> {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/race-color`)
        return data
    }

    public static async findReligion () : Promise<Religion[]> {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/religion`)
        return data
    }

    public static async findEthnicities () : Promise<Ethnicitie[]> {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/ethnicities`)
        return data
    }

    public static async findMaritalStatus () : Promise<MaritalStatus[]> {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/marital-status`)
        return data
    }

    public static async findPlanAgree () : Promise<PlanAggree[]> {
        const corp = JSON.parse(localStorage.getItem('corp'))
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/providers/plan-agreement?id_corp=${corp.id}`)
        return data
    }

    

    public static async findMaritalCbos() : Promise<BasePaginator<Cbo>> {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/cbo?page=0&size=100`)
        return data.content
    }


    public static async findorganizacoesDocumentos () : Promise<OrganDocument[]> {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/document-organ`)
        return data
    }


    public static async findEstados () : Promise<Uf[]> {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/states`)
        return data
    }


    public static async findById (id: number) : Promise<Patient> {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients/${id}`)
        return data
    }

    public static async findAll () : Promise<Patient> {
        const corp = JSON.parse(localStorage.getItem('corp'))
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients?page=0&size=4&id_corp=${corp.id}`)
        return data
    }

    public static async save(patient: Patient) {
        const { post } = axios as AxiosInstance;
        return await post(`/patients`, {
           ...patient
        })
    }

    public static async searchPatient(parameter: RequestPatient) {
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/patients`, {
            params: parameter
        })

        return data
    }

    public static async getAll(parameters : Param [], basePaginator : BasePaginator<Ticket>) : Promise<BasePaginator<Ticket>>{
        const { get } = axios as AxiosInstance
        const url = this.buildParam(parameters, basePaginator)
        const { data } = await get(url);
        console.log(data)
        return data
    }
    
    private static buildParam(parameters : Param [], basePaginator : BasePaginator<Ticket>
        ): string {

        const corp = JSON.parse(localStorage.getItem('corp'))

        let url : Array<string> = [];

        url.push(`/patients?page=${basePaginator?.pageable?.pageNumber ? basePaginator?.pageable?.pageNumber : 0}&size=5&id_corp=${corp.id}`)
        
        parameters.forEach(parameter => url.push(`&${parameter?.name}=${parameter?.value}`))
            

        console.log(url.join(''))

        return url.join('');
    }
}