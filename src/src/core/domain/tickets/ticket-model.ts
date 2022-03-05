import { ArchiveTicket } from "../archives/archive-tickets/archive-ticket-model"
import { TicketHistory } from "../ticket-history/ticket-history"
import { Funcionality } from "../funcionalities/funcionality-model"
import { Priority } from "../priorities/priority-model"
import { Provider } from "../providers/provider-model"
import { Responsible } from "../responsible/responsible-model"
import { Type } from "../types/type-model"
import { AclModule } from "../acl/acl-modules/acl-module"
import { AclModuleRoute } from "../acl/acl-modules/routes/acl-module-route"

export class Ticket {
    titulo : string
    descricao : string
    cnpj : string
    id_cliente : number
    ativo : boolean
    cod_modulo_id : number
    cod_rota_id : number
    protocolo_chamado : number
    data_abertura : string
    data_da_ocorrencia : string
    data_termino : string
    cod_is_responsavel : number
    data_estimada_termino : string
    cod_situacao_chamado : number
    cod_tipo_id : number
    cod_funcionalidade : number
    cod_prioridade : number
    prioridade : Priority
    funcionalidade : Funcionality
    tipo : Type
    responsavel : Responsible
    prestador : Provider
    module : AclModule
    route : AclModuleRoute
    anexos : ArchiveTicket[]
    historico : TicketHistory[]
}