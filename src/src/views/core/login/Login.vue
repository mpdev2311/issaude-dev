<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">

    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <img width="250" src='../../../assets/logo-default-01.png' />
      </div>
      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-gray-700 text-sm">Login</span>
          <input
            type="text"
            class="form-input mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="user.nome"
          />
        </label>
        <label class="block mt-3">
          <span class="text-gray-700 text-sm">Senha</span>
          <input
            type="password"
            class="form-input mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="user.senha"
          />
        </label>
        <div class="flex justify-between items-center mt-4">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-indigo-600" />
              <span class="mx-2 text-gray-600 text-sm">Lembrar-me</span>
            </label>
          </div>
          <div>
            <a
              class="block text-sm fontme text-indigo-700 hover:underline"
              href="#"
              >Perdeu sua senha?</a
            >
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500"
          >
            Entrar no sistema
          </button>
        </div>
      </form>
    </div>
  
  <NotificationAlert />
  </div>
</template>


<script type="ts">

import { defineComponent, ref } from "vue"
import { User } from '../../../core/domain/users/user-model'
import { LoginService } from '../../../core/services/login/login-service'
import NotificationAlert from '../../../components/alerts/NotificationAlert.vue'

export default defineComponent({
    components: { 
      NotificationAlert
    },

    setup() {
      
      const user = ref(new User())
      
      const login = async (model) => {
        await LoginService.login(user.value)
      }
      
      return { 
        user, 
        login 
      }
    },
});
</script>