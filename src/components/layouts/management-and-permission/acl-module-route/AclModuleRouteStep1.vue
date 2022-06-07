<template>
  <form class="">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-1 flex-auto">
        <div class="pt-1">
          <label for="registro_ans" class="text-2xl font-large text-gray-700"> Módulos </label>

          <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
            <div class="sm:col-span-1">
              <label for="registro_ans" class="mt-1 block text-sm font-medium text-gray-700">
                Registro
              </label>
              <div class="mt-1">
                <input
                  disabled
                  type="text"
                  name="registro_ans"
                  id="registro_ans"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="registro_ans" class="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="registro_ans"
                  id="registro_ans"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-1"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3 bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-1 flex-auto">
        <div class="pt-1">
          <label for="registro_ans" class="text-2xl font-large text-gray-700"> Rotas </label>

          <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
            <div class="sm:col-span-1">
              <label for="registro_ans" class="mt-1 block text-sm font-medium text-gray-700">
                Registro
              </label>
              <div class="mt-1">
                <input
                  disabled
                  type="text"
                  name="registro_ans"
                  id="registro_ans"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="registro_ans" class="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="registro_ans"
                  id="registro_ans"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="registro_ans" class="block text-sm font-medium text-gray-700">
                Apelido
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="registro_ans"
                  id="registro_ans"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="registro_ans" class="block text-sm font-medium text-gray-700">
                Url
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="registro_ans"
                  id="registro_ans"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <div class="bg-white shadow rounded-md overflow-hidden my-6">
                <table class="text-left w-full border-collapse">
                  <thead class="border-b">
                    <tr>
                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Nome
                      </th>
                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Apelido
                      </th>

                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Url
                      </th>
                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Remover
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover:bg-gray-200">
                      <td class="py-4 px-8 border-b text-gray-700 text-lg">{{}}</td>
                      <td class="py-4 px-8 border-b text-gray-700 text-lg">{{}}</td>
                      <td class="py-4 px-8 border-b text-gray-700 text-lg">{{}}</td>
                      <td class="py-4 px-8 border-b text-gray-700 text-lg">
                        <button
                          class="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-600 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="sm:col-span-1">
              <div class="w-2/2 text-right">
                <button
                  class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-green-600 hover:bg-green-500 font-medium"
                >
                  Adicionar rota
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
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
import { key } from '@core/store'
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'

export default defineComponent({
  props: [],
  components: {
    PlusIconSolid,
  },

  computed: {
    ...mapState([]),
    ...mapGetters([]),
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
