<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { getFullAddressByCep } from '@core/helpers/address'

export default defineComponent({
  props: ['patient', 'estados'],

  setup(props, { emit }) {
    let patient = ref(props.patient)
    watch(
      () => patient,
      (value) => {
        emit('on-update-patient', value)
      },
      { immediate: true, deep: true }
    )

    const getAddressData = async () => {
      const cep = patient.value.cep?.toString()
      if (!cep || cep.length < 5) {
        return
      }
      const address = await getFullAddressByCep(cep)
      patient.value.bairro = address.bairro
      patient.value.cidade = address.localidade
      patient.value.endereco = address.logradouro
      patient.value.uf = address.uf
      patient.value.cod_ibge = address.ibge
      const estado = props.estados.find((state) => state.sigla === address.uf)
      if (estado) {
        patient.value.estado = estado
      }
    }

    return {
      getAddressData,
      patient,
    }
  },
})
</script>

<template>
  <form>
    <div class="px-4 py-4 flex-auto">
      <div class="mt-0 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-1">
          <label for="cep" class="block text-sm font-medium text-gray-700">
            Telefone Celular
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="tel_celular"
              id="tel_celular"
              autocomplete="tel_celular"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.tel_celular"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="cep" class="block text-sm font-medium text-gray-700">
            Telefone Residencial
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="tel_residencial"
              id="tel_residencial"
              autocomplete="tel_residencial"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.tel_residencial"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="cep" class="block text-sm font-medium text-gray-700">
            Telefone Comercial
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="tel_comercial"
              id="tel_comercial"
              autocomplete="tel_comercial"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.tel_comercial"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="cep" class="block text-sm font-medium text-gray-700">
            Telefone - Outro
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="tel_outro"
              id="tel_outro"
              autocomplete="tel_outro"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.tel_outro"
            />
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="cep" class="block text-sm font-medium text-gray-700"> CEP </label>
          <div class="mt-2">
            <input
              @keyup="getAddressData()"
              type="text"
              name="nome"
              id="nome"
              autocomplete="given-name"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.cep"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="endereco" class="block text-sm font-medium text-gray-700"> Endereço </label>
          <div class="mt-1">
            <input
              type="text"
              name="endereco"
              id="endereco"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.endereco"
            />
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="cod_ibge" class="block text-sm font-medium text-gray-700"> IBGE </label>
          <div class="mt-1">
            <input
              type="text"
              name="cod_ibge"
              id="cod_ibge"
              autocomplete="ibge"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.cod_ibge"
            />
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="ncasa" class="block text-sm font-medium text-gray-700"> Número </label>
          <div class="mt-1">
            <input
              type="text"
              name="nome"
              id="nome"
              autocomplete="given-name"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.ncasa"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="bairro" class="block text-sm font-medium text-gray-700"> Bairro </label>
          <div class="mt-1">
            <input
              type="text"
              name="bairro"
              id="bairro"
              autocomplete="given-name"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.bairro"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="cidade" class="block text-sm font-medium text-gray-700"> Cidade </label>
          <div class="mt-1">
            <input
              type="text"
              name="cidade"
              id="cidade"
              autocomplete="given-name"
              class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
              v-model="patient.cidade"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="uf" class="block text-sm font-medium text-gray-700"> UF </label>
          <div class="mt-1">
            <select
              v-model="patient.estado"
              id="origin"
              name="origin"
              autocomplete="protudo"
              class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :selected="patient?.estado?.id"
            >
              <option v-for="item in estados" :key="item" v-bind:value="{ ...item }">
                {{ item.sigla }}
              </option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-1">
          <label for="cidade" class="block text-sm font-medium text-gray-700"> Tipo End. </label>
          <div class="mt-1">
            <select
              type="text"
              name="tipo_endereco"
              id="tipo_endereco"
              autocomplete="tipo_endereco"
              class="bg-gray-200 mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              v-model="patient.tipo_endereco"
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
      </div>
    </div>
  </form>
</template>
