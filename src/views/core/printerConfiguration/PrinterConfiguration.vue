<script type="ts">

import { defineComponent, ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { key, store } from "@core/store/store"
import {mapGetters, mapState, useStore } from 'vuex'

export default defineComponent({

  computed:{
    ...mapState([]),
    ...mapGetters([]),
  },

  beforeCreate : function() {
    this.store = useStore(key)
  },


  setup() {

    const router = useRouter();
    const printers = ref([]);

    const printerConfiguration = ref({
      printer_name: "",
      printer_idenfier: "",
      id_usuario : 0
    })

    onMounted(async () => {

      const user = JSON.parse(localStorage.getItem("user")) || {};
      const { printer, computer_name } = router.currentRoute._rawValue.query;
      printerConfiguration.value.printer_idenfier = computer_name
      printerConfiguration.value.id_usuario = user.id || 1


      if(printer && Array.isArray(printer))
        printer.forEach(c => {
          printers.value.push({
            name: c,
            selected: false
          })
        });
    });

    async function change(i){
      printers.value.forEach(c => c.selected = false)
      i.selected = true
      printerConfiguration.value.printer_name = i.name
    }

    async function saveConfiguration() {
        await this.store.dispatch('PRINTER_SAVE', printerConfiguration.value)
    }

    return {
      printers,
      saveConfiguration,
      change
    }
  },

});
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <img width="250" src="../../../assets/logo-default-01.png" />
      </div>
      <form class="mt-4" @submit.prevent="login">
        <h2
          class="mt-2 bg-white px-6 pt-12 pb-10 text-center text-2xl font-display text-gray-900 sm:-mx-6"
        >
          Selecione uma impressora
        </h2>
        <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
          <li
            v-for="(i, index) in printers"
            :key="index"
            class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
          >
            <div class="w-0 flex-1 flex items-center">
              <svg
                class="h-6 w-6 text-teal-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span class="ml-2 flex-1 w-0 truncate">
                {{ i.name }}
              </span>
            </div>
            <div class="ml-4 flex-shrink-0">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  @change="change(i)"
                  v-model="i.selected"
                  class="form-radio"
                  name="selected"
                  :value="i.selected"
                />
              </label>
            </div>
          </li>
        </ul>

        <div class="mt-6">
          <button
            type="button"
            @click="saveConfiguration()"
            class="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500"
          >
            Salvar configurações
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
