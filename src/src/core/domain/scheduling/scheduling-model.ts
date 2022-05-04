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
  range_date: {
    start: string | Date
    end: string | Date
  }
  id_medico?: number
}
