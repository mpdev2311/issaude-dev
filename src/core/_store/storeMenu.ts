import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import AclProfileService from '@domain/acl/acl-profile/acl-profile-service'
import AclModule from '@domain/acl/acl-profile/acl-module-model'
export const storeMenu = defineStore('storeMenu', () => {
  const menu = ref<Array<AclModule>>([])

  const menuIsOpen = ref(true)

  const modules = computed(() => {
    return menu.value
  })

  async function getMenuList() {
    const result = await AclProfileService.getAll()
    menu.value = result
  }

  function handleMenu(value: boolean) {
    menuIsOpen.value = value
  }

  return { menu, modules, getMenuList, handleMenu, menuIsOpen }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(storeMenu, import.meta.hot))
}
