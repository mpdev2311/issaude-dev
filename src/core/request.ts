import Axios, { AxiosStatic } from 'axios'
import router from '@src/router'
import { InjectionKey } from 'vue'
import { generateErrorAlert } from '@core/helpers/alert'
import { userSession } from '@pinia/userSession'

const key: InjectionKey<AxiosStatic> = Symbol()

const axios = Axios.create({
  baseURL: 'https://api.app3.issaude.online',
})

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    const bearer = 'Bearer'
    const header = { Authorization: `${bearer} ${token}` }
    config.headers = token ? header : {}
    return await config
  },
  (error) => {
    if (error.status === 401) router.push('/')
  }
)

axios.interceptors.response.use(
  async (response) => {
    if (response.status === 401) router.push('/')
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      generateErrorAlert('Erro Sistema', 'Usuário não conectado!')
      userSession().logoutUser()
      router.push('/')
    }

    if (error.response && error.response.status === 404) {
      generateErrorAlert('Erro Sistema', 'O recurso solicitado não existe!')
    }
    if (error.response && error.response.status === 400)
      generateErrorAlert('Erro Sistema', error.response.data.message)
    return error
  }
)

export { axios, key }
