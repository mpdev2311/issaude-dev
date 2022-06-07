import { Specialty } from './specialty-model'
import { BaseService } from '@domain/base-service'

export default class SpecialtyService extends BaseService<Specialty> {
  constructor(url: string = '/providers/specialties') {
    super(url)
  }
}
