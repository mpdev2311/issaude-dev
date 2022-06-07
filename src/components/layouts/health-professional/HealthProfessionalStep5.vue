<template>
  <div class="py-1 flex-auto">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-1 flex-auto">
        <div class="pt-1">
          <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
            <div class="sm:col-span-4">
              <label for=" e_mail" class="block text-sm font-medium text-gray-700">
                E_mail<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="email"
                  name=" e_mail"
                  id=" e_mail"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.e_mail"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="first_name" class="block text-sm font-medium text-gray-700">
                Telefone<span class="text-red-700">*</span>
              </label>
              <div class="mt-1">
                <input
                  type="tel"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.tel_residencial"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="celular" class="block text-sm font-medium text-gray-700"> Celular </label>
              <div class="mt-1">
                <input
                  type="tel"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="healthProfessional.celular"
                />
              </div>
            </div>
          </div>
          <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-20">
            <div class="sm:col-span-6"></div>
            <div class="sm:col-span-6"></div>
            <div class="sm:col-span-6"></div>
            <div class="sm:col-span-6"></div>
            <div class="sm:col-span-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { key } from '@core/store'
export default defineComponent({
  props: [],
  components: {},

  computed: {
    ...mapState(['healthProfessional']),
    ...mapGetters(['healthProfessional']),
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
