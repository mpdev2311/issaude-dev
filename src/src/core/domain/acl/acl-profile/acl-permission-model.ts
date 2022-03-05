import { AclRoute } from "@core/domain/management-and-permission/acl-module-routes/acl-route-model"

export default class AclProfilePermission {
    id : number
    nome : string
    alias : string
    rota: AclRoute
    ver : boolean
    criar: boolean
    copiar : boolean
    editar : boolean
    excluir : boolean
    download : boolean
    importar : boolean
    exportar : boolean
    id_rota : number
    id_acl_perfil : number 
}