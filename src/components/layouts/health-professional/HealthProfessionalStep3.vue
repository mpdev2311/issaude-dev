<template>
  <form class="">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-1 flex-auto">
        <div class="pt-1">
          <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
            <div class="sm:col-span-4">
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
                  v-model="healthProfessional.nome_pai"
                />
              </div>
            </div>

            <!-- Select -->
            <div class="sm:col-span-2">
              <label for="id_raca" class="block text-sm font-medium text-gray-700">
                Raça/Cor
              </label>
              <div class="mt-1">
                <select
                  id="id_raca"
                  name="id_raca"
                  class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  v-model="healthProfessional.id_raca"
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

            <div class="sm:col-span-3">
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
                  v-model="healthProfessional.nacionalidade"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
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
                  v-model="healthProfessional.naturalidade"
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
                  v-model="healthProfessional.naturalidade_uf"
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

            <div class="sm:col-span-3">
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
                  v-model="healthProfessional.pais_origem"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
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
                  v-model="healthProfessional.data_entrada_brasil"
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
              <!-- Select -->
              <div class="sm:col-span-3">
                <label for="id_escolaridade" class="block text-sm font-medium text-gray-700">
                  Frequenta Escola<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <select
                    id="id_escolaridade"
                    name="id_escolaridade"
                    class="mt-1 bg-gray-200 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="healthProfessional.escola"
                  >
                    <option v-bind:value="true">Sim</option>
                    <option v-bind:value="false">Não</option>
                  </select>
                </div>
              </div>

              <!-- Select -->
              <div class="sm:col-span-3">
                <label for="escola" class="block text-sm font-medium text-gray-700">
                  Escolaridade<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <select
                    id="escola"
                    name="escola"
                    class="mt-1 bg-gray-200 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="healthProfessional.id_escolaridade"
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

    <div class="py-1 flex-auto">
      <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Dados Bancários</h6>
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-2 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
              <div class="sm:col-span-2">
                <label for="banco" class="block text-sm font-medium text-gray-700">
                  Banco<span class="text-red-700">*</span>
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="banco"
                    id="banco"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="healthProfessional.banco"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="agencia" class="block text-sm font-medium text-gray-700">
                  Agência<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="agencia"
                    id="agencia"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="healthProfessional.agencia"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="conta" class="block text-sm font-medium text-gray-700">
                  Conta<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="conta"
                    id="conta"
                    autocomplete="given-name"
                    class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="healthProfessional.conta"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="obs" class="block text-sm font-medium text-gray-700"> Obs: </label>
                <div class="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="1"
                    class="max-w-lg shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="healthProfessional.obs"
                  />
                </div>
              </div>
            </div>
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-11">
              <div class="sm:col-span-6"></div>
              <div class="sm:col-span-6"></div>
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
import { key } from '@core/store'
export default defineComponent({
  props: [],
  components: {},

  computed: {
    ...mapState(['healthProfessional']),
    ...mapGetters(['healthProfessional']),
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
