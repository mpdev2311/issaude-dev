import { Product } from './../product/product-model';
export class GuideManagements {
    content: Content[];
    totalPages: number;
    size: number;
    last: boolean;
    totalElements: number;
}

export class TypeService {
    id: number;
    nome: string;
    valor: string;
    sadt?: boolean;
    consulta?: boolean;
    ativo: boolean;
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

export interface Product {
    id: number;
    codigo: number,
    descri: string;
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
    Product: Product;
}

export class GuideManagement {
        id:number;
        numero_guia: string;
        emissao: string;
        id_profissional_executante: number;
        id_paciente: string;
        tipo_doenca: string;
        tempo_doenca: string;
        indicacao_acidente: number;
        cid_principal: string;
        cid1: string;
        cid2: string;
        cid3: string;
        data_atendimento: string;
        cod_procedimento: string;
        tipo_consulta: number;
        tipo_saida: number;
        obs: string;
        cod_tabela_hm: string;
        tipo: number;
        data_fim: string;
        tipo_atendimento: string;
        id_agenda: number;
        consulta: boolean;
        senha: string;
        id_agenda_nome: number;
        id_local_atendimento: number;
        id_empresa_contratada: number;
        usuario: string;
        //data_gravacao: string;
        id_solicitante: number;
        id_corp: number;
        id_tipo_internacao:string;
        id_regime_internacao:string;
        carater_internacao: string;
        id_user: number;
        id_empresa_solicitante: number;
        qdiarias:string;
        id_plano: number;
        id_acomodacao:string;
        alta:string;
        id_entrega:string;
        data_hora_recebimento:string;
        id_user_recebeu:string;
        hora_atendimento: string;
        data_autorizacao: string;
        justificativa:string;
        id_especialidade: number;
        id_medico_autorizador: number;
        atendimento_rn: string;
        sintomas:string;
        prova_diagnostica:string;
        ativo: boolean;
        guia_glosa:string;
        validade_senha: string;
        data_solicitacao: string;
        cod_solicitante:string;
        cod_executante:string;
        numero_guia_solicitacao_internacao:string;
        is_venda: boolean;
        id_prestador:string;
        id_user_quitou:string;
        dados_neo_natal:string;
        dados_parto: string;
        tempo_doe: string;
}



