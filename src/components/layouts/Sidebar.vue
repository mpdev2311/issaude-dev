<style scoped>
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}

.tab {
  font-size: 12px;
}

.tab input:checked ~ .tab-content {
  max-height: 100vh;
}

.tab input:checked + label {
  border-color: #6574cd;
}

.tab label::before {
  line-height: 1;
}

.tab label::after {
  float: right;
  right: 0;
  top: 0;
  display: block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1;
  font-size: 1.1rem;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}

.tab input[type='checkbox'] + label::after {
  content: '+';
  font-weight: bold;
  border-width: 2px;
  border-radius: 9999px;
  color: #fff;
}

.tab input[type='radio'] + label::after {
  content: '\25BE';
  font-weight: bold;
  border-width: 1px;
  border-radius: 9999px;
  border-color: #b8c2cc;
}

.tab input[type='checkbox']:checked + label::after {
  transform: rotate(315deg);
  color: #f8fafc;
}

.tab input[type='radio']:checked + label::after {
  transform: rotateX(180deg);
  color: #f8fafc;
}
</style>

<template>
  <div class="flex">
    <div
      :class="menu.menuIsOpen ? 'block' : 'hidden'"
      @click="menu.handleMenu(false)"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>

    <div
      :class="menu.menuIsOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-10">
        <div class="flex items-center">
          <img width="80" height="50" src="../../assets/logo-default-02.png" />
          <span>
            <b class="text-white text-2xl mx-1 font-semibold">IS Saúde</b>
            <i><small class="text-green-600">v.2.0</small></i>
          </span>
        </div>
      </div>

      <div class="flex items-center justify-center mt-1">
        <div class="flex items-center">
          <span>
            <br /><small class="text-green-600">Usuário conectado: </small
            ><small class="text-white text-center" v-if="user.user.length > 0">
              {{ user.userLogged.nome.length > 10 ? user.nameUpperCase(user.userLogged.nome).substring(0, 9) + ' ...' : user.nameUpperCase(user.userLogged.nome) }}</small>
            <br /><small class="text-green-600">Corporação: </small
            ><small class="text-white text-center" v-if="user.corp.length > 0">
              {{ user.corpLogged.nome.length > 10 ? user.corpLogged.nome.substr(0, 9) + ' ...' : user.corpLogged.nome }}</small
            >
          </span>
        </div>
      </div>

      <div class="w-full mt-15 mt-4 md:w-9/9 mx-auto">
        <div class="shadow-md">
          <div v-for:="i in menu.modules" class="tab w-full overflow-hidden border-l-4">
            <input
              class="absolute opacity-0"
              :id="[`tab-multi-one-${i.nome}`]"
              type="checkbox"
              name="tabs1"
            />
            <label
              class="block p-5 leading-normal cursor-pointer text-white"
              :for="[`tab-multi-one-${i.nome}`]"
            >
              {{ i.nome }}
            </label>
            <div class="tab-content overflow-auto border-l-2 border-indigo-500 leading-normal">
              <nav class="w-full">
                <router-link
                  v-for:="e in i.rotas"
                  class="flex items-center duration-200 py-2 px-6"
                  :class="[
                    $route.name === e.rota
                      ? 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100'
                      : 'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
                  ]"
                  :to="`${e.rota}`"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span class="mx-4">{{ e.nome }}</span>
                </router-link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { onMounted } from 'vue'
import { userSession } from '@pinia/userSession'
import { storeMenu } from '@pinia/storeMenu'

const user = userSession()
const menu = storeMenu()

onMounted(async () => {
  if(user.user.length > 0 && user.user !== undefined) {
    await menu.getMenuList()
  }
})
</script>
