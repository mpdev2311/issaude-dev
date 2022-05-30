<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: ['patient'],

  setup(props, { emit }) {
    let patient = ref(props.patient)
    watch(
      () => patient,
      (value) => {
        emit('on-update-patient', value)
      },
      { immediate: true, deep: true }
    )

    return {
      patient,
    }
  },
})
</script>

<template>
  <form>
    <div class="px-4 py-4 flex-auto">
      <div class="mt-2 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-2">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Tipo certidão </label>
          <div class="mt-1">
            <select
              type="text"
              name="uf"
              id="uf"
              autocomplete="uf"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              v-model="patient.tipo_certidao"
            >
              <option v-bind:value="'ÓBITO'">ÓBITO</option>
              <option v-bind:value="'NASCIMENTO'">NASCIMENTO</option>
              <option v-bind:value="'CASAMENTO'">CASAMENTO</option>
              <option v-bind:value="'CASAMENTO COM AVERBAÇÃO'">CASAMENTO COM AVERBAÇÃO</option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="numero_termo_registro" class="block text-sm font-medium text-gray-700">
            Termo
          </label>
          <div class="mt-1">
            <input
              type="text"
              v-model="patient.numero_termo_registro"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> N° Livro </label>
          <div class="mt-1">
            <input
              type="number"
              v-model="patient.numero_livro_registro"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> N° Folha </label>
          <div class="mt-1">
            <input
              type="number"
              v-model="patient.numero_folha_registro"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Data emissão </label>
          <div class="mt-1">
            <input
              type="date"
              v-model="patient.emissao_certidao"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Nome Cartório </label>
          <div class="mt-1">
            <input
              type="text"
              v-model="patient.nome_cartorio"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="uf" class="block text-sm font-medium text-gray-700">
            Cartao Nacional Saude
          </label>
          <div class="mt-1">
            <input
              type="text"
              v-model="patient.cartao_nacional"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Data de Obito </label>
          <div class="mt-1">
            <input
              type="date"
              v-model="patient.data_obito"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="uf" class="block text-sm font-medium text-gray-700">
            Titulo de Eleitor
          </label>
          <div class="mt-1">
            <input
              type="text"
              v-model="patient.titulo_eleitor"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Seção </label>
          <div class="mt-1">
            <input
              type="text"
              v-model="patient.secao_titulo_eleitor"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Zona </label>
          <div class="mt-1">
            <input
              type="text"
              v-model="patient.zona_titulo_eleitor"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
