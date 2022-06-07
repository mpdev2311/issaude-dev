import AclProfile from '@domain/acl/acl-profile/acl-profile-model'

export default class AclProfileCorporation {
  id_corp: number
  id_acl_perfil: number
  id_usuario: number
  id_autorizador: number
  perfil: AclProfile
}
