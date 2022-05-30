import { Specialty } from '@domain/specialty/specialty-model'
import { BaseService } from '../base-service'

export default class SpecialtyService extends BaseService<Specialty> {
  constructor(url: string = '/providers/specialties') {
    super(url)
  }
}
