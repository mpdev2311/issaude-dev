import { AttendanceType } from '@core/domain/attendance-local/attendance-type-model'
import { BaseService } from '../base-service'

export default class AttendanceTypeService extends BaseService<AttendanceType> {
  constructor(url: string = '/warehouse/products-classification') {
    super(url)
  }
}
