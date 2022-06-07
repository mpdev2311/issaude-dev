import { Employee } from './employee-model'
import EmployeesService from './employee-service'
import router from '@src/router'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

export default {
  state: () => ({
    employees: [],
    employee: {
      id: 0,
      ativo: true,
      cnpj: '',
      id_corp: 0,
      nome: '',
      endereco: '',
      cep: '',
      prazo_entrega: 0,
      contato: '',
      tel: '',
      id_user: 0,
      cidade: '',
      bairro: '',
      data_gravacao: '',
      pagamento_em: 0,
      prazo_faturar: 0,
      prazo_revisao: 0,
      registro_convenio: '',
      id_empresa: 0,
      imagem: '',
      particular: false,
      versao_tiss: 0,
      tamanho_matricula: 0,
      registro_ans: '',
      fonte_pagadora: '',
      id_tipo_prestador: 10,
      idantigo: 0,
      rg: '',
      crm: '',
      uf: '',
      celular: '',
      imposto_hm: 0,
      produtividade: 0,
      primeira_especialidade: 0,
      conselho: '',
      do_corpo_clinico: false,
      encaminhador: false,
      socio: false,
      data_nasc: '',
      desconto: 0,
      e_mail: '',
      nao_atende: false,
      cofins: 0,
      iss: 0,
      ir: 0,
      cll: 0,
      apelido: '',
      cpf: '',
      cargo: '',
      salario: 0,
      id_setor: 0,
      tel_residencial: '',
      tel_outro: '',
      sexo: '',
      responsavel: '',
      data_admissao: '',
      cpts: '',
      livro_registro: '',
      ramal: '',
      data_demissao: '',
      obs: '',
      cf_df: '',
      banco: '',
      id_cargo: 0,
      ncasa: '',
      proibir_fin: false,
      hablimit: false,
      senha: '',
      id_carga_horaria: 0,
      tipo_retorno_consulta: 0,
      n_pis: '',
      exige_cid: false,
      cid_consulta: '',
      obs_consulta: '',
      cns: '',
      cnes: '',
      quant_consulta: 0,
      cod_ibge: '',
      agencia: '',
      conta: '',
      segunda_especialidade: 0,
      terceira_especialidade: 0,
      icms: 0,
      ipi: 0,
      outras_taxas: 0,
      pis: 0,
      sus: false,
      inscricao: '',
      tipo_de_contruinte: '',
      tipo_contribuinte: '',
      p_autorizar: 0,
      uf_crm: '',
      foto: '',
      livro_ctps: '',
      id_civil: 0,
      data_entrada_brasil: '',
      data_documento: '',
      nacionalidade: '',
      pais_origem: '',
      serie_ctps: '',
      emissao_ctps: '',
      emissao_certidao: '',
      titulo_eleitor: '',
      zona_titulo_eleitor: '',
      secao_titulo_eleitor: '',
      nome_pai: '',
      uf_ctps: '',
      complemento_documento: '',
      orgao_documento: '',
      tipo_endereco: '',
      uf_documento: '',
      id_escolaridade: 0,
      tipo_certidao: '',
      naturalidade: '',
      naturalidade_uf: '',
      id_raca: 0,
      cbo: '',
      escola: false,
      nome_cartorio: '',
      numero_livro_registro: '',
      numero_folha_registro: '',
      numero_termo_registro: '',
      nome_mae: '',
      numero_cartorio: '',
      id_cbo: 0,
      identificar_executante: false,
      id_banco: 0,
      complemento_end: '',
      uf_estados: '',
      rqe: '',
      observacao_funcionario: '',
      repetir_guia: false,
      repetir_senha: false,
      elegibilidade: '',
      id_idioma: '',
      id_publico: '',
      id_abordagem: '',
    },
  }),

  getters: {
    employees: (state) => state.employees,
    employee: (state) => state.employee,
  },

  mutations: {
    EMPLOYEES_STORE_LOAD: (state, payload) => (state.employees = payload),
    EMPLOYEES_STORE_LOAD_BY_ID: (state, payload) => (state.employee = payload),
  },

  actions: {
    EMPLOYEES_STORE_LOAD: async ({ commit }) => {
      await commit('EMPLOYEES_STORE_LOAD', await EmployeesService.getAll())
    },

    EMPLOYEES_STORE_SET_BLANK: async ({ commit }, employee: Employee) => {
      await commit('EMPLOYEES_STORE_LOAD_BY_ID', employee)
    },

    EMPLOYEES_STORE_LOAD_GET: async ({ commit }, employee: Employee) => {
      await commit('EMPLOYEES_STORE_LOAD', employee)
    },

    EMPLOYEES_STORE_LOAD_BY_ID: async ({ commit }, id: number) => {
      const { data } = await EmployeesService.getById(id)
      //
      await commit('EMPLOYEES_STORE_LOAD_BY_ID', data)
    },

    EMPLOYEES_STORE_DELETE_BY_ID: async ({ commit, dispatch }, id: number) => {
      await EmployeesService.deleteById(id).then(async (response) => {
        if (IsSuccessfulStatusCode(response.status)) {
          await dispatch('EMPLOYEES_STORE_LOAD')
          router.push('/employees')
          await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Funcionário removido sucesso!')
        }
      })
    },

    EMPLOYEES_STORE_SAVE: async ({ getters, dispatch }) => {
      if (getters.employee.id > 0)
        await EmployeesService.update(getters.employee).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            await dispatch('EMPLOYEES_STORE_LOAD_BY_ID', getters.employee.id)
            router.push('/employees')
            await dispatch(
              'MESSAGE_STORE_SUCCESS_PUSH',
              'Cadastro de funcionário salva com sucesso!'
            )
          }
        })
      else
        await EmployeesService.create(getters.employee).then(async (response) => {
          if (IsSuccessfulStatusCode(response.status)) {
            router.push('/employees')
            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de convênios salva com sucesso!')
          }
        })
    },
  },
}
