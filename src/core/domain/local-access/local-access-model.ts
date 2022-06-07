import { LocalAttendance } from '@domain/local-attendance/local-attendance-model'

export class LocalAccess {
  id: number
  id_usu: number
  id_corp: number
  ativo: boolean
  id_user: number
  data_gravacao: string
  localAttendance: LocalAttendance
}
