<template>
  <form class="">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-3 flex-auto">
        <div class="pt-1">
          <div class="mt-0 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
            <div class="sm:col-span-6">
              <label for="registro_ans" class="block text-sm font-medium text-gray-700">
                Registro
              </label>
              <div class="mt-1">
                <input
                  disabled
                  type="text"
                  name="registro_ans"
                  id="registro_ans"
                  autocomplete="given-name"
                  class="w-full xl:w-40 bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-200 rounded-md"
                  v-model="position.id"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="nome" class="block text-sm font-medium text-gray-700">
                Nome<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  autocomplete="given-name"
                  class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="position.nome"
                />
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
import { key, store } from '@core/store'
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'
export default defineComponent({
  props: [],
  components: {
    PlusIconSolid,
  },
  computed: {
    ...mapState(['position']),
    ...mapGetters(['position']),
  },
  beforeCreate: function () {
    this.store = useStore(key)
  },
  setup(props) {
    onMounted(async () => {
      await store.dispatch('POSITIONS_STORE_LOAD')
    })
    return {}
  },
})
</script>
