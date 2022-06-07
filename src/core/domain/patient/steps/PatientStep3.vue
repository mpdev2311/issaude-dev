<script lang="ts">
import { defineComponent, computed, watch, ref, onMounted } from 'vue'
import AddDelete from '@components/add-delete/AddDelete.vue'
import Combobox from '@components/combobox/Combobox.vue'

export default defineComponent({
  props: ['patient', 'planAgree', 'healthProfessionals'],

  components: {
    AddDelete,
    Combobox,
  },

  setup(props, { emit }) {
    let patient = ref(props.patient)
    watch(
      () => patient,
      (value) => {
        emit('on-update-patient', value)
      },
      { immediate: true, deep: true }
    )

    const hasOnlyOnePlan = computed(() => props.patient.planos.length == 1)

    const onSelectPlan = (plan: any, event: any) => (plan.id_plano = event.target.value)

    const onAddPlan = () => patient.planos?.push({})

    const removePlan = (index: number) => patient.planos?.splice(index, 1)

    const searchHealthProfessional = async (name: string) => {
      if (name.length < 2) return
      emit('on-search-health-professional', name)
    }

    return {
      onAddPlan,
      removePlan,
      onSelectPlan,
      hasOnlyOnePlan,
      searchHealthProfessional,
      patient,
    }
  },
})
</script>

<template>
  <form>
    <div class="px-4 py-4 flex-auto">
      <div class="mt-0 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-2">
          <label for="first-name" class="block text-sm font-medium text-gray-700"
            >Profissional de Origem</label
          >
          <Combobox
            :options="healthProfessionals?.content ?? []"
            label="nome"
            @change-search="searchHealthProfessional"
            v-model="patient.id_medicos"
            hidden-icon
          />
        </div>
        <div class="sm:col-span-2">
          <label for="first-name" class="block text-sm font-medium text-gray-700"
            >Profissional Equipe</label
          >
          <Combobox
            :options="healthProfessionals?.content ?? []"
            label="nome"
            v-model="patient.id_medico_equipe"
            @change-search="searchHealthProfessional"
            hidden-icon
          />
        </div>
        <div class="sm:col-span-2">
          <label for="indicado_por" class="block text-sm font-medium text-gray-700"
            >Indicado por</label
          >
          <Combobox :options="[]" label="indicado_por" @change-search="() => {}" />
        </div>
      </div>
    </div>
    <div class="py-1 flex-auto">
      <div v-for="(plan, index) in patient.planos" :key="plan.id_plano">
        <div class="px-4 flex-auto">
          <div class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
            <div class="sm:col-span-2">
              <label for="uf" class="block text-sm font-medium text-gray-700"> Plano </label>
              <div class="mt-2">
                <select
                  @change="onSelectPlan(plan, $event)"
                  id="origin"
                  name="origin"
                  autocomplete="protudo"
                  class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  v-model="plan.id_plano"
                >
                  <option v-for="item in planAgree.content" :key="item" v-bind:value="item.id">
                    {{ item.nome }}
                  </option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="nome" class="block text-sm font-medium text-gray-700"> Matricula </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  autocomplete="given-name"
                  class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                  v-model="plan.matricula"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="nome" class="block text-sm font-medium text-gray-700"> Validade </label>
              <div class="mt-1">
                <input
                  type="date"
                  v-model="plan.validade"
                  class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- This example requires Tailwind CSS v2.0+ -->
        <AddDelete @on-add="onAddPlan()" @on-delete="removePlan(index)">
          <template v-slot:delete>
            <div v-if="hasOnlyOnePlan" />
          </template>
        </AddDelete>
      </div>
    </div>
  </form>
</template>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
