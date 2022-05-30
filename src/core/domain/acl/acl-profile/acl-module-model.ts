import { AclModuleRoute } from "@core/domain/management-and-permission/acl-module-routes/acl-module-routes-model"

export default class AclModule{
    id_modulo : number
    nome : string
    rotas : Array<AclModuleRoute>
}