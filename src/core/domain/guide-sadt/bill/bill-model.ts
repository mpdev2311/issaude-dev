export interface Provider {
  id: number
  nome: string
}

export interface Honorario {
  id: number
  codigo: string
  descri: string
}

export interface Content {
  id: number
  codigo_tiss: string
  quant: number
  valor_unitario: number
  valor_total: number
  tipo: number
  conta: number
  acrescimo: number
  glosa: number
  recebido: boolean
  guia: number
  id_orcamento: number
  via_acesso: string
  tecnica_utilizada: string
  usuario_encerrou: string
  //data_gravacao: string;
  id_corp: number
  inicio: string
  fim: string
  grau_part: string
  ativo: boolean
  id_user: number
  opme: boolean
  data_prescricao: string
  provider: Provider
  honorario: Honorario
}

export class Bills {
  content: Content[]
  totalPages: number
  size: number
  last: boolean
  totalElements: number
}

export class Bill {
  id_paciente: number
  id_protocolo: number
  data_prescricao: Date
  codigo_tiss: string
  quant: number
  valor_unitario: number
  valor_total: number
  tipo: number
  linha?: any
  conta: number
  acrescimo: number
  id_medico: number
  id_plano: number
  glosa: number
  obs?: any
  data_recebimento?: any
  recebido: boolean
  guia: number
  id_orcamento: number
  id_produto?: any
  id_tipo_recebimento?: any
  id_pagamento_medico?: any
  via_acesso: string
  tecnica_utilizada: string
  usuario: string
  usuario_encerrou: string
  data_gravacao: string
  id_corp: number
  id_glosa?: any
  data_recebimento_usuario?: any
  repre_conta?: any
  inicio: string
  fim: string
  cid_c?: any
  grau_part: string
  ativo: boolean
  id_conta_corrente?: any
  id_user: number
  nfe?: any
  codigo_prestador?: any
  guia_secundaria?: any
  id_remessa?: any
  opme: boolean
  data_baixa_financeiro?: any
  id_user_recebeu_financeiro?: any
  provider: Provider
  honorario: Honorario
}
