<script setup lang="ts">
import EndStep from './EndStep.vue'
import StepPanel from './StepPanel.vue'
import { Steps } from '@domain/step/step-model'

const props = defineProps<{ steps: Steps[]; current: number }>()
const emit = defineEmits(['update-current', 'on-save', 'on-cancel'])

function updateCurrent(value: number) {
  if (value > props.steps.length || value <= 0) return
  emit('update-current', value)
}

function save() {
  emit('on-save')
}

function cancel() {
  emit('on-cancel')
}
</script>

<template>
  <div class="w-auto h-auto bg-white">
    <nav aria-label="Progress">
      <ol
        role="list"
        class="border-b shadow-md border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
      >
        <li v-for="(step, id) in props.steps" :key="id" class="relative md:flex-1 md:flex">
          <StepPanel
            @click-step="updateCurrent"
            :description="step.description"
            :current="props.current"
            :id="step.id"
          />
          <EndStep v-if="id !== steps.length - 1" />
        </li>
      </ol>
    </nav>
    <div class="relative w-auto h-auto min-height">
      <Transition name="slide-fade" :duration="{ enter: 800, leave: 900 }">
        <slot></slot>
      </Transition>
    </div>
    <div
      class="flex items-center justify-between bottom-auto px-3 border-t-2 h-20 bg-white shadow-md mt-5 flex-row-reverse"
    >
      <div class="flex flex-row">
        <div v-if="steps.length > 1" class="mr-5">
          <span class="relative z-0 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              @click="updateCurrent(current - 1)"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium focus:z-10 focus:outline-none"
              :class="
                current === 1
                  ? 'text-gray-500 hover:bg-gray-50 cursor-not-allowed'
                  : 'text-green-500 hover:bg-green-50 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-1'
              "
            >
              <span class="sr-only">Anterior</span>
              Anterior
            </button>
            <button
              type="button"
              @click="updateCurrent(current + 1)"
              class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium focus:z-10 focus:outline-none"
              :class="[
                current >= steps.length
                  ? 'text-gray-500 hover:bg-gray-50 cursor-not-allowed'
                  : 'text-green-500 hover:bg-green-50  focus:ring-indigo-500 focus:border-indigo-500 focus:ring-1',
              ]"
            >
              <span class="sr-only">Próximo</span>
              Próximo
            </button>
          </span>
        </div>
        <button
          @click.prevent="cancel()"
          type="button"
          class="relative inline-flex items-center px-2 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium focus:z-10 focus:outline-none mr-2 hover:bg-red-50"
        >
          Cancelar
        </button>
        <button
          @click.prevent="save()"
          type="button"
          class="relative inline-flex items-center px-2 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium focus:z-10 focus:outline-none hover:bg-green-50"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.min-height {
  min-height: 430px;
}
</style>
