
export class SchedulingStatus{
    id: number
    nome: string
}

export interface NewScheduling {
    id_tipo_consulta: number,
    id_medico: number,
    id_paciente: number,
    id_local_atendimento:number,
    data_agendamento: string,
    id_dia_semana: number,
    obs: string,
    ativo: boolean
}