<template>
  <form class="">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-1 flex-auto">
        <div class="pt-1">
          <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
            <div class="sm:col-span-3">
              <label for="cep" class="block text-sm font-medium text-gray-700">
                CEP<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  @keyup="getAddressData()"
                  type="text"
                  name="nome"
                  id="nome"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.cep"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="cod_ibge" class="block text-sm font-medium text-gray-700">
                Cód. IBGE
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.cod_ibge"
                />
              </div>
            </div>

            <div class="sm:col-span-5">
              <label for="ncasa" class="block text-sm font-medium text-gray-700">
                Endereço<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.endereco"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="ncasa" class="block text-sm font-medium text-gray-700">
                Número<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.ncasa"
                />
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="ncasa" class="block text-sm font-medium text-gray-700">
                Complemento
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.complemento_end"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="tipo_endereco" class="block text-sm font-medium text-gray-700">
                Tipo<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <select
                  type="text"
                  name="tipo_endereco"
                  id="tipo_endereco"
                  autocomplete="tipo_endereco"
                  class="bg-gray-200 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  v-model="employee.tipo_endereco"
                >
                  <option v-bind:value="'0'">Selecione</option>
                  <option v-bind:value="'Avenida'">Avenida</option>
                  <option v-bind:value="'Rua'">Rua</option>
                  <option v-bind:value="'Parque'">Parque</option>
                  <option v-bind:value="'Praça'">Praça</option>
                  <option v-bind:value="'Quadra'">Quadra</option>
                  <option v-bind:value="'Vila'">Vila</option>
                  <option v-bind:value="'Bloco'">Bloco</option>
                  <option v-bind:value="'Fazenda'">Fazenda</option>
                  <option v-bind:value="'Apartamento'">Apartamento</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="bairro" class="block text-sm font-medium text-gray-700">
                Bairro<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="bairro"
                  id="bairro"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.bairro"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="cidade" class="block text-sm font-medium text-gray-700">
                Cidade<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="employee.cidade"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="uf" class="block text-sm font-medium text-gray-700">
                UF<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <select
                  type="text"
                  name="uf"
                  id="uf"
                  autocomplete="uf"
                  class="bg-gray-200 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  v-model="employee.uf"
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
          </div>

          <!-- <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-14">   
                    <div class="sm:col-span-6">
                    </div> 
                    <div class="sm:col-span-6">
                    </div> 
                     <div class="sm:col-span-6">
                    </div>    
                     <div class="sm:col-span-6">
                    </div>                          
                  </div> -->
        </div>
      </div>
    </div>
    <div class="py-1 flex-auto">
      <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Contatos</h6>
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-2 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
              <div class="sm:col-span-3">
                <label for=" e_mail" class="block text-sm font-medium text-gray-700">
                  E_mail<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <input
                    type="email"
                    name=" e_mail"
                    id=" e_mail"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="employee.e_mail"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="first_name" class="block text-sm font-medium text-gray-700">
                  Residencial<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <input
                    type="tel"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="employee.tel_residencial"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="first_name" class="block text-sm font-medium text-gray-700">
                  Comercial<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <input
                    type="tel"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="employee.tel_outro"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="celular" class="block text-sm font-medium text-gray-700">
                  Celular
                </label>
                <div class="mt-1">
                  <input
                    type="tel"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="employee.celular"
                  />
                </div>
              </div>
              <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-13">
                <div class="sm:col-span-6"></div>
                <div class="sm:col-span-6"></div>
                <div class="sm:col-span-6"></div>
                <div class="sm:col-span-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import axios from 'axios'
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
    let getAddressData = async () => {
      await axios
        .get(`https://viacep.com.br/ws/${store.getters.employee.cep}/json/`)
        .then((response) => {
          let data = response.data
          store.getters.employee.bairro = data.bairro
          store.getters.employee.cidade = data.localidade
          store.getters.employee.endereco = data.logradouro
          store.getters.employee.uf = data.uf
          store.getters.employee.cod_ibge = data.ibge
        })
    }
    return {
      getAddressData,
    }
  },
})
</script>
