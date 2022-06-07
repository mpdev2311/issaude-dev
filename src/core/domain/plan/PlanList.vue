<template>
  <div>
    <h3 class="text-gray-700 text-2xl font-semibold">Cadastro de planos</h3>

    <div class="mt-4 flex flex-col sm:flex-row">
      <div class="flex">
        <div class="relative">
          <select
            class="mt-1 h-10 rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Mosrar 5 resultados</option>
            <option>Mostrar 10 resultados</option>
            <option>Mostrar 20 resultados</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          ></div>
        </div>
      </div>
      <button class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold px-5">
        <span class="flex justify-end px-4 py-0">
          <svg
            class="h-5 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          PDF
        </span>
      </button>
      <button
        class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold px-5 rounded-r"
      >
        <span class="flex justify-end px-4 py-0">
          <svg
            class="h-5 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Excel
        </span>
      </button>
    </div>

    <div class="mt-4">
      <div class="mt-6">
        <div class="block relative mt-1 ml-2 mr-2 bg-white shadow rounded-lg">
          <label for="uf" class="px-2 mt-1 ml-2 mr-2 block text-sm font-medium text-gray-700">
            Convênios
          </label>
          <Finder
            class="w-60 mt-1 ml-2 mr-2"
            :id_object="healthPlan.id_convenio"
            :object_name="healthPlan.nome_convenio"
            :data="providers"
            :selectedHandle="onSelectChange"
          />
        </div>
        <div class="bg-white shadow rounded-md overflow-hidden my-6">
          <table class="text-left w-full border-collapse">
            <thead class="border-b">
              <tr>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  ID
                </th>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Convênio
                </th>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Plano
                </th>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Editar
                </th>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="i in healthPlans"
                :key="i"
                v-show="
                  healthPlan.nome_convenio == '' || healthPlan.nome_convenio == i.nome_convenio
                "
                class="hover:bg-gray-200"
              >
                <td class="py-4 px-6 border-b text-gray-700 text-lg">
                  {{ i.id }}
                </td>
                <td class="py-4 px-6 border-b text-gray-500">
                  {{ i.nome_convenio }}
                </td>
                <td class="py-4 px-6 border-b text-gray-500">
                  {{ i.nome }}
                </td>
                <td class="py-4 px-8 border-b text-gray-700 text-lg">
                  <button
                    @click="onEdit(i.id)"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-500 focus:outline-none"
                  >
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </td>
                <td class="py-4 px-8 border-b text-gray-700 text-lg">
                  <button
                    @click="onDelete(i)"
                    class="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-600 focus:outline-none"
                  >
                    <svg
                      class="h-4 w-4"
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
                </td>
              </tr>
            </tbody>
          </table>

          <!-- show message -->
          <div
            v-if="showMessage"
            class="flex justify-center px-4 py-3 bg-gray-50 text-right sm:px-6"
          >
            {{ messageShow }}
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
          <!-- show message -->

          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900"></span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                @click="previusPage"
                class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-4 rounded-l"
              >
                Anterior
              </button>
              <button
                @click="nextPage"
                class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-4 rounded-r"
              >
                Proxima
              </button>
            </div>
          </div>
          <div class="flex justify-end px-2 py-3 bg-gray-50 rounded-b-lg text-right sm:px-0">
            <button
              @click="onCreate()"
              type="button"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-3"
            >
              Criar novo
              <svg
                class="h-5 w-10"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapState, useStore } from 'vuex'
import Finder from '@components/finders/Finder.vue'
import { key, store } from '@core/store'
import { Provider } from '@domain/provider/provider-model'
import { HealthPlan } from '@domain/health-plan/health-plan-model'

export default defineComponent({
  components: {
    Finder,
  },

  computed: {
    ...mapState(['healthPlans', 'healthPlan', 'providers']),
    ...mapGetters(['healthPlans', 'healthPlan', 'providers']),
  },

  beforeCreate: function () {
    //@ts-ignore
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()

    const healthPlan = ref<HealthPlan>({
      id: 0,
      nome: '',
      ch_sadt: 0.0,
      ch_hi: 0.0,
      ch_tx: 0.0,
      ch_us: 0.0,
      ch_hon: 0.0,
      retorno: 0,
      id_convenio: 0,
      nome_convenio: '',
      id_tabela_med: 0,
      id_tabela_tx: 0,
      id_tabela_mat: 0,
      guia_consulta: 0,
      filme: 0,
      suspenso: false,
      id_user: 0,
      id_corp: 0,
      prazo_carencia: 0,
      imagem: '',
      id_tabela_amb: 0,
      id_tipo_guia_procedimento: 0,
      ativo: true,
      id_tipo_guia_internacao: 0,
      data_gravacao: '',
      selected: false,
    })

    const provider = ref<Provider>({
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
      id_tipo_prestador: 0,
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

    store.dispatch('HEALTH_PLAN_STORE_SET_BLANK', healthPlan.value)
    store.dispatch('PROVIDER_STORE_SET_BLANK', provider.value)

    onMounted(async () => {
      await store.dispatch('HEALTH_PLAN_STORE_LOAD')
      await store.dispatch('PROVIDER_STORE_LOAD')
    })

    const onSelectChange = async (i) => {
      await store.dispatch('SELECTED_ITEM_LOAD', i)
      store.getters.healthPlan.id_convenio = store.getters.selectedItem.id
      store.getters.healthPlan.nome_convenio = store.getters.selectedItem.nome
    }

    const onEdit = (id) => {
      router.push(`/plans/${id}`)
    }

    const onDelete = async (i) => {
      await store.dispatch('HEALTH_PLAN_STORE_DELETE_BY_ID', i.id)
    }

    const onCreate = async () => {
      if (healthPlan.value.nome_convenio == '') {
        await store.dispatch('MESSAGE_STORE_ERROR_PUSH', 'Selecione um Convênio!')
      } else {
        router.push('/plans/0')
      }
    }

    return {
      onCreate,
      onEdit,
      onDelete,
      onSelectChange,
    }
  },
})
</script>
