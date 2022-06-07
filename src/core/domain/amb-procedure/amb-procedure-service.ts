import { createParameter } from '@core/helpers/param'
import { AmbProcedure } from './amb-procedure-model'
import { BaseService } from '@domain/base-service'
import { BasePaginator } from '@domain/pagination/Paginator'
import { Param } from '@domain/param/param-model'

export default class AmbProcedureService extends BaseService<AmbProcedure> {
  constructor(url: string = '/revenues/table-amb') {
    super(url)
  }

  public async searchAmbProcedure(
    descricao?: string,
    idTabela?: number,
    paginator?: BasePaginator<AmbProcedure>
  ): Promise<BasePaginator<AmbProcedure>> {
    const ambProcedureParams = new Array<Param>()
    if (descricao && descricao.length) {
      ambProcedureParams.push(createParameter('descri', descricao))
    }
    if (idTabela && idTabela !== 0) {
      ambProcedureParams.push(createParameter('id_tabela', idTabela.toString()))
    }

    return super.getAll(ambProcedureParams, paginator)
  }
}
