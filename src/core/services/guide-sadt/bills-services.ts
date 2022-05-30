import { BaseService } from '../base-service'

export default class BillsService extends BaseService {
  constructor(url: string = '/revenues/bills') {
    super(url)
  }
}
