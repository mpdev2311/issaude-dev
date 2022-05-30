import { ScheduleName } from '../../domain/scheduling/schedule_rooms/schedule-name-model'
import { BaseService } from '../base-service'

export default class ScheduleNameService extends BaseService<ScheduleName> {
  constructor(url: string = '/schedulings/scheduling-name') {
    super(url)
  }
}
