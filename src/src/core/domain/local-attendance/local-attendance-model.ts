import {Company} from "@core/domain/company/company-model";

export class PlaceServices {
    content: Content[];
    totalPages: number;
    size: number;
    last: boolean;
    totalElements: number;
}

export interface Content {
    id: number;
    local: string;
    user: number;
    id_corp: number;
    data_gravacao: string;
    telefone: string;
    companies: Company[];
    endereco: string;
    uf: string;
    cep: string;
    numero: string;
    cidade: string;
    bairro: string;
    ativo: boolean;
}

export class PlaceService {
    id: number;
    local: string;
    user: number;
    id_corp: number;
    data_gravacao: string;
    telefone: string;
    endereco: string;
    uf: string;
    cep: string;
    numero: string;
    cidade: string;
    bairro: string;
    ativo: boolean;
}