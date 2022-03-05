<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      :class="
        modalIsOpen === true
          ? 'fixed z-10 inset-0 overflow-y-auto'
          : 'hidden fixed z-10 inset-0 overflow-y-auto'
      "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block
          sm:p-0
        "
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="
            inline-block
            align-bottom
            bg-white
            rounded-lg
            px-4
            pt-5
            pb-4
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:my-8
            sm:align-middle
            sm:max-w-sm
            sm:w-full
            sm:p-6
          "
        >
          <div>
            <div
              class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
            >
              <!-- Heroicon name: outline/check -->
              <svg
                class="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              
              <div class="mt-5"> 
                <label for="nome" class="block text-sm font-medium text-gray-700"> Digite sua senha atual </label>
                <input
                    v-model="user.senha_anterior"
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
                      rounded-md
                    "
                  />
              </div>

              <div class="mt-5"> 
                <label for="nome" class="block text-sm font-medium text-gray-700"> Digite sua nova senha</label>
                <input
                    v-model="user.senha"
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
                      rounded-md
                    "
                  />
              </div>

              <div class="mt-5"> 
                <label for="nome" class="block text-sm font-medium text-gray-700"> Digite sua senha atual </label>
                <input
                   v-model="verifyPassword"
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
                      rounded-md
                    "
                  />
              </div>


            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              @click="onModal(modalIsOpen)"
              class="
                inline-flex
                justify-center
                w-full
                rounded-md
                border border-transparent
                shadow-sm
                px-4
                py-2
                bg-indigo-600
                text-base
                font-medium
                text-white
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                sm:text-sm
              "
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
    <form class="">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-1 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
              <div class="sm:col-span-2 mt-1">
                <label for="nome" class="block text-sm font-medium text-gray-700"> Nome </label>
                <div class="mt-2">
                  <input
                    v-model="user.nome"
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
                      rounded-md
                    "
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="nome" class="block text-sm font-medium text-gray-700"> Senha </label>
                <div v-if="params.id_usuario === 0" class="mt-2">
                  <input
                    v-model="user.senha"
                    type="password"
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
                      rounded-md
                    "
                  />
                </div>
                <div v-else class="mt-2">
                  <button
                    @click.prevent="onModal(modalIsOpen)"
                    name="nome"
                    id="nome"
                    autocomplete="given-name"
                    class="
                      ml-32
                      space-x-4
                      inline-flex
                      justify-center
                      py-1
                      px-3
                      border border-transparent
                      shadow-xs
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      bg-blue-600
                      hover:bg-blue-500
                      focus:outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    "
                  >
                    <div>Alterar senha</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="nome" class="block text-sm font-medium text-gray-700"> CPF </label>
                <div class="mt-2">
                  <input
                    v-model="user.cpf"
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
                      rounded-md
                    "
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="nome" class="block text-sm font-medium text-gray-700">
                  Duração da senha
                </label>
                <div class="mt-2">
                  <select
                    v-model="user.duracao_senha"
                    type="password"
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
                      rounded-md
                    "
                  >
                    <option value=""></option>
                    <option :value="1">Alterar no próximo login</option>
                    <option :value="2">A cada mês</option>
                    <option :value="3">De 2 em 2 meses</option>
                    <option :value="4">De 3 em 3 meses</option>
                    <option :value="5">De 4 em 4 meses</option>
                    <option :value="6">De 5 em 5 meses</option>
                    <option :value="7">De 6 em 6 meses</option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="nome" class="block text-sm font-medium text-gray-700">
                  Bloquear usuário após
                </label>
                <div class="mt-2">
                  <select
                    v-model="user.bloquear_apos"
                    type="password"
                    name="nome"
                    id="nome"
                    autocomplete="given-name"
                    class="
                      shadow-sm
                      focus:ring-indigo-500
                      bg-gray-200
                      focus:border-indigo-500
                      block
                      mb-5
                      w-full
                      sm:text-sm
                      border border-gray-200
                      rounded-md
                    "
                  >
                    <option value=""></option>
                    <option :value="1">1</option>
                    <option :value="2">2</option>
                    <option :value="3">3</option>
                    <option :value="4">4</option>
                    <option :value="5">5</option>
                    <option :value="6">6</option>
                    <option :value="7">7</option>
                    <option :value="8">8</option>
                    <option :value="9">9</option>
                    <option :value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '../../../../../src/core/store/store'
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'
import { User } from '../../../../core/domain/users/user-model'
import router from '../../../../router'
import Multiselect from '../../../selects/Multiselect.vue'

export default defineComponent({
  props: [],
  components: {
    PlusIconSolid,
    Multiselect,
  },

  computed: {
    ...mapState(['userPassword', 'user', 'users', 'aclProfiles']),
    ...mapGetters(['userPassword', 'user', 'users', 'aclProfiles']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const verifyPassword = ref<string>('')
    const { id } = router.currentRoute.value.params
    const params = ref<object>({
      id_usuario: parseInt(id.toString()),
    })
    const user = ref<User>({
      id: 0,
      nome: '',
      cpf: '',
      senha: '',
      id_corp: 0,
      duracao_senha: 0,
      senha_anterior: '',
      bloquear_apos: 0,
      ultima_alteracao_senha: '',
      data_gravacao: '',
      ativo: true,
    })

    const modalIsOpen = ref<boolean>(false)

    const profilesFromMultiselect = ref<Array<any>>([])

    const onModal = (modal: boolean) => {
      if (modal === true) {
        modalIsOpen.value = false
      } else {
        modalIsOpen.value = true
      }
    }

    const onVerifyPassword = ()  => {
      if(verifyPassword.value !== store.getters.user.senha){
        store.dispatch('MESSAGE_STORE_ERROR_PUSH', `As Senhas não sao iguais!`)
        modalIsOpen.value = true
      }else{
        modalIsOpen.value = false
      }
    }

    store.dispatch('USER_STORE_SET_BLANK', user.value)

    onMounted(async () => {
      const { id } = router.currentRoute.value.params
      store.dispatch('ACL_PROFILE_STORE_LOAD')
      if (id === '0') {
        store.dispatch('USER_STORE_LOAD')
      } else {
        store.dispatch('USER_STORE_LOAD_BY_ID', id)
      }
    })

    return { params, modalIsOpen, onModal, verifyPassword  }
  },
})
</script>