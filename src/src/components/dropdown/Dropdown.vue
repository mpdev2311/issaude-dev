<script setup lang="ts">
import { ref } from 'vue'
import useDropdown from './useDropdown'

export interface VDropdownProps {
  title?: string
  up?: boolean
  right?: boolean
  modern?: boolean
  spaced?: boolean
}

const props = withDefaults(defineProps<VDropdownProps>(), {
  title: undefined,
})

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)

defineExpose({
  ...dropdown,
})
</script>

<template>
  <div ref="dropdownElement" class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
        :class="[props.title ? 'inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2' : 'inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-1.5 py-1.5']"
        id="menu-button"
        @click="dropdown.toggleDropDown"
      >
        <template v-if="title">{{ props.title }}</template>
        <v-slot name="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            :class="[props.title && '-mr-1 ml-2']"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </v-slot>
      </button>
    </div>
    <div
      class="dropdown-menu origin-top-right absolute right-0 mt-2 w-56 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <slot name="content" v-bind="dropdown"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.is-active {
  & .dropdown-menu {
    @apply block;
  }
}
</style>