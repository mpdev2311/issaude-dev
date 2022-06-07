export interface TypeProcedure {
  id: number
  nome: string
  id_corp: number
  ativo: boolean
  data_gravacao?: any
}

export class AmbProcedure {
  id: number
  codigo: string
  descri: string
  filme: number
  auxiliares: number
  porte_anestesico: number
  valor: number
  preco: number
  custo_real: number
  typeProcedure: TypeProcedure
  cod_tabela: string
  id_tabela: number
  id_kit: number
  exige_cid: boolean
  grupo: boolean
  nivel_conta: boolean
  uco: number
  fator_participacao: number
  data_gravacao: string
  id_corp: number
  id_user: number
  ativo: boolean
}
