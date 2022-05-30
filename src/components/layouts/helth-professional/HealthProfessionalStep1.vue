<template>
  <form class="">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-1 flex-auto">
        <div class="pt-1">
          <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
            <!-- <div class="sm:col-span-3">
            <label for="registro_ans" class="block text-sm font-medium text-gray-700">
            Registro
            </label>
            <div class="mt-1">
              <input disabled type="text" name="registro_ans" id="registro_ans" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="healthProfessional.id">
            </div>
          </div> -->

            <div class="sm:col-span-4">
              <label for="nome" class="block text-sm font-medium text-gray-700">
                Profissional<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  autocomplete="given-name"
                  class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.nome"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="apelido" class="block text-sm font-medium text-gray-700">
                Nome Social
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="apelido"
                  id="apelido"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.apelido"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="first_name" class="block text-sm font-medium text-gray-700">
                RG<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.rg"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="orgao_documento" class="block text-sm font-medium text-gray-700">
                Órgão<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="orgao_documento"
                  id="orgao_documento"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.orgao_documento"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="uf_documento" class="block text-sm font-medium text-gray-700">
                UF<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <select
                  id="uf_documento"
                  name="uf_documento"
                  class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  v-model="healthProfessional.uf_documento"
                >
                  <option value=""></option>
                  <option v-bind:value="'AC'">Acre</option>
                  <option v-bind:value="'AL'">Alagoas</option>
                  <option v-bind:value="'AP'">Amapá</option>
                  <option v-bind:value="'AM'">Amazonas</option>
                  <option v-bind:value="'BA'">Bahia</option>
                  <option v-bind:value="'CE'">Ceará</option>
                  <option v-bind:value="'DF'">Distrito Federal</option>
                  <option v-bind:value="'ES'">Espírito Santo</option>
                  <option v-bind:value="'GO'">Goiás</option>
                  <option v-bind:value="'MA'">Maranhão</option>
                  <option v-bind:value="'MT'">Mato Grosso</option>
                  <option v-bind:value="'MS'">Mato Grosso do Sul</option>
                  <option v-bind:value="'MG'">Minas Gerais</option>
                  <option v-bind:value="'PA'">Pará</option>
                  <option v-bind:value="'PB'">Paraíba</option>
                  <option v-bind:value="'PR'">Paraná</option>
                  <option v-bind:value="'PE'">Pernambuco</option>
                  <option v-bind:value="'PI'">Piauí</option>
                  <option v-bind:value="'RJ'">Rio de Janeiro</option>
                  <option v-bind:value="'RN'">Rio Grande do Norte</option>
                  <option v-bind:value="'RS'">Rio Grande do Sul</option>
                  <option v-bind:value="'RO'">Rondônia</option>
                  <option v-bind:value="'RR'">Roraima</option>
                  <option v-bind:value="'SC'">Santa Catarina</option>
                  <option v-bind:value="'SP'">São Paulo</option>
                  <option v-bind:value="'SE'">Sergipe</option>
                  <option v-bind:value="'TO'">Tocantins</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="data_documento" class="block text-sm font-medium text-gray-700">
                Data de Emissão
              </label>
              <div class="mt-1">
                <input
                  type="date"
                  pattern="\d{4}-\d{1,2}-\d{1,2}"
                  name="data_documento"
                  id="data_documento"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.data_documento"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="complemento_documento" class="block text-sm font-medium text-gray-700">
                Complemento
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="complemento_documento"
                  id="complemento_documento"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.complemento_documento"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="form.nome_mae" class="block text-sm font-medium text-gray-700">
                Nome da Mãe<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="form.nome_mae"
                  id="form.nome_mae"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.nome_mae"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="cpf" class="block text-sm font-medium text-gray-700">
                CPF<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                  placeholder=""
                  type="text"
                  name="cpf"
                  id="cpf"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.cpf"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="sexo" class="block text-sm font-medium text-gray-700"> Sexo </label>
              <div class="mt-1">
                <select
                  id="sexo"
                  name="sexo"
                  class="mt-1 block w-full py-2 px-3 bg-gray-200 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  v-model="healthProfessional.sexo"
                >
                  <option v-bind:value="''">Selecione</option>
                  <option v-bind:value="'Masculino'">Masculino</option>
                  <option v-bind:value="'Feminino'">Feminino</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="data_nasc" class="block text-sm font-medium text-gray-700">
                Data de Nascimento<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="date"
                  pattern="\d{4}-\d{1,2}-\d{1,2}"
                  name="data_nasc"
                  id="data_nasc"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.data_nasc"
                />
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
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
              <div class="sm:col-span-2">
                <label for="conselho" class="block text-sm font-medium text-gray-700">
                  Conselho<span class="text-red-700">*</span>
                </label>
                <div class="mt-2">
                  <select
                    type="text"
                    name="conselho"
                    id="conselho"
                    autocomplete="conselho"
                    class="mt-1 block w-full py-2 px-3 bg-gray-200 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="healthProfessional.conselho"
                  >
                    <option v-bind:value="'CFF'">CFF</option>
                    <option v-bind:value="'CFN'">CFN</option>
                    <option v-bind:value="'COREN'">COREN</option>
                    <option v-bind:value="'CRAS'">CRAS</option>
                    <option v-bind:value="'CRBM'">CRBM</option>
                    <option v-bind:value="'CREFITO'">CREFITO</option>
                    <option v-bind:value="'CRF'">CRF</option>
                    <option v-bind:value="'CRFA'">CRFA</option>
                    <option v-bind:value="'CRM'">CRM</option>
                    <option v-bind:value="'CRN'">CRN</option>
                    <option v-bind:value="'CRV'">CRV</option>
                    <option v-bind:value="'CRO'">CRO</option>
                    <option v-bind:value="'CRP'">CRP</option>
                    <option v-bind:value="'CRT'">CRT</option>
                    <option v-bind:value="'OUT'">OUT</option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="uf" class="block text-sm font-medium text-gray-700">
                  UF<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <select
                    type="text"
                    name="uf_crm"
                    id="uf_crm"
                    autocomplete="uf_crm"
                    class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="healthProfessional.uf_crm"
                  >
                    <option value=""></option>
                    <option v-bind:value="'AC'">Acre</option>
                    <option v-bind:value="'AL'">Alagoas</option>
                    <option v-bind:value="'AP'">Amapá</option>
                    <option v-bind:value="'AM'">Amazonas</option>
                    <option v-bind:value="'BA'">Bahia</option>
                    <option v-bind:value="'CE'">Ceará</option>
                    <option v-bind:value="'DF'">Distrito Federal</option>
                    <option v-bind:value="'ES'">Espírito Santo</option>
                    <option v-bind:value="'GO'">Goiás</option>
                    <option v-bind:value="'MA'">Maranhão</option>
                    <option v-bind:value="'MT'">Mato Grosso</option>
                    <option v-bind:value="'MS'">Mato Grosso do Sul</option>
                    <option v-bind:value="'MG'">Minas Gerais</option>
                    <option v-bind:value="'PA'">Pará</option>
                    <option v-bind:value="'PB'">Paraíba</option>
                    <option v-bind:value="'PR'">Paraná</option>
                    <option v-bind:value="'PE'">Pernambuco</option>
                    <option v-bind:value="'PI'">Piauí</option>
                    <option v-bind:value="'RJ'">Rio de Janeiro</option>
                    <option v-bind:value="'RN'">Rio Grande do Norte</option>
                    <option v-bind:value="'RS'">Rio Grande do Sul</option>
                    <option v-bind:value="'RO'">Rondônia</option>
                    <option v-bind:value="'RR'">Roraima</option>
                    <option v-bind:value="'SC'">Santa Catarina</option>
                    <option v-bind:value="'SP'">São Paulo</option>
                    <option v-bind:value="'SE'">Sergipe</option>
                    <option v-bind:value="'TO'">Tocantins</option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="crm" class="block text-sm font-medium text-gray-700">
                  Número<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="healthProfessional.crm"
                  />
                </div>
              </div>
              <!-- <div class="sm:col-span-3">
                            <label for="certificado" class="block text-sm font-medium text-gray-700">
                                Especialidade 1<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <select name="primeira_especialidade" id="primeira_especialidade" autocomplete="primeira_especialidade" class="mt-1 bg-gray-200 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    v-model="healthProfessional.primeira_especialidade">
                                     <option v-for="i in specialties" :key="i" :value="i.id" >{{i.nome_especialidade}}</option> 
                                </select>
                            </div>
                        </div> -->

              <div class="sm:col-span-3">
                <label for="id_publico" class="block text-sm font-medium text-gray-700">
                  Especialidade 1<span class="text-red-700">* </span>
                </label>
                <div class="mt-0">
                  <span class="relative z-0 inline-flex shadow-sm rounded-md">
                    <select
                      id="sexo"
                      name="sexo"
                      class="mt-1 block w-full xl:w-96 py-2 px-3 bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      v-model="healthProfessional.primeira_especialidade"
                    >
                      <option v-bind:value="0">Selecione</option>
                      <option v-for="i in specialties" :key="i" :value="i.id">
                        {{ i.nome_especialidade }}
                      </option>
                    </select>
                    <button
                      @click.prevent="
                        onOpenModalEspecialidade(healthProfessional.primeira_especialidade)
                      "
                      type="button"
                      class="mt-1 -ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-green-500 text-sm font-medium text-white hover:bg-green-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <PlusIconSolid class="h-5 w-5" />
                    </button>
                  </span>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="rqe" class="block text-sm font-medium text-gray-700"> RQE </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="healthProfessional.rqe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-1 flex-auto">
      <!-- <h6 class="px-1 py-1 text-gray-700 text-lg font-semibold flex-auto">Profissional</h6> -->
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 flex-auto">
          <div class="pt-0">
            <div class="mt-2 grid grid-cols-1 gap-y-3 gap-x-2 sm:grid-cols-4 space-y-1">
              <div class="sm:col-span-6">
                <label for="uf" class="block text-sm font-medium text-gray-700">
                  Profissional
                </label>
                <fieldset class="relative z-0 w-full p-px mb-5">
                  <div class="block pt-3 pb-2 space-x-4">
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        :value="healthProfessional.socio"
                        v-model="healthProfessional.socio"
                        id="socio"
                        @click="checkboxValidate()"
                        class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                      />
                      Sócio
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        :value="healthProfessional.do_corpo_clinico"
                        v-model="healthProfessional.do_corpo_clinico"
                        id="do_corpo_clinico"
                        @click="checkboxValidate()"
                        class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                      />
                      Do corpo clínico
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        :value="healthProfessional.nao_atende"
                        v-model="healthProfessional.nao_atende"
                        @click="checkboxValidate()"
                        id="nao_atende"
                        class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                      />
                      Não Atende
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        :value="healthProfessional.encaminhador"
                        id="encaminhador"
                        v-model="healthProfessional.encaminhador"
                        @click="checkboxValidate()"
                        class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                      />
                      Encaminhador
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="desativado"
                        :value="healthProfessional.desativado"
                        v-model="healthProfessional.desativado"
                        @click="checkboxValidate()"
                        class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                      />
                      Desativado
                    </label>
                  </div>
                  <span class="text-sm text-red-600 hidden" id="error"
                    >Option has to be selected</span
                  >
                </fieldset>
              </div>
            </div>
            <!-- <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-0">   
                  <div class="sm:col-span-6">
                  </div> 
                  <div class="sm:col-span-6">
                  </div>          
              </div> -->
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { key } from '@core/store/store'
import moment from 'moment'
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'

export default defineComponent({
  props: [],
  components: {
    PlusIconSolid,
  },

  computed: {
    ...mapState(['healthProfessional', 'specialties']),
    ...mapGetters(['healthProfessional', 'specialties']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    onMounted(async () => {})

    const onOpenModalEspecialidade = async (id: number) => {
      window.open('/specialties/' + id, '_blank', 'width=500,height=500, top=100, left=500')
    }

    const formatDate = (date) => {
      return moment(date).format('DD/MM/YYYY')
    }

    return {
      formatDate,
      onOpenModalEspecialidade,
    }
  },
})
</script>
