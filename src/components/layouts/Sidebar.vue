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
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
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
            ><small class="text-white text-center">
              {{ user.nome.length > 10 ? user.nome.substr(0, 9) + ' ...' : user.nome }}</small
            >
            <br /><small class="text-green-600">Corporação: </small
            ><small class="text-white text-center">
              {{ corp.nome.length > 10 ? corp.nome.substr(0, 9) + ' ...' : corp.nome }}</small
            >
          </span>
        </div>
      </div>

      <div class="w-full mt-15 mt-4 md:w-9/9 mx-auto">
        <div class="shadow-md">
          <div v-for:="i in modules" class="tab w-full overflow-hidden border-l-4">
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

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useSidebar } from '@core/services/hooks/useSidebar'
import AclProfileService from '@core/services/acl/acl-profile/acl-profile-service'
import AclModule from '../../core/domain/acl/acl-profile/acl-module-model'
import AlcProfileRoute from '../../core/domain/acl/acl-profile/acl-route-model'
export default defineComponent({
  setup() {
    const { isOpen } = useSidebar()

    const corp = JSON.parse(localStorage.getItem('corp')) || {}
    const user = JSON.parse(localStorage.getItem('user')) || {}
    const modules = ref<Array<AclModule>>([])

    onMounted(async () => {
      if (localStorage.getItem('is_legacy') === 'false') {
        modules.value = [...((await await AclProfileService.getAll()) || [])]
      } else {
        const aclModule = new AclModule()
        aclModule.nome = 'DEFAULT'
        const aclRoute = new AlcProfileRoute()
        aclRoute.nome = 'Home'
        aclRoute.rota = '/'
        aclModule.rotas = []
        aclModule.rotas.push(aclRoute)
        modules.value.push(aclModule)
      }
    })

    return {
      isOpen,
      modules,
      corp,
      user,
    }
  },
})
</script>
