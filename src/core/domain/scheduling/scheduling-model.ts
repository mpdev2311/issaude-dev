export default class Scheduling {
  id: string
  id_medico: number
  id_local_atendimento: number
  data_agendamento: string
  id_dia_semana: number
  obs: string
  typeConsultation: any
  id_paciente: number
  bloqueio: boolean
  schedulingName: any
  id_protocolo: number
  id_plano: number
  data_gravacao: string
  status: any
  id_responsavel: number
  id_corp: number
  data_alta: string
  alta_admin: string
  hora_atendimento: string
  inicio: string
  fim: string
  chegou_t: string
  ativo: string
  chamada_painel: string
  id_user: number
  enviar_equipamento: any
  prioridade: number
  id_grupo_risco: number
  id_remarcado: number
  codigo_tuss: string
  guia: string
  informacao: string
  id_motivo_desistencia: number
  encaixe: boolean
  origem_agendamento: number
  id_video: number
  url_video: string
  data_autorizacao: string
  nota: string
  comentario: string
  id_ticket_venda: string
  init_ticket_venda: string
  senha_chamada: string
}

export interface filterScheduling {
  page: number
  size: 20
  id_corp: number
  id_paciente?: number
  date: string | Date
  id_medico?: number
  id_local?: string | number
}

export interface createScheduling {
  typeConsultation: {
      id: string | number
  },
  id_medico: string | number,
  id_local_atendimento: string | number,
  data_agendamento: string | Date,
  id_dia_semana: string | number,
  obs: string,
  id_paciente: string | number,
  bloqueio: boolean,
  schedulingName: {
      id: string | number
  },
  id_plano: string | number,
  status: {
      id: string | number
  },
  id_corp: string | number,
  inicio: string,
  fim: string,
  id_user: string | number,
  prioridade: number,
  encaixe: boolean,
  origem_agendamento: string | number
}

export interface searchFreeTimes {
  page: string | number
  size: string | number
  date: Date | string
  id_corp: string | number
  id_agenda: string | number
  id_local: string | number
  id_medico: string | number
}

export interface searchLoadMenu {
  date: Date
  id_corp: string | number
  id_local: string | number
}

export interface updateStatus {
  id: number,
  id_plano: number,
  status: {
      id: number
  },
  id_corp: number,
  id_user: number
}
