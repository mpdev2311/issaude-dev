import { axios } from '../../request'
import { AxiosInstance, AxiosResponse } from 'axios';
import AclProfileCorporation from '@core/domain/acl/acl-profile-corporation/acl-profile-corporation-model';
import { store } from '../../../store/store';


export default class AclProfileCorporationService {
   

    public static async getAll() : Promise<Array<AclProfileCorporation>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get('/acl/acl-profile-corporations');
        return data
    }

    public static async getAllSelected(object) : Promise<Array<AclProfileCorporation>>{
        const { get } = axios as AxiosInstance;
        const { data } = await get(`/acl/acl-profile-corporations?id_corp=${object.id_corp}&id_usuario=${object.id_usuario}`);
        return data
    }

    public static async update(aclProfileCorporation : Array<AclProfileCorporation>, param:any) : Promise<AxiosResponse>{
        const { patch } = axios as AxiosInstance;

        if(aclProfileCorporation.length === 0){
            store.dispatch('MESSAGE_STORE_ERROR_PUSH', `Nenhum perfil foi selecionado!`)
            return;
        }

        return await patch(`/acl/acl-profile-corporations/${param.id_corp}/${param.id_usuario}`, aclProfileCorporation)
    }
}