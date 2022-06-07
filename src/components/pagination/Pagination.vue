<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface PaginationProps {
  itemPerPage: number
  totalItems: number
  currentPage?: number
  maxLinksDisplayed?: number
  noRouter?: boolean
  routerQueryKey?: string
  borderTop?: boolean
}

interface PaginationEmits {
  (e: 'update-current-page', currentPage: number): void
}

const emit = defineEmits<PaginationEmits>()
const props = withDefaults(defineProps<PaginationProps>(), {
  currentPage: 1,
  maxLinksDisplayed: 4,
  useRouter: true,
  routerQueryKey: 'page',
  borderTop: false,
})

const route = useRoute()
const lastPage = computed(() => Math.ceil(props.totalItems / props.itemPerPage) || 1)
const totalPageDisplayed = computed(() =>
  lastPage.value > props.maxLinksDisplayed + 2 ? props.maxLinksDisplayed + 2 : lastPage.value
)
const pages = computed(() => {
  const _pages = []
  let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2)
  let lastButton =
    firstButton + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2))

  if (firstButton < 1) {
    firstButton = 1
    lastButton = firstButton + (totalPageDisplayed.value - 1)
  }

  if (lastButton > lastPage.value) {
    lastButton = lastPage.value
    firstButton = lastButton - (totalPageDisplayed.value - 1)
  }

  for (let page = firstButton; page <= lastButton; page += 1) {
    if (page === firstButton || page === lastButton) {
      continue
    }

    _pages.push(page)
  }

  return _pages
})

const starting_amount = computed(() => {
  let _currentPage = props.currentPage
  let _total = props.totalItems
})

const showLastLink = computed(() => lastPage.value > 1)

const paginatedLink = (page = 1) => {
  if (props.noRouter) {
    return {}
  }

  const _page = Math.max(1, Math.min(page, lastPage.value))

  const query: any = {
    ...route.query,
  }

  if (props.routerQueryKey) {
    query[props.routerQueryKey] = _page <= 1 ? undefined : _page
  }

  return {
    name: route.name,
    params: route.params,
    query,
  }
}
const handleLinkClick = (e: MouseEvent, page = 1) => {
  const _page = Math.max(1, Math.min(page, lastPage.value))
  emit('update-current-page', _page)
  if (props.noRouter) {
    e.preventDefault()
    e.stopPropagation()
    return false
  }
}
</script>

<template>
  <div
    :class="[props.borderTop ? 'border-t border-gray-200' : '']"
    class="bg-white px-3 py-3 flex items-center justify-between sm:px-6 w-full"
  >
    <div class="flex-1 flex justify-between sm:hidden">
      <RouterLink
        v-if="currentPage > 1"
        :to="paginatedLink(currentPage - 1)"
        @click="(e) => handleLinkClick(e, currentPage - 1)"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >Anterior</RouterLink
      >
      <RouterLink
        v-if="currentPage <= lastPage && lastPage > 1"
        :to="paginatedLink(currentPage + 1)"
        @click="(e) => handleLinkClick(e, currentPage + 1)"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >Próximo</RouterLink
      >
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-end sm:justify-end">
      <!-- <div>
        <p class="text-sm text-gray-700">
          Exibindo de
          <span class="font-medium">{{ (props.itemPerPage - props.itemPerPage) + 1 }}</span>
          a
          <span class="font-medium">{{ props.totalItems / pages.length }}</span>
          de
          <span class="font-medium">97</span>
          resultados
        </p>
      </div>-->
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px min-w-min-content"
          aria-label="Pagination"
        >
          <RouterLink
            :to="paginatedLink(currentPage - 1)"
            tabindex="0"
            @click="(e) => handleLinkClick(e, currentPage - 1)"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Anterior</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </RouterLink>
          <RouterLink
            :to="paginatedLink(1)"
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            :class="currentPage === 1 ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : ''"
            @click="(e) => handleLinkClick(e, 1)"
            >01</RouterLink
          >
          <template v-for="page in pages" :key="page">
            <RouterLink
              :to="paginatedLink(page)"
              :arial-current="currentPage === page ? 'page' : undefined"
              class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              :class="
                currentPage === page ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : ''
              "
              @click="(e) => handleLinkClick(e, page)"
              >{{ String(page).padStart(2, '0') }}</RouterLink
            >
          </template>
          <RouterLink
            v-if="showLastLink"
            :to="paginatedLink(lastPage)"
            :arial-current="currentPage === lastPage ? 'page' : undefined"
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            :class="
              currentPage === lastPage ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : ''
            "
            @click="(e) => handleLinkClick(e, lastPage)"
            >{{ String(lastPage).padStart(2, '0') }}</RouterLink
          >
          <RouterLink
            :to="paginatedLink(currentPage + 1)"
            tabindex="0"
            @click="(e) => handleLinkClick(e, currentPage + 1)"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Próximo</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>
