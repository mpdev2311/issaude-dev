export interface TypeProcedure {
    id: number;
    nome: string;
    id_corp: number;
    ativo: boolean;
}

export interface Content {
    id: number;
    codigo: string;
    descri: string;
    filme: number;
    auxiliares: number;
    porte_anestesico: number;
    valor: number;
    preco: number;
    typeProcedure: TypeProcedure;
    id_corp: number;
    cod_tabela: string;
    id_tabela: number;
    exige_cid: boolean;
    ativo: boolean;
    grupo: boolean;
    nivel_conta: boolean;
    uco: number;
    custo_real: number;
    id_kit: number;
    fator_participacao: number;
    data_gravacao: Date;
    id_user: number;
}

export interface Products {
    content: Content[];
    totalPages: number;
    size: number;
    last: boolean;
    totalElements: number;
}