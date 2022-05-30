import { BaseService } from '../base-service'

export default class CompanyService extends BaseService {
  constructor(url: string = '/api/companies') {
    super(url)
  }
}
