import { BasePaginator } from '../pagination/Paginator'
import { PlanAggree } from '../plan/plan-agreee-model'
import { Cbo } from './cbo'
import { Ethnicitie } from './ethnicitie'
import { MaritalStatus } from './marital-status'
import { OrganDocument } from './organ-document'
import { Race } from './race'
import { Schooling } from './schooling'
import { Uf } from './uf'

export interface State {
  maritalStatus: any
  escolaridades: any
  religioes: any
  planAgree: PlanAggree[]
  estadoCivil: any[]
  racas: any
  etinias: any
  paginator: BasePaginator<Patient>
  patients: PatientDto[]
  patient: PatientDto
  parameters: RequestPatient
  organizacoesDocumentos: OrganDocument[]
  estados: Uf[]
  cbos: Cbo[]
}

export interface RequestPatient {
  page?: number
  size?: number
  paciente_nome: string
  id_corp?: number
}

export class RequestPatient implements RequestPatient {
  constructor(page: number, size: number, nomePaciente: string, idCorp: number) {
    this.page = page
    this.size = size
    this.paciente_nome = nomePaciente
    this.id_corp = idCorp
  }
}

export class Plan {
  id: number
  matricula: string
  validade: string
  id_plano: number = 2
  principal: boolean
  ativo: boolean
}

export class Patient {
  id: number
  etinia: Ethnicitie
  raca: Race
  maritalStatus: MaritalStatus
  escolaridade: Schooling
  planos: Plan[]
  nome: string
  ativo: true
  cargo: any
  salario: null
  horasextras: null
  id_setor: null
  endereco: any
  tel_comercial: any
  cep: any
  tel_residencial: any
  tel_celular: string
  tel_outro: string
  cpf: string
  data_nasc: string
  sexo: string
  rg: string
  id_medicos: string
  cartao_nacional: string
  id_tipo: number
  prontuario_antigo: number
  data_obito: string
  foto: string
  e_mail: string
  responsavel: string
  obs: string
  medico_indica: null
  data_admissao: null
  id_empresa: null
  cpts: null
  livro_registro: null
  ramal: null
  unificado: null
  data_gravacao: string
  esterno: false
  usuario: string
  cidade: string
  bairro: string
  id_corp: number
  confir_consulta: number
  id_raca: number
  id_etnia: number
  nome_mae: string
  eletronico: string
  id_escolaridade: number
  pai: string
  id_estado_civil: number
  natural_de: string
  id_religiao: number
  ncasa: string
  uf: string
  indicado_paciente: null
  data_morigem: null
  id_medico_equipe: null
  senha: null
  id_user: number
  id_responsavel: null
  n_pis: null
  id_orgao: number
  id_pais: number
  id_uf: number
  id_uf_ctps: number
  id_uf_naturalidade: number
  id_uf_documento: number
  uf_naturalidade: null
  complemento_endereco: null
  escola: false
  nome_documento: string
  secao_titulo_eleitor: null
  zona_titulo_eleitor: null
  titulo_eleitor: null
  numero_livro_registro: null
  tipo_certidao: number
  numero_folha_registro: null
  numero_termo_registro: null
  nome_cartorio: null
  emissao_certidao: null
  uf_ctps: null
  emissao_ctps: null
  serie_ctps: null
  cbo: null
  tipo_endereco: null
  data_entrada_brasil: null
  pais_origem: null
  nacionalidade: null
  data_documento: null
  organizacao_documento: null
  complemento_documento: null
  uf_documento: null
  id_cbo: null
  recem_nascido: boolean
  hash: string
  data_acesso_app: null
  ultimo_acesso_app: null
  validade_senha_app: null
  senha_app_temp: null
  token: string
}

export interface PatientDto {
  id: number
  id_plano: number
  patient: {
    id: number
    nome: string
    ativo: boolean
    cargo: string
    salario: string | number | null
    matricula: string | number | null
    id_plano: string | number | null
    horasextras: string | number | null
    id_setor: string | number | null
    endereco: string
    tel_comercial: string
    cep: string
    tel_residencial: string
    tel_celular: string
    tel_outro: string
    cpf: string
    data_nasc: string
    sexo: string
    rg: string
    id_medicos: string | number | null
    cartao_nacional: string | null
    id_tipo: number
    prontuario_antigo: number | string
    data_obito: string | null
    foto: string | null
    e_mail: string
    responsavel: string
    obs: string
    medico_indica: string | null
    data_admissao: string | null
    id_empresa: string | null
    cpts: string | null
    livro_registro: string | null
    ramal: string | null
    unificado: string | null
    data_gravacao: string
    esterno: boolean
    usuario: string
    cidade: string
    bairro: string
    id_corp: number | string
    confir_consulta: string | number
    id_raca: number
    id_etnia: number
    nome_mae: string
    eletronico: string | null
    id_escolaridade: number
    pai: string
    id_estado_civil: number
    natural_de: string
    id_religiao: number
    ncasa: string
    uf: string
    indicado_paciente: string | null
    data_morigem: string | null
    id_medico_equipe: string | null
    senha: string | null
    id_user: number
    id_responsavel: string | null
    n_pis: string | null
    id_orgao: number
    id_pais: number
    id_uf: number
    id_uf_ctps: number
    id_uf_naturalidade: number
    id_uf_documento: number
    uf_naturalidade: null
    complemento_endereco: string | null
    escola: boolean
    nome_documento: string
    secao_titulo_eleitor: string | null
    zona_titulo_eleitor: string | null
    titulo_eleitor: string | null
    numero_livro_registro: string | null
    tipo_certidao: string | number
    numero_folha_registro: number | null
    numero_termo_registro: number | null
    nome_cartorio: string | null
    emissao_certidao: string | null
    uf_ctps: string | null
    emissao_ctps: string | null
    serie_ctps: string | null
    cbo: string | null
    tipo_endereco: string | null
    data_entrada_brasil: string | null
    pais_origem: string | null
    nacionalidade: string | null
    data_documento: string | null
    orgao_documento: string | null
    complemento_documento: string | null
    uf_documento: string | null
    id_cbo: string | null
    recem_nascido: boolean
    hash: string
    data_acesso_app: string | null
    ultimo_acesso_app: string | null
    validade_senha_app: string | null
    senha_app_temp: string | null
    token: string | null
  }
  matricula: string
  validade: string
  principal: boolean
  data_gravacao: string
  ativo: boolean
  id_corp: number
  id_user: number | string | null
}
