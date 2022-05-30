import { BasePaginator } from '../pagination/Paginator'

export interface TypeProcedure {
    id: number;
    nome: string;
    id_corp: number;
    ativo: boolean;
    data_gravacao?: any;
}

export interface Product {
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
    id_user: number;
    data_gravacao: string;
}

export interface ResponseProducts {
    content: Product[];
    totalPages: number;
    size: number;
    last: boolean;
    totalElements: number;
}

export interface RequestProduct {
    page?: number
    size?: number   
    id_corp?: number
    descricao: string
    codigo: number
    id_plano?: number
   
  }

  export interface State {
    products: Product[]
    product: Product
    paginator: BasePaginator<Product>
    parameters: RequestProduct
  }

  export class RequestProduct implements RequestProduct {
    constructor(page: number, size: number, idCorp: number, descricao: string,  codigo: number, idPlano: number) {
      this.page = page
      this.size = size
      this.descricao = descricao
      this.id_corp = idCorp
      this.codigo = codigo
      this.id_plano = idPlano
    }
  }