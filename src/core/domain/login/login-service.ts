import { axios } from '@core/request'
import { AxiosInstance } from 'axios'
import router from '@src/router'
import qs from 'qs'

export class LoginService {
  public static loggout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('corp')
    localStorage.removeItem('is_legacy')
  }

  public static async login(user: { name: string; password: string }): Promise<any> {
    const { post } = axios as AxiosInstance

    return await post('/authorization', {
      nome: user.name,
      senha: user.password,
    }).then((response: any) => {
      return { ...response.data, status: response.status }
    })
  }

  public static async sso(): Promise<any> {
    const { post } = axios as AxiosInstance

    const urlServer = 'https://issaude.solutions/auth/realms/is-sso/protocol/openid-connect/token'

    return await post(
      urlServer,
      qs.stringify({
        grant_type: 'password',
        client_id: 'is-sso',
        client_secret: 'e01213d7-3d31-4343-990d-e52f0d71f526',
        username: 'contato@issaude.solutions',
        password: '$pw=@issaude',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      }
    ).then(async (response: any) => {
      if (response.status === 401) {
        await router.push('/')
      } else {
        if (response.data) {
          await localStorage.setItem('is_legacy', 'true')
          await localStorage.setItem('token', await response.data.access_token)
          await router.push('/health_professionals')
        }
      }
    })
  }
}
