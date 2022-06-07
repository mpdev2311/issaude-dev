<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: ['patient', 'estados', 'etinias', 'racas', 'estadosCivis', 'religioes', 'countries'],
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
        <div class="sm:col-span-1 pt-4 self-center">
          <label>
            <input
              type="checkbox"
              name="eletronico"
              id="eletronico"
              v-model="patient.eletronico"
              class="mr-2 text-gray-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-gray-600"
            />
            <span class="text-gray-800">Pront. Eletronico</span>
          </label>
        </div>
        <div class="sm:col-span-1 pt-4 self-center">
          <label>
            <input
              type="checkbox"
              name="esterno"
              id="esterno"
              v-model="patient.esterno"
              class="mr-2 text-gray-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-gray-600"
            />
            <span class="text-gray-800">Paciente Externo</span>
          </label>
        </div>
        <div class="sm:col-span-3">
          <label for="complemento_documento" class="block text-sm font-medium text-gray-700">
            Natural de
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="natural_de"
              id="natural_de"
              autocomplete="natural_de"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.natural_de"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="estado_naturalidade" class="block text-sm font-medium text-gray-700">
            UF Naturalidade
          </label>
          <div class="mt-1">
            <select
              v-model="patient.estado_naturalidade"
              id="estado_naturalidade"
              name="estado_naturalidade"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option v-for="item in estados" :key="item" v-bind:value="{ ...item }">
                {{ item.sigla }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="complemento_documento" class="block text-sm font-medium text-gray-700">
            Nacionalidade
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="nacionalidade"
              id="nacionalidade"
              autocomplete="nacionalidade"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.nacionalidade"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Pais de Origem </label>
          <div class="mt-1">
            <select
              v-model="patient.pais"
              id="id_pais"
              name="id_pais"
              autocomplete="id_pais"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option v-for="item in countries" :key="item" v-bind:value="{ ...item }">
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700">
            Data de Entrada no Brasil
          </label>
          <div class="mt-1">
            <input
              type="date"
              v-model="patient.data_entrada_brasil"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Raça </label>
          <div class="mt-1">
            <select
              v-model="patient.raca"
              id="raca"
              name="raca"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :selected="patient.raca"
            >
              <option v-for="item in racas" :key="item" v-bind:value="{ ...item }">
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Etinia </label>
          <div class="mt-1">
            <select
              v-model="patient.etinia"
              id="etinia"
              name="etinia"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option v-for="item in etinias" :key="item" v-bind:value="{ ...item }">
                {{ item.descri }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Estado Civil </label>
          <div class="mt-1">
            <select
              v-model="patient.estado_civil"
              id="estado_civil"
              name="estado_civil"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option v-for="item in estadosCivis" :key="item" v-bind:value="{ ...item }">
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Religião </label>
          <div class="mt-1">
            <select
              v-model="patient.religiao"
              id="religiao"
              name="religiao"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option v-for="item in religioes" :key="item" v-bind:value="{ ...item }">
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
