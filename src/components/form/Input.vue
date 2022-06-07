<script setup lang="ts">
import { watch, ref } from 'vue'
interface Props {
  value?: string | number
  modelValue?: string | number
  readonly?: boolean
  type: 'text' | 'password' | 'number' | 'email' | 'color'
}
interface Emits {
  (event: 'update:modelValue', value?: any): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  readonly: false,
  type: 'text',
})
const emits = defineEmits<Emits>()

function handleInput(event: any) {
  emits('update:modelValue', event.target.value)
}

watch(
  () => props.modelValue,
  (value) => {
    if (value == 'null' || value === null) {
      emits('update:modelValue', '')
    }
  },
  { immediate: true }
)
</script>

<template>
  <input
    @input="handleInput"
    v-bind="$attrs"
    :type="props.type"
    :value="props.modelValue"
    :readonly="props.readonly"
    class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    :class="[props.readonly && 'read-only:bg-white']"
  />
</template>
