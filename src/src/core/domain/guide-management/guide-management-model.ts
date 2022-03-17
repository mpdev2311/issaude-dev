export class GuideManagement {
    content: Content[];
    totalPages: number;
    size: number;
    last: boolean;
    totalElements: number;
}

export interface Provider {
    id: number;
    nome: string;
}

export interface Provider2 {
    id: number;
    nome: string;
}

export interface AgreementPlan {
    id: number;
    nome: string;
    provider: Provider2;
}

export interface Patient {
    id: number;
    nome: string;
}

export interface Content {
    id: number;
    cid_principal: string;
    data_atendimento: string;
    numero_guia: string;
    senha: string;
    provider: Provider;
    agreementPlan: AgreementPlan;
    patient: Patient;
}

