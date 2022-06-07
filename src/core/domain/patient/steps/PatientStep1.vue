<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import Combobox from '@components/combobox/Combobox.vue'

export default defineComponent({
  props: ['patient', 'patients', 'organizacoesDocumentos', 'estados'],
  components: {
    Combobox,
  },

  setup(props, { emit }) {
    let patient = ref(props.patient)
    watch(
      () => patient,
      (value) => {
        emit('on-update-patient', value)
      },
      { immediate: true, deep: true }
    )

    const searchPatient = async (name: string) => {
      if (name.length < 2) return
      emit('on-search-patient', name)
    }

    return {
      searchPatient,
      patient,
    }
  },
})
</script>

<template>
  <form v-if="patient">
    <div class="px-4 py-2 flex-auto">
      <div class="mt-0 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-1" v-if="patient.id">
          <label for="id" class="block text-sm font-medium text-gray-700"> Prontuário </label>
          <div class="mt-1">
            <input
              disabled
              type="number"
              name="id"
              id="id"
              autocomplete="given-name"
              v-model="patient.id"
              class="w-full xl:w-40 bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="prontuario_antigo" class="block text-sm font-medium text-gray-700">
            Prontuário Antigo
          </label>
          <div class="mt-1">
            <input
              type="number"
              name="prontuario_antigo"
              id="prontuario_antigo"
              autocomplete="given-name"
              class="w-full xl:w-40 bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.prontuario_antigo"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="id" class="block text-sm font-medium text-gray-700"> Sexo </label>
          <select
            v-model="patient.sexo"
            id="patient_sexo"
            name="patient_sexo"
            autocomplete="patient_sexo"
            placeholder="Selecione"
            class="mt-1 max-w-5xl block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
          >
            <option v-bind:value="'M'">Masculino</option>
            <option v-bind:value="'F'">Feminino</option>
          </select>
        </div>
        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Nascimento </label>
          <div class="mt-1">
            <input
              type="date"
              v-model="patient.data_nasc"
              pattern="\d{4}-\d{1,2}-\d{1,2}"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-1 pt-4 px-4 self-center">
          <label>
            <input
              type="checkbox"
              name="checkbox"
              id="recem_nascido"
              v-model="patient.recem_nascido"
              class="mr-2 text-gray-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-gray-600"
            />
            <span class="text-gray-800">Recem Nascido</span>
          </label>
        </div>
        <div class="sm:col-span-1">
          <label for="cpf" class="block text-sm font-medium text-gray-700"> CPF </label>
          <div class="mt-1">
            <input
              type="text"
              name="cpf"
              id="cpf"
              autocomplete="cpf"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.cpf"
            />
          </div>
        </div>
        <div class="sm:col-span-6">
          <div>
            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-1">
              <div class="flex flex-col row-span-3 col-span-1">
                <label for="nome_documento" class="block text-sm font-medium text-gray-700">
                  Imagem
                </label>
                <div class="text-center self-center">
                  <img
                    class="profile-img"
                    src="http://www.ccta.ufpb.br/labeet/contents/acervos/categorias/cordofones/udecra/sem-imagem.jpg/@@images/image.jpeg"
                    alt=""
                  />
                  <a class="mt-2" href="#">Adicionar imagem</a>
                </div>
              </div>
              <div class="row-span-2 col-span-3">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                  <div>
                    <label for="nome_documento" class="block text-sm font-medium text-gray-700">
                      Nome
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="nome_documento"
                        id="nome_documento"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="patient.nome_documento"
                        @focusout="patient.nome = patient.nome_documento"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="nome" class="block text-sm font-medium text-gray-700">
                      Nome Social
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="nome"
                        id="nome"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="patient.nome"
                      />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                  <div>
                    <label for="nome_mae" class="block text-sm font-medium text-gray-700">
                      Nome da mãe
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="nome_mae"
                        id="nome_mae"
                        autocomplete="nome_mae"
                        class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="patient.nome_mae"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="nome_pai" class="block text-sm font-medium text-gray-700">
                      Nome do pai
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="nome_pai"
                        id="nome_pai"
                        autocomplete="nome_pai"
                        class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="patient.pai"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
            Responsável
          </label>
          <Combobox
            :options="patients ?? []"
            label="nome"
            @change-search="searchPatient"
            v-model="patient.id_responsavel"
            hidden-icon
          />
        </div>
        <div class="sm:col-span-1">
          <label for="registro_ans" class="block text-sm font-medium text-gray-700">
            N° documento
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="registro_ans"
              id="registro_ans"
              autocomplete="given-name"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.rg"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Orgão origem </label>
          <div class="mt-1">
            <select
              v-model="patient.organizacao_documento"
              id="organizacao_documento"
              name="organizacao_documento"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :selected="patient.organizacao_documento"
            >
              <option v-for="item in organizacoesDocumentos" :key="item" v-bind:value="{ ...item }">
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Estado Orgão </label>
          <div class="mt-1">
            <select
              v-model="patient.estado_documento"
              id="estado_documento"
              name="estado_documento"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :selected="patient.estado_documento"
            >
              <option v-for="item in estados" :key="item" v-bind:value="{ ...item }">
                {{ item.sigla }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Emissao </label>
          <div class="mt-1">
            <input
              type="date"
              v-model="patient.data_documento"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
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
              autocomplete="complemento_documento"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.complemento_documento"
            />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="obs" class="block text-sm font-medium text-gray-700"> Observação </label>
          <div class="mt-1">
            <input
              type="text"
              name="obs"
              id="obs"
              autocomplete="off"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.obs"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.profile-img {
  max-height: 75px;
}
</style>
