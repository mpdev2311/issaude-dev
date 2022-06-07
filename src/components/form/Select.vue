<script setup lang="ts">
import { watch, ref } from 'vue'
interface Props {
  value?: string | number
  modelValue?: string | number
  readonly?: boolean
}
interface Emits {
  (event: 'update:modelValue', value?: any): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  readonly: false,
  type: 'text'
})
const emits = defineEmits<Emits>()

function handleSelect(event: any) {
  emits('update:modelValue', event.target.value)
}

</script>

<template>
  <select
    @change="handleSelect"
    v-bind="$attrs"
    :value="props.modelValue"
    :readonly="props.readonly"
    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    :class="[props.readonly && 'read-only:bg-white']"
    >
    <option value="">Selecionar</option>
    <slot></slot>
  </select>
</template>