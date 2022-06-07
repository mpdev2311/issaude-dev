<script setup lang="ts">
interface Props {
  value?: string | number
  modelValue?: string | number
  readonly?: boolean
  type?: 'text' | 'password' | 'number' | 'email' | 'color'
  hasError?:boolean
  label?: string
  labelBold?: boolean
  noBorder?: boolean
  messageError?: string
}
interface Emits {
  (event: 'update:modelValue', value?: any): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  readonly: false,
  type: 'text',
  hasError: false,
  labelBold: false,
  noBorder: false,
  messageError: 'Preencha este campo!'
})
const emits = defineEmits<Emits>()

function handleInput(event: any) {
  emits('update:modelValue', event.target.value)
}
</script>

<template>
  <label class="block">
    <span
      v-if="props.label"
      class="text-gray-700 text-sm" 
      :class="[props.labelBold && 'font-bold']"
    >
      {{props.label}}
    </span>
    <input
      @input="handleInput"
      v-bind="$attrs"
      :type="props.type"
      :value="props.modelValue"
      :readonly="props.readonly"
      class="mt-1 block w-full py-2 px-3 bg-white rounded-md form-input  sm:text-sm placeholder-gray-300"
      :class="[
        props.label && 'mt-1',
        !props.noBorder && 'border-1',
        props.readonly && 'read-only:bg-white',
        props.hasError ? 'border-red-500 focus:ring-0 focus:border-red-500' : 'focus:ring-0 focus:border-green-500',
      ]"
    />
    <p class="mt-1 text-sm text-red-600" :class="[props.hasError ? 'block': 'hidden']">{{props.messageError}}</p>
  </label>
</template>