<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">Unidade de medidas</h3>

    <div class="mt-4">
      <h4 class="text-gray-600">Cadastros de unidade de medida</h4>

      <div class="mt-6">
        <div class="bg-white shadow rounded-md overflow-hidden my-6">
          <table class="text-left w-full border-collapse">
            <thead class="border-b">
              <tr>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Unidade
                </th>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Codigo da unidade
                </th>

                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Codigo da unidade
                </th>

                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Codigo da unidade
                </th>

                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Editar
                </th>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Excluir
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(i, index) in [{}]" :key="index" class="hover:bg-gray-200">
                <td class="py-4 px-6 border-b text-gray-700 text-lg">
                  <input
                    type="text"
                    class="form-input w-full px-12 py-2 appearance-none rounded-md focus:border-indigo-600"
                  />
                </td>
                <td class="py-4 px-6 border-b text-gray-500">
                  <input
                    type="text"
                    class="form-input w-full px-12 py-2 appearance-none rounded-md focus:border-indigo-600"
                  />
                </td>

                <td class="py-4 px-6 border-b text-gray-500">
                  <input
                    type="text"
                    class="form-input w-full px-12 py-2 appearance-none rounded-md focus:border-indigo-600"
                  />
                </td>

                <td class="py-4 px-6 border-b text-gray-500">
                  <input
                    type="text"
                    class="form-input w-full px-12 py-2 appearance-none rounded-md focus:border-indigo-600"
                  />
                </td>

                <td class="py-4 px-8 border-b text-gray-700 text-lg">
                  <button
                    @click="onEdit(i)"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-500 focus:outline-none"
                  >
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </td>
                <td class="py-4 px-8 border-b text-gray-700 text-lg">
                  <button
                    @click="onDelete(i)"
                    class="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-600 focus:outline-none"
                  >
                    <svg
                      class="h-4 w-4"
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
                </td>
              </tr>
            </tbody>
          </table>

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              @click="onCreate()"
              type="button"
              class="space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Salvar unidades
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTableData } from '@domain/hooks/useTableData'
export default defineComponent({
  setup() {
    const { simpleTableData, paginatedTableData, wideTableData } = useTableData()
    return {
      simpleTableData,
      paginatedTableData,
      wideTableData,
    }
  },
})
</script>
