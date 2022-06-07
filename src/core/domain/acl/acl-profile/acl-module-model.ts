import { AclModuleRoute } from '@domain/management-and-permission/acl-module-route/acl-module-route-model'

export default class AclModule {
  id_modulo: number
  nome: string
  rotas: Array<AclModuleRoute>
}
