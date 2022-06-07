<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import StepGroup from '@components/layouts/Step/StepGroup/StepGroup.vue'
import UserStep1 from './UserStep1.vue'
import { cpf } from 'cpf-cnpj-validator'
import { useRoute } from 'vue-router'
import { generateSuccessAlert, generateErrorAlert } from '@core/helpers/alert'

export default defineComponent({
  computed: {
    ...mapState(['userPassword', 'user', 'users', 'aclProfiles']),
    ...mapGetters(['userPassword', 'user', 'users', 'aclProfiles']),
  },
  beforeCreate: function () {
    //@ts-ignore
    this.store = useStore(key)
  },
  emits: ['on-save', 'on-cancel'],
  setup(props, { emit }) {
    const route = useRoute()
    const id = route.params.id

    const onCreate = async () => {
      if (!cpf.isValid(store.getters.user.cpf)) {
        generateErrorAlert('Cadastro Usuário', 'Informe um CPF válido')
        return false
      }
      store.getters.user.senha_anterior = 'null'
      await store.dispatch('USER_STORE_SAVE', store.getters.user)
      const message = id == '0' ? 'Usuário cadastrado com sucesso' : 'Usuário editado com sucesso!'
      generateSuccessAlert('Cadastro Usuário', message)

      emit('on-save')
    }
    const onCancel = () => {
      emit('on-cancel')
    }
    const currentStep = ref(1)
    const steps = ref([{ id: 1, description: 'Cadastro Usuário' }])
    function changeCurrentStep(value: number) {
      currentStep.value = value
    }
    return { onCreate, changeCurrentStep, onCancel, currentStep, steps }
  },
  components: { StepGroup, UserStep1 },
})
</script>

<template>
  <StepGroup
    :current="currentStep"
    :steps="steps"
    @update-current="changeCurrentStep"
    @on-save="onCreate"
    @on-cancel="onCancel"
  >
    <UserStep1 v-if="currentStep === 1" />
  </StepGroup>
</template>
