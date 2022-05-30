<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store/store'
import StepGroup from '../../Step/StepGroup/StepGroup.vue';
import UserStep1 from './UserStep1.vue';
import Alert from '@components/alerts/Alert.vue';
import { cpf } from 'cpf-cnpj-validator'
import { Alert as iAlert } from '@core/domain/alert/alert-model'
import { useRoute } from 'vue-router'

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
    const refAlert = ref()
    const onCreate = async () => {
      if (!cpf.isValid(store.getters.user.cpf)) {
        refAlert.value.showAlert({
          title: 'Cadastro Usuário',
          message: 'Informe um CPF válido',
          fixed: false,
          success: false,
          show: true,
          time: 5000,
        } as iAlert)
        return false
      }
      store.getters.user.senha_anterior = 'null'
      await store.dispatch('USER_STORE_SAVE', store.getters.user)
      refAlert.value.showAlert({
        title: 'Cadastro Usuário',
        message: id == '0' ? 'Usuário cadastrado com sucesso' : 'Usuário editado com sucesso!',
        fixed: false,
        success: false,
        show: true,
        time: 5000,
      } as iAlert)
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
    return { onCreate, changeCurrentStep, onCancel, currentStep, steps, refAlert }
  },
  components: { StepGroup, UserStep1, Alert },
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
  <Alert ref="refAlert" />
</template>
