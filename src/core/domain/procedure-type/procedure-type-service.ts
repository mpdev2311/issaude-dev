import { ProcedureType } from './procedure-type-model'
import { BaseService } from '@domain/base-service'

export default class ProcedureTypeService extends BaseService<ProcedureType> {
  constructor(url: string = '/revenues/type-procedure') {
    super(url)
  }
}
