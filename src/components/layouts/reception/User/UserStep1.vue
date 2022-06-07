<script lang="ts">
import Input from '@components/form/Input.vue'
import Select from '@components/form/Select.vue'
import Modal from '@components/modal/Modal.vue'
import { defineComponent, onMounted, ref, computed } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'
import { User } from '@domain/user/user-model'
import router from '@src/router'
import Multiselect from '@components/selects/Multiselect.vue'
import { cpf } from 'cpf-cnpj-validator'

export default defineComponent({
  props: [],
  components: {
    PlusIconSolid,
    Multiselect,
    Input,
    Select,
    Modal,
  },

  computed: {
    ...mapState(['userPassword', 'user', 'users', 'aclProfiles']),
    ...mapGetters(['userPassword', 'user', 'users', 'aclProfiles']),
    validateCPF(): boolean {
      if (this.user.cpf.length === 0) return true
      return cpf.isValid(this.user.cpf)
    },
  },

  beforeCreate: function () {
    //@ts-ignore
    this.store = useStore(key)
  },

  setup(props) {
    const verifyPassword = ref<string>('')
    const { id } = router.currentRoute.value.params
    const params = ref<object>({
      id_usuario: parseInt(id.toString()),
    }) as any
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

    const onCreate = async () => {
      store.getters.user.senha_anterior = ''
      await store.dispatch('USER_STORE_SAVE', store.getters.user)
    }

    const onVerifyPassword = () => {
      if (verifyPassword.value !== store.getters.user.senha) {
        store.dispatch('MESSAGE_STORE_ERROR_PUSH', `As Senhas não sao iguais!`)
        modalIsOpen.value = true
      } else {
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

    return { params, modalIsOpen, verifyPassword, onCreate }
  },
})
</script>

<template>
  <div class="h-full bg-white w-full">
    <div class="relative grid sm:grid-cols-12 grid-cols-1 sm:gap-x-8 gap-x-2 gap-y-8 px-6 py-10">
      <div class="col-span-12 sm:col-span-4">
        <label class="block text-sm font-medium text-gray-700">Nome</label>
        <Input v-model="user.nome" />
      </div>
      <div class="col-span-12 sm:col-span-4">
        <label class="block text-sm font-medium text-gray-700">Senha</label>
        <Input v-if="params.id_usuario === 0" v-model="user.senha" type="password" />
        <button
          @click="modalIsOpen = true"
          class="space-x-4 w-full inline-flex justify-center py-2 px-3 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-offset-0 focus:ring-0"
          v-else
        >
          Alterar Senha
        </button>
      </div>
      <div class="col-span-12 sm:col-span-4">
        <label class="block text-sm font-medium text-gray-700">CPF</label>
        <Input v-model="user.cpf" />
        <p :class="[validateCPF && 'invisible']" class="mt-1.5 text-sm text-red-600">
          Informe um CPF válido.
        </p>
      </div>
      <div class="col-span-12 sm:col-span-4">
        <label class="block text-sm font-medium text-gray-700">Duração da senha</label>
        <Select v-model="user.duracao_senha">
          <option value="0">Alterar no próximo login</option>
          <option value="30">A cada mês</option>
          <option value="60">De 2 em 2 meses</option>
          <option value="90">De 3 em 3 meses</option>
          <option value="120">De 4 em 4 meses</option>
          <option value="150">De 5 em 5 meses</option>
          <option value="180">De 6 em 6 meses</option>
        </Select>
      </div>
      <div class="col-span-12 sm:col-span-4">
        <label class="block text-sm font-medium text-gray-700"
          >Bloquear usuário após:
          {{
            user.bloquear_apos != 0 && user.bloquear_apos != ''
              ? user.bloquear_apos + ' tentativas'
              : ''
          }}</label
        >
        <Select v-model="user.bloquear_apos">
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
        </Select>
      </div>
    </div>
    <!-- <div class="flex items-center justify-between bottom-auto px-3 border-t-2 h-20 bg-white shadow-md mt-5">
      <div></div>
      <button
        @click.prevent="onCreate()"
        type="button"
        class="space-x-4 inline-flex justify-center px-5 py-2.5 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
      >Salvar</button>
    </div> -->
  </div>
  <Modal
    sm
    :modal-is-open="modalIsOpen"
    title="Alterar Senha"
    hidden-footer
    @on-close-modal="modalIsOpen = false"
  >
    <template #body>
      <div class="flex flex-col justify-evenly h-[86%]">
        <div>
          <label class="block text-sm font-medium text-gray-700">Digite sua senha atual</label>
          <Input v-model="user.senha_anterior" type="password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Digite sua nova senha</label>
          <Input v-model="user.senha" type="password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Repita sua nova senha</label>
          <Input v-model="verifyPassword" type="password" />
        </div>
      </div>
      <div>
        <button
          type="button"
          @click="modalIsOpen = false"
          class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
        >
          Voltar
        </button>
      </div>
    </template>
  </Modal>
</template>
