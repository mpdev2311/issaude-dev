import { BaseService } from '../base-service'

export default class LocalAttendance extends BaseService {
  constructor(url: string = '/basics/local-attendance') {
    super(url)
  }
}
