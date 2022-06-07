import { Company } from './company-model'
import { BaseService } from '@domain/base-service'

export default class CompanyService extends BaseService<Company> {
  constructor(url: string = '/basics/companies') {
    super(url)
  }
}
