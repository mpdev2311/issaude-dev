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
                  class="
                    w-full
                    xl:w-40
                    bg-gray-200
                    shadow-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    block
                    sm:text-sm
                    border border-gray-200
                    rounded-md
                  "
                  v-model="sector.id"
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
                  class="
                    shadow-sm
                    focus:ring-indigo-500
                    bg-gray-200
                    focus:border-indigo-500
                    block
                    w-full
                    sm:text-sm
                    border border-gray-200
                    rounded-md "
                  v-model="sector.nome"
                />
              </div>
            </div>  
            <div class="sm:col-span-2">
                <label for="tipo_endereco" class="block text-sm font-medium text-gray-700">
                Nível de Previlégio<span class="text-red-700">*</span>
                </label>
                <div class="mt-2">
                    <select  type="text" name="tipo_endereco" id="tipo_endereco" autocomplete="tipo_endereco" class="bg-gray-200 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                    v-model="sector.id_nivelPrevilegio">
                        <option  v-bind:value="'0'">Selecione</option>                        
                    </select>
                </div>                          
            </div>
            

            <div class="sm:col-span-3">
              <fieldset class="mt-2 relative z-0 w-full p-px mb-5">
                <div class="block pt-3 pb-2 space-x-4">
                  <label>
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="do_corpo_clinico"
                      @click="checkboxValidate()"
                      :value="sector.ativo"
                      v-model="sector.ativo"
                      class="
                        mr-2
                        text-orange-600
                        border-2 border-gray-300
                        focus:border-gray-300
                        focus:ring-orange-600
                      "
                    />
                    <span class="font-bold text-gray-800">Ativo</span>
                  </label>
                  <!-- :value="healthProfessional.socio"
                    v-model="healthProfessional.socio" -->
                </div>
                <span class="text-sm text-red-600 hidden" id="error"
                  >Option has to be selected</span
                >
              </fieldset>
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
import { key, store } from '../../../../src/core/store/store'
import moment from 'moment'
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'
export default defineComponent({
  props: [],
  components: {
    PlusIconSolid,
  },
  computed: {
    ...mapState(['sector']),
    ...mapGetters(['sector']),
  },
  beforeCreate: function () {
    this.store = useStore(key)
  },
  setup(props) {
    onMounted(async () => {
      await store.dispatch('SECTORS_STORE_LOAD')
    })
    return {}
  },
})
</script>