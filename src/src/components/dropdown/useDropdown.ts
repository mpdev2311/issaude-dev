/**
 * useDropdown Composition API
 */

import type { Ref } from 'vue'
import { reactive, ref, watchEffect } from 'vue'

import { onClickOutside } from '@vueuse/core'
/**
 * Generate refs to handle a dropdown state
 */
export default function useDropdown(container: Ref<HTMLElement | null>) {
  const isOpen = ref(false)

  const openDropDown = () => {
    isOpen.value = true
  }

  onClickOutside(container, () => {
    isOpen.value = false
  })
  const closeDropDown = () => {
    isOpen.value = false
  }

  const toggleDropDown = () => {
    isOpen.value = !isOpen.value
  }

  watchEffect(() => {
    if (!container.value) {
      return
    }

    if (!isOpen.value) {
      container.value.children[1].classList.add('hidden')
    } else {
      container.value.children[1].classList.remove('hidden')
    }
  })

  return reactive({
    isOpen,
    openDropDown,
    closeDropDown,
    toggleDropDown,
  })
}
