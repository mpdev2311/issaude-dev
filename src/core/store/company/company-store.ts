import CompanyService from '@core/services/companies/company-service'
import { Company } from '@core/domain/Company/company-model'
import router from '../../../router'
import { IsSuccessfulStatusCode } from '../../helpers/HttpResponseHelpers'

export default {
  state: () => ({
    companies: [],
    company: {
      id: 0,
      nome: '',
      cnpj: '',
      crm: 0,
      cnes: '',
      endereco: '',
      tl: '',
      numero: '',
      complemento: '',
      municipio: '',
      uf: '',
      cod_ibge: '',
      cep: '',
      tel_comercial: '',
      tel_residencial: '',
      tel_celular: '',
      tel_outro: '',
      id_cidade: 0,
      id_bairro: 0,
      fatura: true,
      logomarca: '',
      e_mail: '',
      smtp: '',
      senha: '',
      smtp_porta: 0,
      e_mail_destino: '',
      ism: true,
      apelido: '',
      id_corp: 0,
      contato: '',
      id_user: 0,
      cidade: '',
      bairro: '',
      cf_df: '',
      numero_nf_inicial: 0,
      numero_nf_final: 0,
      validade_nf: '',
      inscri_estadual: '',
      cod_unidade_federacao: 0,
      ch_consulta: 0,
      ch_sadt: 0,
      ch_hi: 0,
      ch_us: 0,
      retorno: 0,
      site: '',
      regime_tributario: 0,
      cnae: '',
      inscricao_municipal: '',
      enviar_nfe: true,
      certificado: '',
      senha_certificado: '',
      ativo: true,
      csc: '',
      id_responsavel: 0,
      certificado_serial: '',
      validade_certificado: '',
      certificado_revogado: true,
      certificado_nome: '',
      data_gravacao: '',
      carga_tributaria: 0,
      modelo_exames: 0,
      modelo_venda: 0,
      json_google: '',
      mp_access_token: '',
      mp_client_id: '',
      mp_client_secret: '',
      mp_public_key: '',
    },
  }),

  getters: {
    companies: (state) => state.companies,
    company: (state) => state.company,
  },

  mutations: {
    COMPANY_STORE_LOAD: (state, payload) => (state.companies = payload),
    COMPANY_STORE_LOAD_BY_ID: (state, payload) => (state.company = payload),
  },

  actions: {
    COMPANY_STORE_LOAD: async ({ commit }) => {
      await commit('COMPANY_STORE_LOAD', await CompanyService.getAll())
    },

    COMPANY_STORE_SET_BLANK: async ({ commit }, company: Company) => {
      await commit('COMPANY_STORE_LOAD_BY_ID', company)
    },

    COMPANY_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await CompanyService.getById(id)

      await commit('COMPANY_STORE_LOAD_BY_ID', data)
    },

    COMPANY_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await CompanyService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('COMPANY_STORE_LOAD')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'COMPANY salva removida sucesso!')
        }
      })
    },

    COMPANY_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.company.id > 0)
        await CompanyService.update(getters.company).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('COMPANY_STORE_LOAD_BY_ID', getters.company.id)
            router.push('/companies')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Company salva com sucesso!')
          }
        })
      else
        await CompanyService.create(getters.company).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/companies')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Company salva com sucesso!')
          }
        })
    },
  },
}
