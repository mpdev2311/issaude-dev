<template>
  <div class="">
    <form>
      <div class="py-1 flex-auto">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-2 flex-auto">
            <div class="pt-1">
              <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
                <div class="sm:col-span-1">
                  <label for="imposto_hm" class="block text-sm font-medium text-gray-700">
                    IR
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="imposto_hm"
                      id="imposto_hm"
                      autocomplete="given-name"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.ir"
                    />
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="produtividade" class="block text-sm font-medium text-gray-700">
                    Cll
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="produtividade"
                      id="produtividade"
                      autocomplete="given-name"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.cll"
                    />
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="iss" class="block text-sm font-medium text-gray-700"> Iss </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="iss"
                      id="iss"
                      autocomplete="given-name"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.iss"
                    />
                  </div>
                </div>
                <div class="sm:col-span-1">
                  <label for="ir" class="block text-sm font-medium text-gray-700"> ICMS </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="ir"
                      id="ir"
                      autocomplete="given-name"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.icms"
                    />
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="cll" class="block text-sm font-medium text-gray-700"> Cofins </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="cll"
                      id="cll"
                      autocomplete="given-name"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.cofins"
                    />
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="cofins" class="block text-sm font-medium text-gray-700"> Ipi </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="cofins"
                      id="cofins"
                      autocomplete="given-name"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.ipi"
                    />
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="cofins" class="block text-sm font-medium text-gray-700"> Pis </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="cofins"
                      id="cofins"
                      autocomplete="given-name"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.pis"
                    />
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="cofins" class="block text-sm font-medium text-gray-700">
                    Outras Tx<span class="text-red-700">*</span>
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="cofins"
                      id="cofins"
                      autocomplete="given-name"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.cofins"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-1 flex-auto">
        <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Dados de Contato</h6>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-2 flex-auto">
            <div class="pt-1">
              <div class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
                <div class="sm:col-span-2">
                  <label for="nome" class="block text-sm font-medium text-gray-700"> Nome </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      autocomplete="given-name"
                      class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.nome"
                    />
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="nome" class="block text-sm font-medium text-gray-700">
                    Telefone<span class="text-red-700">*</span>
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      autocomplete="given-name"
                      class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.tel"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="nome" class="block text-sm font-medium text-gray-700"> Email </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      autocomplete="given-name"
                      class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.e_mail"
                    />
                  </div>
                </div>
                <div class="sm:col-span-1">
                  <label for="nome" class="block text-sm font-medium text-gray-700">
                    Prazo de entrega(dias)<span class="text-red-700">*</span>
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      autocomplete="given-name"
                      class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.prazo_entrega"
                    />
                  </div>
                </div>
                <div class="sm:col-span-6">
                  <label for="obs" class="block text-sm font-medium text-gray-700"> Obs: </label>
                  <div class="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="1"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="provider.obs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-4">
        <div class="sm:col-span-6"></div>
        <div class="sm:col-span-6"></div>
        <div class="sm:col-span-6"></div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { mapGetters, mapState, useStore, mapMutations } from 'vuex'
import { key, store } from '@core/store/store'
import { useRouter } from 'vue-router'
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'

export default defineComponent({
  props: [],

  components: {
    PlusIconSolid,
  },

  methods: {
    ...mapMutations(['provider']),
  },

  computed: {
    ...mapState(['provider']),
    ...mapGetters(['provider']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()

    onMounted(async () => {})

    return {}
  },
})
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
