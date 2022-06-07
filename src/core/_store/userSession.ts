import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import jwt_decode from 'jwt-decode'
import { LoginService } from '@domain/login/login-service'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import { useRouter } from 'vue-router'
import { UserCorporationService } from '@domain/user-corporation/user-corporation-service'
import { generateSuccessAlert } from '@core/helpers/alert'

export type UserData = Record<string, any> | null

export const userSession = defineStore('userSession', () => {
  const router = useRouter()
  const token = useLocalStorage('token', '')
  const corp = useLocalStorage('corp', '')
  const isLegacy = useLocalStorage('is_legacy', 'false')
  const user = useLocalStorage('user', '')
  const loading = ref(false)

  const isLoggedIn = computed(() => token.value !== undefined && token.value !== '')
  const userLogged = computed(() => {
    if (user.value[0] === '{') return JSON.parse(user.value)
    return {}
  })

  const corpLogged = computed(() => {
    if (corp.value[0] === '{') return JSON.parse(corp.value)
    return {}
  })

  function setUser(newUser: Partial<UserData>) {
    user.value = JSON.stringify(newUser)
  }

  function setToken(newToken: string) {
    token.value = newToken
  }

  function setIsLegacy(value: string) {
    isLegacy.value = value
  }

  function setLoading(newLoading: boolean) {
    loading.value = newLoading
  }

  function setCorp(value: any) {
    corp.value = JSON.stringify(value)
  }

  function clearStorage() {
    token.value = ''
    corp.value = ''
    isLegacy.value = ''
    user.value = ''
  }

  async function logoutUser() {
    clearStorage()
    router.push('/')
  }

  async function requestLogin(user: { name: string; password: string }) {
    setLoading(true)
    const result = await LoginService.login(user)
    if (result.status === undefined) {
      setLoading(false)
      return
    }
    const token = result.access_token
    const clear_token = removeBearer(token)
    const decode_token: any = jwt_decode(clear_token)
    setToken(clear_token)
    setUser(decode_token)
    setIsLegacy('false')
    if (IsSuccessfulStatusCode(result.status)) {
      setLoading(false)
      generateSuccessAlert(
        'Login Realizado',
        `Seja bem-vindo, ${nameUpperCase(decode_token.nome)}!`,
        3000
      )
      router.push('/chooseCompany')
    }
  }

  async function authorizationCorporation(id: string | number, corp: any) {
    setCorp(corp)
    const result = await UserCorporationService.authorizationCorporation(id)
    const token = result.accessToken
    const clear_token = removeBearer(token)
    const decode_token: any = jwt_decode(clear_token)
    setToken(clear_token)
    setUser(decode_token)
    setIsLegacy('false')
    router.push('/dashboard')
  }

  function removeBearer(value: string) {
    return value.split('Bearer ').join('') ?? ''
  }

  function nameUpperCase(name: string) {
    return name[0].toUpperCase() + name.substring(1)
  }

  return {
    user,
    corp,
    token,
    setCorp,
    loading,
    setUser,
    setToken,
    isLoggedIn,
    logoutUser,
    setLoading,
    corpLogged,
    userLogged,
    setIsLegacy,
    requestLogin,
    clearStorage,
    nameUpperCase,
    authorizationCorporation,
  } as const
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(userSession, import.meta.hot))
}
