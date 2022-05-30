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
                  <!--  v-if="patient.id !== 0" -->
                  <div>
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
                            {{ healthPlan.nome }}
                          </p>
                          <p class="text-sm font-medium text-white-500 group-hover:text-gray-300">
                            Registro: {{ healthPlan.id }}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="">
                    <div class="mt-0 align-text-top text-lg text-gray-400 font-semibold"></div>
                    <div class="mt-8">
                      <div v-show="step === 1">
                        <div
                          class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight"
                        >
                          Cadastro de planos
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class=" ">
                    <div class="align-text-top m-2 text-right right-8"></div>
                  </div>
                </div>
              </div>
              <!-- /Top Navigation -->

              <!-- Step Content -->
              <div class="py-2">
                <div class="h-full w-full px-5 py-1" v-show="step === 1">
                  <form class="">
                    <div class="py-1 flex-auto">
                      <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="px-4 flex-auto">
                          <div class="pt-1">
                            <div
                              class="mt-4 grid grid-cols-1 gap-y-1 gap-x-8 sm:grid-cols-6 space-y-1"
                            >
                              <div class="mt-1">
                                <div class="sm:col-span-3">
                                  <label
                                    for="first_name"
                                    class="block text-sm font-medium text-gray-700"
                                  >
                                    Convênio
                                  </label>
                                  <div>
                                    <Finder
                                      :id_object="healthPlan.id_convenio"
                                      :object_name="healthPlan.nome_convenio"
                                      v-bind:data="providers"
                                      v-bind:selectedHandle="onSelectChange"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="sm:col-span-2">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Plano nome
                                </label>
                                <div class="mt-1">
                                  <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.nome"
                                  />
                                </div>
                              </div>

                              <div class="sm:col-span-4">
                                <label for="uf" class="block text-sm font-medium text-gray-700">
                                  Tabelas
                                </label>
                              </div>

                              <div class="sm:col-span-3 px-5">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Medicamento
                                </label>
                                <div class="mt-1">
                                  <select
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.id_tabela_med"
                                  >
                                    <option :value="0">selecione</option>
                                    <option
                                      v-for="i in tableNames"
                                      :key="i"
                                      v-show="i.id_tipo == 1"
                                      :value="i.id"
                                    >
                                      {{ i.codigo }} - {{ i.descri }}
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div class="sm:col-span-3 px-5">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Material
                                </label>
                                <div class="mt-1">
                                  <select
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.id_tabela_mat"
                                  >
                                    <option :value="0">selecione</option>
                                    <option
                                      v-for="i in tableNames"
                                      :key="i"
                                      v-show="i.id_tipo == 3"
                                      :value="i.id"
                                    >
                                      {{ i.codigo }} - {{ i.descri }}
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div class="sm:col-span-3 px-5">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Taxas
                                </label>
                                <div class="mt-1">
                                  <select
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.id_tabela_tx"
                                  >
                                    <option :value="0">selecione</option>
                                    <option
                                      v-for="i in tableNames"
                                      :key="i"
                                      v-show="i.id_tipo == 4"
                                      :value="i.id"
                                    >
                                      {{ i.codigo }} - {{ i.descri }}
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div class="sm:col-span-3 px-5">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Honorários
                                </label>
                                <div class="mt-1 mb-3">
                                  <select
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.ch_hon"
                                  >
                                    <option :value="0">selecione</option>
                                    <option
                                      v-for="i in tableNames"
                                      :key="i"
                                      v-show="i.id_tipo == 2"
                                      :value="i.id"
                                    >
                                      {{ i.codigo }} - {{ i.descri }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="py-1 flex-auto">
                      <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="px-4 py-2 flex-auto">
                          <div class="pt-1">
                            <label for="uf" class="block text-sm font-medium text-gray-700">
                              Calculo de honorários
                            </label>

                            <div
                              class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1"
                            >
                              <div class="sm:col-span-1">
                                <label
                                  for="orgao_documento"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Ch Consulta
                                </label>
                                <div class="mt-1">
                                  <input
                                    type="number"
                                    name="orgao_documento"
                                    id="orgao_documento"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.ch_tx"
                                  />
                                </div>
                              </div>

                              <div class="sm:col-span-1">
                                <label
                                  for="orgao_documento"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Ch SADT
                                </label>
                                <div class="">
                                  <input
                                    type="number"
                                    name="orgao_documento"
                                    id="orgao_documento"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.ch_sadt"
                                  />
                                </div>
                              </div>

                              <div class="sm:col-span-1">
                                <label
                                  for="orgao_documento"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Ch HI
                                </label>
                                <div class="">
                                  <input
                                    type="number"
                                    name="orgao_documento"
                                    id="orgao_documento"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.ch_hi"
                                  />
                                </div>
                              </div>

                              <div class="sm:col-span-1">
                                <label
                                  for="orgao_documento"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Prazo de retorno
                                </label>
                                <div class="">
                                  <input
                                    type="number"
                                    name="orgao_documento"
                                    id="orgao_documento"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.retorno"
                                  />
                                </div>
                              </div>

                              <div class="sm:col-span-1">
                                <label
                                  for="orgao_documento"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Us
                                </label>
                                <div class="">
                                  <input
                                    type="number"
                                    name="orgao_documento"
                                    id="orgao_documento"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.ch_us"
                                  />
                                </div>
                              </div>

                              <div class="sm:col-span-1">
                                <label
                                  for="orgao_documento"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Filme
                                </label>
                                <div class="">
                                  <input
                                    type="number"
                                    name="orgao_documento"
                                    id="orgao_documento"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.filme"
                                  />
                                </div>
                              </div>

                              <div class="sm:col-span-2">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Guia de consulta
                                </label>
                                <div class="mt-1">
                                  <select
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.guia_consulta"
                                  >
                                    <option :value="0">selecione</option>
                                    <option
                                      v-for="i in typeGuides"
                                      :key="i"
                                      v-show="i.servico_tipo == 1"
                                      :value="i.id"
                                    >
                                      {{ i.nome }}
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div class="sm:col-span-2">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Guia de procedimento
                                </label>
                                <div class="mt-1">
                                  <select
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.id_tipo_guia_procedimento"
                                  >
                                    <option :value="0">selecione</option>
                                    <option
                                      v-for="i in typeGuides"
                                      :key="i"
                                      v-show="i.servico_tipo == 2"
                                      :value="i.id"
                                    >
                                      {{ i.nome }}
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div class="sm:col-span-2">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Guia de internação
                                </label>
                                <div class="mt-1">
                                  <select
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.id_tipo_guia_internacao"
                                  >
                                    <option :value="0">selecione</option>
                                    <option
                                      v-for="i in typeGuides"
                                      :key="i"
                                      v-show="i.servico_tipo == 3"
                                      :value="i.id"
                                    >
                                      {{ i.nome }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="py-1 flex-auto">
                      <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="px-4 py-2 flex-auto">
                          <label for="uf" class="block text-sm font-medium text-gray-700">
                            Operadora
                          </label>
                          <div class="pt-1">
                            <div
                              class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1"
                            >
                              <div class="sm:col-span-1">
                                <label
                                  for="orgao_documento"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Carência
                                </label>
                                <div class="">
                                  <input
                                    type="number"
                                    name="orgao_documento"
                                    id="orgao_documento"
                                    autocomplete="given-name"
                                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                    v-model="healthPlan.prazo_carencia"
                                  />
                                  <label
                                    for="orgao_documento"
                                    class="block text-sm font-medium text-gray-700"
                                  >
                                    Dias
                                  </label>
                                </div>
                              </div>

                              <div class="mt-1">
                                <label class="">
                                  <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="socio"
                                    :value="healthPlan.suspenso"
                                    v-model="healthPlan.suspenso"
                                    @click="!healthPlan.suspenso"
                                    class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                                  />
                                  Suspenso
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <!-- <Template /> -->
                </div>
              </div>
              <!-- / Step Content -->
            </div>
            <!-- Bottom Navigation -->
            <div v-show="step != 'complete'">
              <div class="mx-auto px-4 py-3 rounded-b-lg text-right sm:px-6 bg-gray-900">
                <div class="flex sm:flex justify-between">
                  <div class="w-2/2 text-right flex sm:flex">
                    <button
                      @click="onCancel()"
                      type="button"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
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
                  <button
                    @click="onSave()"
                    type="button"
                    class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
                  >
                    Salvar
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
              </div>
            </div>
            <!-- / Bottom Navigation https://placehold.co/300x300/e2e8f0/cccccc -->
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
      <!-- show message -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store/store'
import { HealthPlan } from '@core/domain/health-plans/health-plan-model'
import { TableName } from '@core/domain/table-names/table-name-model'
import { TypeGuide } from '@core/domain/type-guides/type-guide-model'
import Finder from '../../../components/finders/Finder.vue'
import { Provider } from '@core/domain/providers/provider-model'

export default defineComponent({
  components: {
    Finder,
  },

  computed: {
    ...mapState(['healthPlan', 'tableNames', 'typeGuides', 'providers']),
    ...mapGetters(['healthPlan', 'tableNames', 'typeGuides', 'providers']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()
    let step = ref<number>(1)

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

    const tableName = ref<TableName>({
      id: 0,
      codigo: '',
      descri: '',
      id_corp: 0,
      id_tipo: 0,
      ativo: true,
      id_user: 0,
      tabela_tipo: '',
      data_gravacao: '',
    })

    const typeGuide = ref<TypeGuide>({
      id: 0,
      nome: '',
      servico_tipo: 0,
      guia_tipo: '',
      ativo: true,
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
    store.dispatch('TABLE_NAMES_STORE_SET_BLANK', tableName.value)
    store.dispatch('TYPE_GUIDES_STORE_SET_BLANK', typeGuide.value)
    store.dispatch('PROVIDER_STORE_SET_BLANK', provider.value)

    onMounted(async () => {
      await store.dispatch('HEALTH_PLAN_STORE_LOAD')
      await store.dispatch('TABLE_NAMES_STORE_LOAD')
      await store.dispatch('TYPE_GUIDES_STORE_LOAD')
      await store.dispatch('PROVIDER_STORE_LOAD')

      if (router.currentRoute.value.params.id !== '0') {
        await store.dispatch('HEALTH_PLAN_STORE_LOAD_BY_ID', router.currentRoute.value.params.id)
      } else {
        await store.dispatch('HEALTH_PLAN_STORE_SET_BLANK', healthPlan.value)
        store.getters.healthPlan.id_convenio = store.getters.selectedItem.id
        store.getters.healthPlan.nome_convenio = store.getters.selectedItem.nome
      }
    })

    const stepPass = () => {
      step.value++
    }

    const onCancel = async () => {
      router.push('/plans')
    }

    const onSelectChange = async (i: any) => {
      await store.dispatch('SELECTED_ITEM_LOAD', i)
      store.getters.healthPlan.id_convenio = store.getters.selectedItem.id
      store.getters.healthPlan.nome_convenio = store.getters.selectedItem.nome
    }

    const onSave = async () => {
      await store.dispatch('HEALTH_PLAN_STORE_SAVE', healthPlan.value)
    }

    return {
      onSave,
      onCancel,
      stepPass,
      step,
      onSelectChange,
    }
  },
})
</script>
