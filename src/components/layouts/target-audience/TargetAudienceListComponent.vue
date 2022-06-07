<template>
  <div>
    <h3 class="text-gray-700 text-2xl font-semibold">Cadastro de Publico Alvo</h3>

    <div class="mt-4 flex flex-col sm:flex-row">
      <div class="flex">
        <div class="relative">
          <select
            class="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Mosrar 5 resultados</option>
            <option>Mostrar 10 resultados</option>
            <option>Mostrar 20 resultados</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          ></div>
        </div>
        <div class="block relative mt-4 sm:mt-0">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
              <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
              ></path>
            </svg>
          </span>
          <input
            @change="onFilter"
            placeholder=""
            v-model="search"
            class="appearance-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <button class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-5">
        <span class="flex justify-end px-4 py-0">
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
          PDF
        </span>
      </button>
      <button
        class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-5 rounded-r"
      >
        <span class="flex justify-end px-4 py-0">
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
          Excel
        </span>
      </button>
    </div>
    <div class="mt-4">
      <div class="mt-6">
        <div class="bg-white shadow rounded-md overflow-hidden my-6">
          <table class="text-left w-full border-collapse">
            <thead class="border-b">
              <tr>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  ID
                </th>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  DESCRIÇÃO
                </th>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Editar
                </th>
                <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in targetAudiences" :key="i" class="hover:bg-gray-200">
                <td class="py-4 px-6 border-b text-gray-700 text-lg">
                  {{ i.id }}
                </td>
                <td class="py-4 px-6 border-b text-gray-500">
                  {{ i.descricao }}
                </td>
                <td class="py-4 px-8 border-b text-gray-700 text-lg">
                  <button
                    @click="onEdit(i.id)"
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

          <!-- show message -->
          <div
            v-if="showMessage"
            class="flex justify-center px-4 py-3 bg-gray-50 text-right sm:px-6"
          >
            {{ messageShow }}
            <a href="#" @click="onCloseMessage"
              ><svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                /></svg
            ></a>
          </div>
          <!-- show message -->

          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900"></span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                @click="previusPage"
                class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-4 rounded-l"
              >
                Anterior
              </button>
              <button
                @click="nextPage"
                class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-4 rounded-r"
              >
                Proxima
              </button>
            </div>
          </div>
          <div class="flex justify-end px-2 py-3 bg-gray-50 rounded-b-lg text-right sm:px-0">
            <button
              @click="onCreate()"
              type="button"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-3"
            >
              Criar novo
              <svg
                class="h-5 w-10"
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
import { defineComponent, ref, onMounted, onBeforeUpdate, toRef } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'

export default defineComponent({
  components: {},

  computed: {
    ...mapState(['targetAudiences']),
    ...mapGetters(['targetAudiences']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()

    onMounted(async () => {
      await store.dispatch('TARGET_AUDIENCE_STORE_LOAD')
    })

    const onEdit = (id) => {
      router.push(`/target-audience/${id}`)
    }

    const onDelete = async (i) => {
      await store.dispatch('TARGET_AUDIENCE_STORE_DELETE_BY_ID', i.id)
    }

    const onCreate = () => {
      router.push('/target-audience/0')
    }

    return {
      onCreate,
      onEdit,
      onDelete,
    }
  },
})
</script>
