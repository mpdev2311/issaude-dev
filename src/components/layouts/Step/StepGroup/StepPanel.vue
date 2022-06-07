<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/solid'

interface Step {
  id: number
  current: number | string,
  description: string
}

const props = defineProps<Step>()
const emit = defineEmits(['click-step'])

function clickStep(id: number) {
  emit('click-step', id)
}
</script>

<template>
  <a v-if="props.current > props.id" href="#" @click="clickStep(props.id)" class="group hidden sm:flex items-center w-full">
    <span class="px-6 py-4 flex items-center text-sm font-medium">
      <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
        <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
      </span>
      <span class="ml-4 text-sm font-medium text-gray-900">{{ props.description }}</span>
    </span>
  </a>
  <a v-else-if="props.current === props.id" href="#" @click="clickStep(props.id)" class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
    <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
      <span class="text-indigo-600">{{ props.id }}</span>
    </span>
    <span class="ml-4 text-sm font-medium text-indigo-600">{{ props.description }}</span>
  </a>
  <a v-else href="#" class="group hidden sm:flex items-center" @click="clickStep(props.id)" >
    <span class="px-6 py-4 flex items-center text-sm font-medium">
      <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
        <span class="text-gray-500 group-hover:text-gray-900">{{ props.id }}</span>
      </span>
      <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ props.description }}</span>
    </span>
  </a>
</template>