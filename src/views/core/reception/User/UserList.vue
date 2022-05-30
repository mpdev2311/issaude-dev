<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { key } from "@core/store/store"
import Dropdown from '../../../../components/dropdown/Dropdown.vue'
import Combobox from '../../../components/combobox/Combobox.vue';
import Table from '../../../../components/layouts/Table/Table.vue';
import Pagination from '../../../../components/pagination/Pagination.vue';
const store = useStore(key)
const router = useRouter()
const user = computed(() => store.getters.user)
const users = computed(() => store.getters.users)
const search = ref('')

async function getAllUsers() {
  await store.dispatch('USER_STORE_LOAD')
}

async function onDelete(id: number, fn: Function) {
  await store.dispatch('USER_STORE_DELETE_BY_ID', id)
  await getAllUsers()
}

function onEdit(id: number, fn?: Function) {
  if(fn) fn()
  router.push({ name: 'User', params: { id: id } })
}

function onPermissions(id: number, fn: Function) {
  fn()
  router.push(`/profile_corporation/${id}`)
}

function onCreate(fn: Function) {
  // alert('create')
  // fn()
  router.push({ name: 'User', params: { id: '0' } })
}

const columnsTab = ref({
  id: {
    label: 'ID',
    align: 'center',
    headerCellClass: 'py-1.5',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
  },
  nome: {
    label: 'Nome',
    align: 'center',
    format: (value: string) => value[0].toUpperCase() + value.substring(1),
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
  },
  cpf: {
    label: 'CPF',
    align: 'center',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
  },
  dropdown: {
    label: '',
    align: 'end',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
  }
})

onMounted(async () => await getAllUsers())
</script>


<template>
  <div>
    <h3 class="text-gray-700 text-2xl font-semibold">Cadastro de usuário</h3>

    <div class="mt-4 flex flex-col sm:flex-row">
      <div class="flex">
        <div class="relative">
          <div
            class="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              flex
              items-center
              px-2
              text-gray-700
            "
          ></div>
        </div>
        <div class="block relative mt-4 sm:mt-0 w-full sm:w-auto">
          <button class="absolute inset-y-0 right-0 flex items-center px-2 text-white hover:bg-green-600 rounded-full cursor-pointer w-8 h-8 mt-1 mr-1">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500 hover:text-white">
              <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
              ></path>
            </svg>
          </button>
          <input
            v-model="search"
            class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm', combobox.isOpen ? 'ring-2 ring-green-500"
          />
        </div>
      </div>
    </div>

    <div class="mt-3">
      <div class="mt-5 bg-white shadow-sm ring-1 ring-black ring-opacity-5">
        <div class="bg-white shadow rounded-md overflow-hidden my-6 max-h-[63vh] min-h-[63vh] overflow-y-auto overflow-x-auto">
          <Table :columns="columnsTab" :data="users" scroll-top>
          <template #header-column="{ column }">
            <template v-if="column.key === 'dropdown'">
              <th class="sticky top-0 z-10  border-b border-gray-300 bg-gray-50 bg-opacity-5 sm:bg-opacity-100 px-3 py-1.5 text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell text-right">
                <Dropdown class="lg:mr-10">
                  <template #content="{ closeDropDown }">
                    <button
                      @click="onCreate(closeDropDown)"
                      class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                      role="menuitem" tabindex="0" id="menu-item-0">Novo Usuário</button>
                  </template>
                </Dropdown>
              </th>
              
            </template>
          </template>
            <template #body-cell="{ row, column, value }">
              <template v-if="column.key === 'dropdown'">
                <Dropdown class="lg:mr-10">
                  <template #content="{ closeDropDown }">
                    <button
                      @click="onDelete(row.id, closeDropDown)"
                      class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                      role="menuitem" tabindex="0" id="menu-item-0">Bloquear</button>
                      <button
                      @click="onEdit(row.id, closeDropDown)"
                      class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                      role="menuitem" tabindex="0" id="menu-item-0">Editar</button>
                      <button
                      @click="onPermissions(row.id, closeDropDown)"
                      class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                      role="menuitem" tabindex="0" id="menu-item-0">Permissões</button>
                    
                  </template>
                </Dropdown>
              </template>
            </template>
          </Table>
        </div>
        <div>
          <Pagination :item-per-page="20" :total-items="100" class="bg-transparent"
                :current-page="1" :max-links-displayed="3" noRouter />
        </div>
      </div>
    </div>
  </div>
</template>
