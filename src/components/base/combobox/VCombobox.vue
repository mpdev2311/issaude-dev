<script setup lang="ts">
import { ref, computed, defineExpose } from 'vue'
import useCombobox from '@components/base/combobox/useCombobox'
const comboboxElement = ref()
const input_combobox = ref()

interface Props {
  value?: any
  label?: string
  options: Array<any> | Object
  modelValue?: any
  noResults?: string
  valueProp?: string
  labelInput?: string
  hiddenIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  noResults: 'Não foi encontrado nenhum resultado.',
  label: 'name',
  valueProp: 'id',
  hiddenIcon: false,
})

const emit = defineEmits(['update:modelValue', 'changeSearch'])

function handleInput(e: any) {
  let value = e.target.value ?? e
  if (typeof value === 'object') {
    emit('update:modelValue', value[props.valueProp])
    return
  }
  emit('update:modelValue', value)
}

function handleSearchInput(e: any) {
  emit('changeSearch', e.target.value)
}

const combobox = useCombobox(comboboxElement, input_combobox)
function changeOption(value: any) {
  emit('update:modelValue', value)
  combobox.toggleCombobox()
}

const value = computed(() => {
  if (Array.isArray(props.options) && props.options.length) {
    if (props.options.every((op) => typeof op === 'string')) {
      return props.options.find((op) => op === props.modelValue) || ''
    } else {
      if (props.label) {
        let search = props.options.find((op) => op[props.valueProp] == props.modelValue)
          ? props.options.find((op) => op[props.valueProp] == props.modelValue)[props.label]
          : props.modelValue
        return search
      }
    }
  }
  if (typeof props.options === 'object' && !Array.isArray(props.options) && props.label) {
    //@ts-ignore
    return (
      Object.keys(props.options)
        .map((o) => props.options[o])
        .find((od) => od[props.valueProp] == props.modelValue)[props.label] || props.modelValue
    )
  }
  return props.modelValue
})
defineExpose({
  ...combobox,
})
</script>

<template>
  <div ref="comboboxElement" class="combobox-body">
    <label for="combobox" class="block text-sm font-medium text-gray-700">{{
      props.labelInput
    }}</label>
    <div class="relative mt-1">
      <input
        :value="value"
        @input="handleInput"
        @keyup.prevent="handleSearchInput"
        ref="input_combobox"
        id="input_combobox"
        type="text"
        autocomplete="off"
        :class="[
          'w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm',
          combobox.isOpen ? 'ring-2 ring-indigo-500' : '',
        ]"
        role="combobox"
        aria-controls="options"
        @click="combobox.openCombobox"
        @keydown.arrow-down.prevent="combobox.arrowDown"
        @focus="(e) => e.target.select()"
      />
      <button
        v-if="!props.hiddenIcon"
        @click="combobox.toggleCombobox"
        id="button-input"
        type="button"
        class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
      >
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <ul
        class="absolute bottom-10 z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        id="options-combobox"
        ref="lsoptions"
        role="listbox"
      >
        <li
          v-if="props.options?.length"
          @click="changeOption(op[props.valueProp])"
          @keydown.enter.prevent="changeOption(op[props.valueProp])"
          v-for="(op, id) in options"
          :class="[
            'relative focus:text-white focus:outline-none focus:bg-blue-700 cursor-pointer hover:text-white hover:bg-blue-700 select-none py-2 pl-3 pr-9',
            op[props.valueProp] == modelValue ? 'bg-indigo-600' : 'text-gray-900',
          ]"
          :key="id"
          :id="`option-${op[props.valueProp]}`"
          role="option"
          tabindex="-1"
          @keypress="
            () => {
              input_combobox.focus(), input_combobox.select()
            }
          "
          @keydown.arrow-down.prevent="combobox.arrowDown"
          @keydown.arrow-up.prevent="combobox.arrowUp"
        >
          <span
            :class="[
              'block truncate',
              op[props.valueProp] == modelValue ? 'font-semibold text-white' : '',
            ]"
            >{{ op[props.label] }}</span
          >
          <span
            :class="[
              'absolute inset-y-0 right-0 flex items-center pr-4 ',
              op[props.valueProp] == modelValue ? 'text-white' : 'text-white',
            ]"
          >
            <!-- Heroicon name: solid/check -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
        <li v-if="!props.options?.length" class="relative select-none py-3 pl-3 pr-9 text-black">
          <slot name="noResults">{{ props.noResults }}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>
