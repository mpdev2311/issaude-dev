<script type="ts">

import { UserCorprationService } from '@core/services/user-corporations/user-corporation-service'
import { defineComponent, ref, onMounted } from "vue"
import { useRouter } from "vue-router"

export default defineComponent({
  setup() {

    const router = useRouter();
    const user_corp = ref([]);

    onMounted(async () => {
      user_corp.value = [
        ...await UserCorprationService.getAll()
      ]
    });


    async function chooseCompany(model) {
      await UserCorprationService.setCorporation(model)
      router.push('/dashboard')
    }

    return {
      user_corp,
      chooseCompany
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
          Selecione uma empresa
        </h2>
        <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
          <li
            v-for="(i, index) in user_corp"
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
              <span class="ml-2 flex-1 w-0 truncate"> {{ i.id }}-{{ i.nome }} </span>
            </div>
            <div class="ml-4 flex-shrink-0">
              <button
                @click="chooseCompany(i)"
                class="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-indigo-500 focus:outline-none"
              >
                Entrar
              </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
