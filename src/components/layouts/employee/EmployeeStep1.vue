<template>
  <form class="">
    <div class="py-2 flex-auto">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-3 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
              <div class="sm:col-span-2">
                <label for="first_name" class="block text-sm font-medium text-gray-700">
                  Nome<span class="text-red-700">*</span>
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="employee.nome"
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
                    v-model="employee.cpf"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id_civil" class="block text-sm font-medium text-gray-700">
                  Estado Civil
                </label>
                <div class="mt-1">
                  <select
                    id="id_civil"
                    name="id_civil"
                    class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.id_civil"
                  >
                    <option v-bind:value="1">Selecione</option>
                    <option v-bind:value="2">Solteiro(a)</option>
                    <option v-bind:value="3">Casado(a)</option>
                    <option v-bind:value="4">Divociado(a)</option>
                    <option v-bind:value="5">Separado(a) Judicialmente</option>
                    <option v-bind:value="6">União Estável</option>
                    <option v-bind:value="7">Viúvo(a)</option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id_raca" class="block text-sm font-medium text-gray-700">
                  Raça/Cor
                </label>
                <div class="mt-1">
                  <select
                    id="id_raca"
                    name="id_raca"
                    class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.id_raca"
                  >
                    <option v-bind:value="0">Selecione</option>
                    <option v-bind:value="1">Branco</option>
                    <option v-bind:value="2">Pardo</option>
                    <option v-bind:value="3">Preto</option>
                    <option v-bind:value="4">Amarelo</option>
                    <option v-bind:value="5">Indígena</option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="sexo" class="block text-sm font-medium text-gray-700"> Sexo </label>
                <div class="mt-1">
                  <select
                    id="sexo"
                    name="sexo"
                    class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.sexo"
                  >
                    <option v-bind:value="''">Selecione</option>
                    <option v-bind:value="'f'">Feminino</option>
                    <option v-bind:value="'m'">Masculino</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-2 flex-auto">
        <div class="pt-1">
          <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
            <div class="sm:col-span-2">
              <label for="first_name" class="block text-sm font-medium text-gray-700">
                Nome da Mãe<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.nome_mae"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="first_name" class="block text-sm font-medium text-gray-700">
                Nome do pai<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.nome_pai"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="first_name" class="block text-sm font-medium text-gray-700">
                Responsável<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.responsavel"
                />
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
                  v-model="employee.data_nasc"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="first_name" class="block text-sm font-medium text-gray-700">
                Município de Nascimento<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.naturalidade"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="naturalidade_uf" class="block text-sm font-medium text-gray-700">
                UF<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <select
                  id="naturalidade_uf"
                  name="naturalidade_uf"
                  class="bg-gray-200 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  v-model="employee.naturalidade_uf"
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
              <label for="nacionalidade" class="block text-sm font-medium text-gray-700">
                Nacionalidade<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="nacionalidade"
                  id="nacionalidade"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.nacionalidade"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="first_name" class="block text-sm font-medium text-gray-700">
                País de Origem<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.pais_origem"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="first_name" class="block text-sm font-medium text-gray-700">
                Data de Entrada no Brasil
              </label>
              <div class="mt-1">
                <input
                  type="date"
                  pattern="\d{4}-\d{1,2}-\d{1,2}"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.data_entrada_brasil"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-2 flex-auto">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-3 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
              <!-- Select -->
              <div class="sm:col-span-2">
                <label for="id_escolaridade" class="block text-sm font-medium text-gray-700">
                  Frequenta Escola<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <select
                    id="id_escolaridade"
                    name="id_escolaridade"
                    class="mt-1 bg-gray-200 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.escola"
                  >
                    <option v-bind:value="true">Sim</option>
                    <option v-bind:value="false">Não</option>
                  </select>
                </div>
              </div>

              <!-- Select -->
              <div class="sm:col-span-2">
                <label for="escola" class="block text-sm font-medium text-gray-700">
                  Escolaridade<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <select
                    id="escola"
                    name="escola"
                    class="mt-1 bg-gray-200 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.id_escolaridade"
                  >
                    <option v-bind:value="1">Ensino Fundamental</option>
                    <option v-bind:value="2">Ensino Medio</option>
                    <option v-bind:value="3">Ensino Superior</option>
                    <option v-bind:value="4">Ensino Fundamental Incompleto</option>
                    <option v-bind:value="5">Ensino Medio Incompleto</option>
                    <option v-bind:value="6">Ensino Superior Incompleto</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-2 flex-auto">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-3 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
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
                    v-model="employee.rg"
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
                    v-model="employee.orgao_documento"
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
                    v-model="employee.uf_documento"
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
                    v-model="employee.data_documento"
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
                    v-model="employee.complemento_documento"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-1 flex-auto">
      <!-- <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Dados Bancários</h6> -->
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-1 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6 space-y-1">
              <div class="sm:col-span-6">
                <label for="obs" class="block text-sm font-medium text-gray-700"> Obs: </label>
                <div class="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="1"
                    class="xl:w-full shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="employee.obs"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="obs" class="font-bold text-gray-800 block text-sm">
                  Situação do Cadastro
                </label>
                <fieldset class="mt-2 relative z-0 w-full p-px mb-5">
                  <div class="block pt-3 pb-2 space-x-4">
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="do_corpo_clinico"
                        @click="checkboxValidate()"
                        :value="employee.particular"
                        v-model="employee.particular"
                        class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                      />
                      <span class="">Encerrado</span>
                    </label>
                  </div>
                  <span class="text-sm text-red-600 hidden" id="error"
                    >Option has to be selected</span
                  >
                </fieldset>
              </div>
            </div>
            <!-- <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-2">   
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
export default defineComponent({
  props: [],
  components: {},
  computed: {
    ...mapState(['employee']),
    ...mapGetters(['employee']),
  },
  beforeCreate: function () {
    this.store = useStore(key)
  },
  setup(props) {
    onMounted(async () => {})

    return {}
  },
})
</script>
