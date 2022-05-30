<template>
  <div>
    <h3 class="text-gray-700 text-2xl font-semibold">{{ title }}</h3>

    <div v-if="canFilter" class="mt-4 flex flex-col sm:flex-row">
      <div class="flex">
        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          ></div>
        </div>
        <div class="block relative mt-4 sm:mt-0 w-full sm:w-auto">
          <button
            @click="onFilter"
            class="absolute inset-y-0 right-0 flex items-center px-2 text-white hover:bg-green-600 rounded-full cursor-pointer w-8 h-8 mt-1 mr-1"
          >
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500 hover:text-white">
              <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
              ></path>
            </svg>
          </button>
          <input
            v-model="searchTerm"
            v-on:keyup.enter="onFilter"
            class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm', combobox.isOpen ? 'ring-2 ring-green-500"
          />
        </div>
      </div>
    </div>

    <div class="mt-3">
      <div class="mt-5 bg-white shadow-sm ring-1 ring-black ring-opacity-5">
        <div
          class="bg-white shadow rounded-md overflow-hidden my-6 max-h-[63vh] min-h-[63vh] overflow-y-auto overflow-x-auto"
        >
          <Table :data="paginator.content" :columns="columns" scroll-top>
            <template #header-column="{ column }">
              <template v-if="column.key === 'dropdown'">
                <th
                  class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-5 sm:bg-opacity-100 px-3 py-1.5 text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell text-right"
                >
                  <Dropdown class="lg:mr-10">
                    <template #content="{ closeDropDown }">
                      <button
                        v-if="canCreate"
                        @click="onCreate(closeDropDown)"
                        class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                        role="menuitem"
                        tabindex="0"
                        id="menu-item-0"
                      >
                        Adicionar
                      </button>
                    </template>
                  </Dropdown>
                </th>
              </template>
            </template>
            <template #body-cell="{ row, column }">
              <template v-if="column.key === 'dropdown'">
                <Dropdown class="lg:mr-10">
                  <template #content="{ closeDropDown }">
                    <button
                      v-if="canEdit"
                      @click="onEdit(row.id)"
                      class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                      role="menuitem"
                      tabindex="0"
                      id="menu-item-0"
                    >
                      Editar
                    </button>

                    <button
                      v-if="canDelete"
                      @click="onDelete(row.id)"
                      class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                      role="menuitem"
                      tabindex="0"
                      id="menu-item-0"
                    >
                      Deletar
                    </button>
                  </template>
                </Dropdown>
              </template>
            </template>
          </Table>
        </div>
        <div>
          <Pagination
            class="bg-transparent"
            :item-per-page="paginator.size"
            :total-items="paginator.totalElements"
            :current-page="currentPage"
            :max-links-displayed="3"
            @update-current-page="onUpdateCurrentPage"
            noRouter
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dropdown from '../../dropdown/Dropdown.vue'
import Combobox from '../../combobox/Combobox.vue'
import Table from '../Table/Table.vue'
import Pagination from '../../pagination/Pagination.vue'

export default defineComponent({
  components: {
    Combobox,
    Dropdown,
    Pagination,
    Table,
  },

  data() {
    return {
      searchTerm: '',
      localData: new Array(),
      currentPage: 1,
    }
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    canCreate: {
      type: Boolean,
      required: false,
      default: false,
    },
    canEdit: {
      type: Boolean,
      required: false,
      default: false,
    },
    canDelete: {
      type: Boolean,
      required: false,
      default: false,
    },
    canFilter: {
      type: Boolean,
      required: false,
      default: true,
    },
    paginator: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onCreate() {
      this.$emit('onCreate')
    },
    onEdit(id: number) {
      this.$emit('onEdit', id)
    },
    onDelete(id: number) {
      this.currentPage = 1
      this.$emit('onDelete', id)
    },
    onFilter() {
      this.$emit('onFilter', this.searchTerm)
    },
    onUpdateCurrentPage(page: number) {
      this.currentPage = page
      const systemPage = page - 1
      this.$emit('update-pagination-page', systemPage, this.searchTerm)
    },
  },
})
</script>
