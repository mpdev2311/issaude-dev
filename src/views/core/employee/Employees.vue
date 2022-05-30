<template>
  <div class="h-screen">
    <div>
      <NotificationAlert />
      <div
        class="mt-19 bg-gray-300 hover:bg-gray-200 py-5 px-5 border-b-4 border-gray-400 hover:border-gray-500 rounded"
      >
        <!-- animation transform translate-x-4 translate-y-15 scale-10 rotate-5 -->
        <div class="bg-white rounded-t-md shadow-md rounded-b-lg">
          <div class="w-full">
            <!-- inicio step -->
            <div v-show="step === 'complete'"></div>
            <div class="" v-show="step != 'complete'">
              <!-- Top Navigation -->
              <div class="border-b-2 px-4 py-2 text-white bg-gray-900 rounded-t-lg">
                <!-- <div class="uppercase tracking-wide text-xs font-bold text-white bg-gray-900 mb-1 leading-tight" v-text="`Página: ${step} - 6`"></div> -->
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div v-if="employee.id !== 0">
                    <a href="#" class="flex-shrink-0 w-full group block">
                      <div class="flex items-center">
                        <div>
                          <img
                            class="inline-block h-24 w-24 rounded-full"
                            size="lg"
                            shape="rounded-full"
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>

                        <div class="ml-3">
                          <p class="text-lg font-medium text-white group-hover:text-gray-300">
                            {{ employee.apelido }}
                          </p>
                          <p class="text-sm font-medium text-white-500 group-hover:text-gray-300">
                            Registro: {{ employee.id }}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="">
                    <div class="mt-0 align-text-top text-lg text-gray-400 font-semibold">
                      Cadastro de Funcionário
                    </div>
                    <div class="mt-8">
                      <div v-show="step === 1">
                        <div
                          class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight"
                        >
                          DADOS BÁSICOS
                        </div>
                      </div>

                      <div v-show="step === 2">
                        <div
                          class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight"
                        >
                          ENDEREÇO
                        </div>
                      </div>

                      <div v-show="step === 3">
                        <div
                          class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight"
                        >
                          DADOS PROFISSIONAIS
                        </div>
                      </div>
                      <!-- <div v-show="step === 4">
                          <div class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight">DADOS PROFISSIONAIS </div>
                        </div>
                        
                        <div v-show="step === 5">
                          <div class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight">CONTATOS</div>
                        </div> -->
                    </div>
                  </div>

                  <div class=" ">
                    <div class="align-text-top m-2 text-right right-8">
                      <div
                        class="uppercase tracking-wide text-xs font-bold text-white bg-gray-900 leading-tight text-right"
                        v-text="`Página: ${step} - 3`"
                      ></div>
                    </div>
                    <div class="flex items-center md:w-64 mt-10">
                      <div class="w-full bg-white rounded-full mr-2">
                        <div
                          class="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white"
                          :style="'width: ' + parseInt((step / 3) * 100) + '%'"
                        ></div>
                      </div>
                      <div
                        class="text-xs w-10 text-white"
                        v-text="parseInt((step / 3) * 100) + '%'"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Top Navigation -->

              <!-- Step Content -->
              <div class="py-2 bg-gray-50">
                <div class="px-5 py-1" v-show="step === 1">
                  <EmployeeStep1 />
                  <!-- <Template /> -->
                </div>
                <div class="px-5 py-1" v-show="step === 2">
                  <EmployeeStep2 />
                </div>
                <div class="px-5 py-1" v-show="step === 3">
                  <EmployeeStep3 />
                </div>
                <!-- <div class="px-5 py-1" v-show="step === 4">
                    
                       <HealthProfessionalStep4 />
                    </div>
                    <div class="px-5 py-1 " v-show="step === 5">
                        <HealthProfessionalStep5 />
                    </div> -->
              </div>
              <!-- / Step Content -->
              <!-- </div> -->
              <!-- Bottom Navigation -->

              <div class="border-b-2 px-3 py-4 text-white bg-gray-900 rounded-b-lg">
                <div class="flex flex-wrap md:items-center md:justify-between">
                  <div class="w-4/6 text-right">
                    <button
                      v-show="step > 1"
                      @click="step--"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center font-medium text-gray-600 bg-white hover:bg-gray-100"
                    >
                      Anterior
                    </button>
                  </div>

                  <div class="w-2/2 text-right">
                    <button
                      v-show="step < 3"
                      @click="step++"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-green-600 hover:bg-green-500 font-medium"
                    >
                      Próximo
                    </button>

                    <button
                      v-show="step === 3"
                      @click="onSave()"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-green-600 hover:bg-green-500 font-medium"
                    >
                      Salvar
                      <!-- @click="step = 'complete'" -->
                      <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div v-show="step < 3" class="w-2/2 text-right">
                    <button
                      v-show="step < 3"
                      @click="step = 3"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-green-600 hover:bg-green-500 font-medium"
                    >
                      Útimo
                    </button>
                  </div>

                  <div class="w-2/2 text-right">
                    <button
                      @click="onCancel()"
                      type="button"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-red-600 hover:bg-red-500 font-medium"
                    >
                      Fechar
                      <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- fim -->
          </div>
        </div>
      </div>
      <!-- show message -->
      <div
        :class="{ 'bg-red-200': bgRed, 'bg-green-200': bgGreen }"
        v-if="showMessage"
        class="flex justify-center px-4 py-3 text-right sm:px-6 bg-green-200"
      >
        Usuário salvo com sucesso!
        <a href="#" @click="onCloseMessage"
          ><svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            /></svg
        ></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NotificationAlert from '../../../components/alerts/NotificationAlert.vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store/store'
import EmployeeStep1 from '../../../components/layouts/employee/EmployeeStep1.vue'
import EmployeeStep2 from '../../../components/layouts/employee/EmployeeStep2.vue'
import EmployeeStep3 from '../../../components/layouts/employee/EmployeeStep3.vue'
import HealthProfessionalStep4 from '../../../components/layouts/helth-professional/HealthProfessionalStep4.vue'
import HealthProfessionalStep5 from '../../../components/layouts/helth-professional/HealthProfessionalStep5.vue'
import { Employee } from '@core/domain/employee/employee-model'
export default defineComponent({
  components: {
    NotificationAlert,
    EmployeeStep1,
    EmployeeStep2,
    EmployeeStep3,
    HealthProfessionalStep4,
    HealthProfessionalStep5,
  },
  computed: {
    ...mapState(['employee']),
    ...mapGetters(['employee']),
  },
  beforeCreate: function () {
    this.store = useStore(key)
  },
  setup(props) {
    const router = useRouter()
    let step = ref<number>(1)
    const employee = ref<Employee>({
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
    })

    store.dispatch('EMPLOYEES_STORE_SET_BLANK', employee.value)

    onMounted(async () => {
      const { id } = router.currentRoute.value.params
      if (id !== '0') {
        await store.dispatch('EMPLOYEES_STORE_LOAD_BY_ID', id)
      } else {
        await store.dispatch('EMPLOYEES_STORE_SET_BLANK', employee.value)
      }
    })

    const onCancel = async () => {
      router.push('/employees')
    }

    const onSave = async () => {
      await store.dispatch('EMPLOYEES_STORE_SAVE')
    }
    return {
      onSave,
      onCancel,
      step,
    }
  },
})
</script>
