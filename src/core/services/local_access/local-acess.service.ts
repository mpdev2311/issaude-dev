import { LocalAccess } from '@core/domain/scheduling/local-access/local-acess-model'
import { BaseService } from '../base-service'
import { Param } from '@core/domain/params/param-model'
import { store } from '@core/store/store'
import { BasePaginator } from '@core/domain/pagination/Paginator'

export default class LocalAccessService extends BaseService<LocalAccess> {
  constructor(url: string = '/schedulings/local-access') {
    super(url)
  }

  public async getAll(): Promise<BasePaginator<LocalAccess>> {
    const localAccessParams = new Array<Param>()
    const localAccessUsuarioIdParam = new Param()
    localAccessUsuarioIdParam.name = 'id_usuario'
    localAccessUsuarioIdParam.value = store.getters.user.id
    localAccessParams.push(localAccessUsuarioIdParam)

    return await super.getAll(localAccessParams, null)
  }
}
