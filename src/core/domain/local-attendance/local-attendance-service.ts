import { LocalAttendance } from './local-attendance-model'
import { BaseService } from '@domain/base-service'

export default class LocalAttendanceService extends BaseService<LocalAttendance> {
  constructor(url: string = '/basics/local-attendance') {
    super(url)
  }
}
