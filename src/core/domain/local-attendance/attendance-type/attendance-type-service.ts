import { AttendanceType } from './attendance-type-model'
import { BaseService } from '@domain/base-service'

export default class AttendanceTypeService extends BaseService<AttendanceType> {
  constructor(url: string = '/warehouse/products-classification') {
    super(url)
  }
}
