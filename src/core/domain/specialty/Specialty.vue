<script setup lang="ts">
import StepGroup from '@components/layouts/Step/StepGroup/StepGroup.vue'
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Specialty } from './specialty-model'
import { store } from '@core/store'
import { AxiosResponse } from 'axios'
import SpecialtyService from './specialty-service'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

const steps = ref([{ id: 1, description: 'Cadastro' }])
const router = useRouter()
const state = reactive({
  specialty: {} as Specialty,
})

const specialtyService = new SpecialtyService()

onMounted(async () => {
  const { id } = router.currentRoute.value.params
  state.specialty = id !== '0' ? await specialtyService.getById(id) : new Specialty()
})

const onCancel = async () => router.push('/specialties')
const onSave = async () => {
  let response = {} as AxiosResponse<any>
  setSpecialtyDefaultData(state.specialty)

  response = state.specialty.id
    ? await specialtyService.update(state.specialty)
    : await specialtyService.create(state.specialty)

  if (IsSuccessfulStatusCode(response.status)) {
    router.push('/specialties')
  }
}

const setSpecialtyDefaultData = (speciality: Specialty) => {
  const user = store.getters.user
  speciality.id_user = user.id
  speciality.id_corp = user.id_corp
  speciality.ativo = true
}
</script>

<template>
  <StepGroup
    class="min-h-full test"
    :current="1"
    :steps="steps"
    @on-save="onSave"
    @on-cancel="onCancel"
  >
    <div class="px-4 py-2 flex-auto">
      <form class="space-y-4 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <div class="pt-1">
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="first_name" class="block text-sm font-medium text-gray-700">
                  Nome Especialidade
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.specialty.nome_especialidade"
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Código 1
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.specialty.codigo"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Código 2
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.specialty.codigo2"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Código 3
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.specialty.codigo_3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </StepGroup>
</template>
