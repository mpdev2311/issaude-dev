    export interface Provider {
        id: number;
        nome: string;
    }

    export interface Honorario {
        id: number;
        codigo: string;
        descri: string;
    }

    export interface Content {
        id: number;
        codigo_tiss: string;
        quant: number;
        valor_unitario: number;
        valor_total: number;
        tipo: number;
        conta: number;
        acrescimo: number;
        glosa: number;
        recebido: boolean;
        guia: number;
        id_orcamento: number;
        via_acesso: string;
        tecnica_utilizada: string;
        usuario_encerrou: string;
        data_gravacao: string;
        id_corp: number;
        inicio: string;
        fim: string;
        grau_part: string;
        ativo: boolean;
        id_user: number;
        opme: boolean;
        data_prescricao: string;
        provider: Provider;
        honorario: Honorario;
    }

    export class Bills {
        content: Content[];
        totalPages: number;
        size: number;
        last: boolean;
        totalElements: number;
    }


