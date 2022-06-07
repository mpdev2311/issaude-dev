import { BaseService } from '@domain/base-service'
import { TableName } from './table-name-model'

export default class TableNameService extends BaseService<TableName> {
  constructor(url: string = '/revenues/table-names') {
    super(url)
  }
}
