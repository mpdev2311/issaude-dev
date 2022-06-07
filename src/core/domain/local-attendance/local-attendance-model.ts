export class LocalAttendances {
  content: Content[]
  totalPages: number
  size: number
  last: boolean
  totalElements: number
}

export interface Company {
  id: number
  nome: string
}

export interface Content {
  id: number
  local: string
  user: number
  id_corp: number
  data_gravacao: string
  telefone: string
  companies: Company
  endereco: string
  uf: string
  cep: string
  numero: string
  cidade: string
  bairro: string
  ativo: boolean
}

export class LocalAttendance {
  id: number
  local: string
  user: number
  id_corp: number
  data_gravacao: string
  telefone: string
  endereco: string
  uf: string
  cep: string
  numero: string
  cidade: string
  bairro: string
  ativo: boolean
  id_uf: number
  companies: object
}
