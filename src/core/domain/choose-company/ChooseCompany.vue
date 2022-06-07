<script type="ts">

import { UserCorporationService } from '@domain/user-corporation/user-corporation-service'
import { defineComponent, ref, onMounted, onBeforeMount } from "vue"
import { useRouter } from "vue-router"
import { userSession } from '@pinia/userSession'

export default defineComponent({
  setup() {
    const useSession = userSession()
    const router = useRouter();
    const user_corp = ref([]);

    onBeforeMount(async() => {
      if(useSession.token === undefined || useSession.token.length == 0) {
        router.push('/')
      }
    })

    onMounted(async () => {
      user_corp.value = [
        ...await UserCorporationService.getAll()
      ]
    });


    async function chooseCompany(id, corp) {
      useSession.authorizationCorporation(id, corp)

    }

    return {
      user_corp,
      chooseCompany
    }
  },

});
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6 p-12">
    <div class="px-6 py-12 max-w-sm w-full bg-white shadow-md rounded-md">
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
            class="px-3 py-5 flex items-center justify-between text-sm"
          >
            <div class="w-0 flex-1 flex items-center">
              <!-- <svg
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
              </svg> -->
              <span class="flex-1 w-0 text-base truncate"> {{ i.id }} - {{ i.nome }} </span>
            </div>
            <div class="ml-4 flex-shrink-0">
              <VButton @click="chooseCompany(i.id, i)" size="md" color="info"> Entrar </VButton>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
