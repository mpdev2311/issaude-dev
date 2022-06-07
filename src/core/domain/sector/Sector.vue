<template>
  <div class="h-screen">
    <div>
      <div
        class="mt-19 bg-gray-300 hover:bg-gray-200 py-5 px-5 border-b-4 border-gray-400 hover:border-gray-500 rounded"
      >
        <!-- animation transform translate-x-4 translate-y-15 scale-10 rotate-5 -->
        <div class="bg-white rounded-t-md shadow-md rounded-b-lg">
          <div class="w-full">
            <div class="">
              <!-- Top Navigation -->
              <div class="border-b-2 px-4 py-4 text-white bg-gray-900 rounded-t-lg">
                <div
                  class="text-2xl align-text-top font-bold text-center text-white bg-gray-900 leading-tight"
                >
                  <span class="inline-block align-text-top"> Setor</span>
                </div>
              </div>

              <div class="py-2">
                <div class="px-5 py-2">
                  <SectorComponent />
                </div>
              </div>

              <div class="border-b-2 px-3 py-4 text-white bg-gray-900 rounded-b-lg">
                <div class="flex flex-wrap md:items-center md:justify-between">
                  <div class="w-11/12 text-right">
                    <button
                      @click="onSave()"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-green-600 hover:bg-green-500 font-medium"
                    >
                      Salvar
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

                  <div class="w-3/2 text-right">
                    <button
                      @click="onCancel()"
                      type="button"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-red-600 hover:bg-red-500 font-medium"
                    >
                      Fechar
                      <svg
                        class="h-5 w-5"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="{ 'bg-red-200': bgRed, 'bg-green-200': bgGreen }"
        v-if="showMessage"
        class="flex justify-center px-4 py-3 text-right sm:px-6 bg-green-200"
      >
        Usuário salvo com sucesso!
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import SectorComponent from '@components/layouts/sector/SectorComponent.vue'
import { Sector } from './sector-model'
export default defineComponent({
  components: {
    SectorComponent,
  },
  computed: {
    ...mapState(['sector']),
    ...mapGetters(['sector']),
  },
  beforeCreate: function () {
    this.store = useStore(key)
  },
  setup(props) {
    const router = useRouter()
    let step = ref<number>(1)
    const sector = ref<Sector>({
      id: 0,
      ativo: true,
      nome: '',
      id_nivelPrevilegio: 0,
    })
    store.dispatch('SECTORS_STORE_SET_BLANK', sector.value)
    onMounted(async () => {
      const { id } = router.currentRoute.value.params
      if (id !== '0') {
        await store.dispatch('SECTORS_STORE_LOAD_BY_ID', id)
      } else {
        await store.dispatch('SECTORS_STORE_SET_BLANK', sector.value)
      }
    })
    const onCancel = async () => {
      router.push('/sectors')
    }
    const onSave = async () => {
      await store.dispatch('SECTORS_STORE_SAVE')
    }
    return {
      onSave,
      onCancel,
      step,
    }
  },
})
</script>
