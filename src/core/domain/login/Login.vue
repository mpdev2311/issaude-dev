<script setup lang="ts">
import { reactive, onBeforeMount } from 'vue'
import { userSession } from '@pinia/userSession'
import { field, fieldGroup, required } from 'vue-validus'
import { generateErrorAlert } from '@core/helpers/alert'
const state = reactive({
  name: '',
  password: '',
})
const user = userSession()

const validate = fieldGroup(
  {
    name: field([required()]),
    password: field([required()]),
  },
  state
)

async function handleLogin() {
  validate.validate()
  if (validate.invalid) {
    generateErrorAlert('Campos Login', 'Preencha todos os campos!')
    return
  }
  await user.requestLogin(state)
}

onBeforeMount(() => {
  user.clearStorage()
})
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <img width="250" src="../../../assets/logo-default-01.png" />
      </div>
      <form class="mt-5" @submit.prevent="handleLogin">
        <div class="mt-3">
          <VInput label="Login" v-model="state.name" :has-error="validate.name.invalid" />
        </div>
        <div class="mt-5">
          <VInput
            type="password"
            label="Senha"
            v-model="state.password"
            :has-error="validate.password.invalid"
          />
        </div>
        <div class="flex justify-between items-center my-5">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-indigo-600" />
              <span class="mx-2 text-gray-600 text-sm">Lembrar-me</span>
            </label>
          </div>
          <div>
            <a class="block text-sm fontme text-indigo-700 hover:underline" href="#"
              >Perdeu sua senha?</a
            >
          </div>
        </div>
        <div class="mt-8">
          <VButton type="submit" color="info" fullwidth rounded elevated :loading="user.loading">
            Entrar no sistema</VButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
