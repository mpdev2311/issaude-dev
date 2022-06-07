<script setup lang="ts">
import StepGroup from '@components/layouts/Step/StepGroup/StepGroup.vue'
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ProcedureType } from './procedure-type-model'
import { store } from '@core/store'
import { AxiosResponse } from 'axios'
import ProcedureTypeService from './procedure-type-service'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'

const steps = ref([{ id: 1, description: 'Cadastro' }])
const router = useRouter()
const state = reactive({
  procedureType: {} as ProcedureType,
})

const procedureTypeService = new ProcedureTypeService()

onMounted(async () => {
  const { id } = router.currentRoute.value.params
  state.procedureType = id !== '0' ? await procedureTypeService.getById(id) : new ProcedureType()
})

const onCancel = async () => router.push('/procedure_types')
const onSave = async () => {
  let response = {} as AxiosResponse<any>
  setProcedureTypeDefaultData(state.procedureType)

  response = state.procedureType.id
    ? await procedureTypeService.update(state.procedureType)
    : await procedureTypeService.create(state.procedureType)

  if (IsSuccessfulStatusCode(response.status)) {
    router.push('/procedure_types')
  }
}

const setProcedureTypeDefaultData = (procedureType: ProcedureType) => {
  const user = store.getters.user
  procedureType.id_corp = user.id_corp
  procedureType.ativo = true
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
              <div class="sm:col-span-1" v-if="state.procedureType.id">
                <label for="first_name" class="block text-sm font-medium text-gray-700">
                  Registro
                </label>
                <div class="mt-1">
                  <input
                    disabled
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.procedureType.id"
                  />
                </div>
              </div>

              <div class="sm:col-span-5">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Nome do Procedimento
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.procedureType.nome"
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
