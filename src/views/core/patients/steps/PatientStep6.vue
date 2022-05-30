<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Combobox from '../../../../components/combobox/Combobox.vue'

export default defineComponent({
  props: ['patient', 'escolaridades', 'cbos', 'estados'],
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
        <div class="sm:col-span-3">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Escolaridade </label>
          <div class="mt-1">
            <select
              v-model="patient.escolaridade"
              id="escolaridade"
              name="escolaridade"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option v-for="item in escolaridades" :key="item" v-bind:value="{ ...item }">
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-1 pt-4 px-4 self-center">
          <label>
            <input
              type="checkbox"
              name="escola"
              id="escola"
              v-model="patient.escola"
              class="mr-2 text-gray-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-gray-600"
            />
            <span class="text-gray-800">Frequenta Escola</span>
          </label>
        </div>
        <div class="sm:col-span-2">
          <label for="confir_consulta" class="block text-sm font-medium text-gray-700">
            Confirmar Agendamento
          </label>
          <div class="mt-1">
            <select
              id="confir_consulta"
              name="confir_consulta"
              class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              v-model="patient.confir_consulta"
            >
              <option v-bind:value="1">Contato Pessoal</option>
              <option v-bind:value="2">Por SMS</option>
              <option v-bind:value="3">Por Email</option>
              <option v-bind:value="4">Por Gravação via Central Telefônica</option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="cargo" class="block text-sm font-medium text-gray-700"> Profissao </label>
          <div class="mt-1">
            <input
              type="text"
              name="cargo"
              id="cargo"
              autocomplete="cargo"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.cargo"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="cbo" class="block text-sm font-medium text-gray-700"> CBO-R </label>
          <div class="mt-1">
            <select
              v-model="patient.cbo"
              id="cbo"
              name="cbo"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option v-for="item in cbos" :key="item" v-bind:value="{ ...item }">
                {{ item.descricao }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="cpts" class="block text-sm font-medium text-gray-700">
            Nr. Carteira Trabalho
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="cpts"
              id="cpts"
              v-model="cpts"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> UF Emissao </label>
          <div class="mt-1">
            <select
              v-model="patient.estado_ctps"
              id="estado_ctps"
              name="estado_ctps"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option v-for="item in estados" :key="item" v-bind:value="{ ...item }">
                {{ item.sigla }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> Data Emissao </label>
          <div class="mt-1">
            <input
              type="date"
              v-model="patient.emissao_ctps"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="serie_ctps" class="block text-sm font-medium text-gray-700"> Serie </label>
          <div class="mt-1">
            <input
              type="text"
              name="serie_ctps"
              id="serie_ctps"
              autocomplete="serie_ctps"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.serie_ctps"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="n_pis" class="block text-sm font-medium text-gray-700"> PIS </label>
          <div class="mt-1">
            <input
              type="text"
              name="n_pis"
              id="n_pis"
              autocomplete="n_pis"
              class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.n_pis"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
