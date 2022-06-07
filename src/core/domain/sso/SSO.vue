<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <!-- <NotificationAlert /> -->
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <img width="100" src="../../../assets/logo-default-02.png" />
      </div>
      <form class="mt-4" @submit.prevent="login">
        <div class="mt-6">
          <button
            type="submit"
            class="py-2 px-4 text-center bg-green-500 rounded-md w-full text-white text-sm hover:bg-green-500"
          >
            Entrar com Single Sign-On
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="ts">

import { defineComponent } from "vue"
import { LoginService } from '@domain/login/login-service'
import { useStore } from "vuex"
import { key } from "@core/store"

export default defineComponent({

    components: {
    },

    beforeCreate : function() {
        this.store = useStore(key)
    },

    setup() {

      const login = async () => {
        await LoginService.sso()
      }

      return {
        login
      }
    },
});
</script>
