import AclRoute from "./acl-permission-model"

export default class AclProfile{
    id_perfil : number
    nome : string
    descricao:string
    id_usuario:number
    id_corp:number
    ativo: boolean
    id_grupo:number
    selected:boolean
    permissions : Array<AclRoute>
}