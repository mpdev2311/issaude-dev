import { ScheduleName } from './schedule-name-model'
import { BaseService } from '@domain/base-service'

export default class ScheduleNameService extends BaseService<ScheduleName> {
  constructor(url: string = '/schedulings/scheduling-name') {
    super(url)
  }
}
