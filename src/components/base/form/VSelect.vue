<script setup lang="ts">
import { watch, ref } from 'vue'
interface Props {
  value?: string | number
  modelValue?: string | number
  readonly?: boolean
  label?: string
  labelBold?:boolean
  noBorder?: boolean
  hasError?:boolean
  messageError?: string
}
interface Emits {
  (event: 'update:modelValue', value?: any): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  readonly: false,
  type: 'text',
  labelBold: false,
  noBorder: false,
  hasError: false,
  messageError: 'Selecione uma opção!'
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
  <label class="block">
    <span
      v-if="props.label"
      class="text-gray-700 text-sm" 
      :class="[props.labelBold && 'font-bold']"
    >
      {{props.label}}
    </span>
    <select
      @change="handleSelect"
      v-bind="$attrs"
      :value="props.modelValue"
      :readonly="props.readonly"
      class="mt-1 block w-full py-2 px-3 bg-white rounded-md form-input  sm:text-sm placeholder-gray-300"
      :class="[
        props.label && 'mt-1',
        !props.noBorder && 'border-1',
        props.readonly && 'read-only:bg-white',
        props.hasError ? 'border-red-500 focus:ring-0 focus:border-red-500' : 'focus:ring-0 focus:border-green-500',
      ]"
      >
      <option value="">Selecionar</option>
      <slot></slot>
    </select>
    <p class="mt-1 text-xs text-red-600" :class="[props.hasError ? 'block': 'hidden']">{{props.messageError}}</p>
  </label>
</template>