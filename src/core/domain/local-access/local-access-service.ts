import { LocalAccess } from './local-access-model'
import { BaseService } from '@domain/base-service'
import { Param } from '@domain/param/param-model'
import { BasePaginator } from '@domain/pagination/Paginator'
import { createParameter } from '@core/helpers/param'

export default class LocalAccessService extends BaseService<LocalAccess> {
  constructor(url: string = '/schedulings/local-access') {
    super(url)
  }

  public async getAll(): Promise<BasePaginator<LocalAccess>> {
    const localAccessParams = new Array<Param>()
    localAccessParams.push(createParameter('id_usuario', '1'))

    return await super.getAll(localAccessParams, null)
  }
}
