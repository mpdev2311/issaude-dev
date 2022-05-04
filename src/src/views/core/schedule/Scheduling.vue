
<script setup lang="ts">
import { DatePicker } from 'v-calendar';
import type { Ref } from 'vue'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { key } from '../../../core/store/store'
import Dropdown from '../../../components/dropdown/Dropdown.vue'
import ModalDetails from '../../../components/layouts/scheduling/ModalDetails.vue'
import ModalScheduling from '../../../components/layouts/scheduling/ModalScheduling.vue'
import Pagination from '../../../components/pagination/Pagination.vue'
import Table from '../../../components/layouts/Table/Table.vue'
import { filterScheduling } from '../../../core/domain/scheduling/scheduling-model';
const store = useStore(key)
const route = useRoute()
const departments = ref(false)
const modalIsOpen = ref(false)
const modalDetails = ref(false)
const refModalScheduling = ref(null)

const masks = {
  data: 'DD/MM/YYYY',
}

const filter = ref<filterScheduling>({
  page: 0,
  size: 20,
  id_corp: 1,
  range_date: {
    start: new Date(),
    end: new Date()
  },
  id_medico: undefined,
  id_paciente: undefined
})

const mapGetters = (getters: any) => {
  return Object.fromEntries(Object.keys(getters).map(getter => [getter, computed(() => getters[getter])]))
}

const mapStates = (states: any) => {
  return Object.fromEntries(Object.keys(states).map(state => [state, computed(() => states[state])]))
}

const { localAccess, schedulingStatus, schedulings, menus } = mapGetters(store.getters)

const columnsTab = ref({
  status: {
    label: 'Status',
    align: 'start',
    format: (value: any) => value.nome,
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
  },
  inicio: {
    label: 'Horário',
    align: 'start',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'

  },
  id_paciente: {
    label: 'Paciente',
    align: 'start'
  },
  typeConsultation: {
    label: 'Tipo de consulta',
    align: 'start',
    format: (value: any) => value.nome,
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
  },
  id_plano: {
    label: 'Plano',
    align: 'start'
  },


  dropdown: {
    label: 'Mais detalhes',
    align: 'start'
  },
})

const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1
  } catch { }
  return 1
})

const onCloseModal = () => {
  modalIsOpen.value = !modalIsOpen.value
}

const onOpenModal = () => {
  modalIsOpen.value = !modalIsOpen.value
}

const openModalDetails = () => {
  modalDetails.value = !modalDetails.value
}

const onSelect = (i) => {
  store.dispatch('ON_SELECT_MENU', i)
}

function load_schedulings(filter?: filterScheduling) {
  if (filter !== undefined) {
    store.dispatch('LOAD_SCHEDULINGS', filter)
  } else {
    store.dispatch('LOAD_SCHEDULINGS')
  }
}

onMounted(async () => {
  store.dispatch('LOAD_LOCAL_ACESS')
  store.dispatch('LOAD_SCHEDULING_STATUS')
  load_schedulings(filter.value)
  store.dispatch('LOAD_MENU')
})

</script>


<template>
  <ModalScheduling ref="refModalScheduling" />
  <div>
    <div class="space-y-6 -mt-5 sm:px-6 lg:px-0 lg:col-span-9">
      <div>
        <div class="mt-1 grid grid-cols-4 gap-4 bg-white px-3 py-5">
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Local de atendimento</label>
            <select id="select-local-atendimento" name="local" autocomplete="local"
              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="">Selecionar</option>
              <option v-for="i in localAccess" :key="i" :value="i.id">{{ i.localAttendance.local }}</option>
            </select>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Status atendimento</label>
            <select id="select-status-atendimento" name="local" autocomplete="local"
              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value>Selecionar</option>
              <option v-for="i in schedulingStatus" :key="i" :value="i.id">{{ i.nome }}</option>
            </select>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Localizar paciente</label>
            <input type="text" v-model="filter.id_paciente"
              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Status do leito</label>
            <select id="location" name="location" v-model="filter.id_corp"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Em manutenção</option>
              <option selected>Em funcionamento</option>
              <option>Ocupado</option>
            </select>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Data</label>
            <date-picker v-model="filter.range_date" is-range :masks="masks" trim-weeks
              class="flex flex-row items-center">
              <template #default="{ inputValue, inputEvents }">
                <div class="flex flex-col sm:flex-row justify-start items-center">
                  <div class="relative flex-grow">
                    <svg class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>
                    </svg>
                    <input
                      class="flex-grow pl-8 pr-2 border w-full mt-1 block py-2 px-3 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      :value="inputValue.start" v-on="inputEvents.start" />
                  </div>
                  <span class="flex-shrink-0 m-2">
                    <svg class="w-4 h-4 stroke-current text-gray-600" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div class="relative flex-grow">
                    <svg class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>
                    </svg>
                    <input
                      class="flex-grow pl-8 pr-2 border w-full mt-1 block py-2 px-3 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      :value="inputValue.end" v-on="inputEvents.end" />
                  </div>
                </div>
              </template>
            </date-picker>
          </div>
          <div>
            <button @click="load_schedulings(filter)"
            class="rounded-full py-2 px-2 mt-1 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 hover:cursor-pointer text-white"
            title="Outras Opções" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
    <div
      class="h-full mt-12 sm:mt-0 lg:h-[calc(80vh-162px)] flex overflow-hidden py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 bg-white">
      <div class="lg:flex lg:flex-shrink-0" :class="[!departments ? 'hidden' : '']">
        <div class="flex flex-col w-64 justify-between">
          <div class="flex-1 flex flex-col min-h-0 border-r justify-between border-gray-200 bg-gray-100">
            <ul class="w-full flex flex-col justify-around h-full py-5">
              <li v-for="i in menus" v-bind="i" :key="i">
                <button @click="onSelect(i)" type="button" class="w-full">
                  <div :class="
                    i.selected
                      ? 'bg-green-600 px-2 py-0 sm:px-6'
                      : 'bg-gray px-2 py-0 sm:px-6 hover:bg-green-500 text-black hover:text-white'
                  ">
                    <div class="flex space-x-4 py-10">
                      <div class="flex-shrink-0">
                        <span class="inline-block relative">
                          <div class="h-5 w-10 rounded-full"></div>
                        </span>
                      </div>
                      <div class="min-w-1 flex-2">
                        <div :class="
                          i.selected
                            ? 'text-white text-md font-medium h-2'
                            : ' text-md font-medium h-2'
                        ">
                          <h1>{{ i.nome }}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div v-if="i.selected">
                  <div v-for="o in i.items" v-bind="o" :key="o" class="bg-white px-4 py-5 sm:px-6">
                    <div class="flex space-x-3">
                      <div class="flex-shrink-0">
                        <span class="inline-block relative">
                          <img class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt />
                          <span
                            class="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"></span>
                        </span>
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="text-sm font-medium text-gray-900">
                          <a href="#" class="hover:underline">{{ o.nome }}</a>
                        </p>
                        <p class="text-sm text-gray-500">
                          <a href="#" class="hover:underline">Em trabalho</a>
                        </p>
                      </div>
                      <div class="flex-shrink-0 self-center flex">
                        <div class="relative z-30 inline-block text-left">
                          <div>
                            <Dropdown class="z-50">
                              <template #content="{ closeDropDown }">
                                <a @click="refModalScheduling.onOpenModal()"
                                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                  role="menuitem" tabindex="-1" id="menu-item-0">Novo Agendamento</a>
                              </template>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div class="lg:hidden">
          <div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> -->
            </div>
            <div>
              <button type="button" @click="departments = !departments"
                class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900">
                <span class="sr-only">Open sidebar</span>
                <!-- Heroicon name: outline/menu -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex-1 relative z-0 flex overflow-hidden">
          <main class="flex-1 relative z-0 overflow-y-hidden focus:outline-none xl:order-last">
            <!-- Start main area-->
            <div class="relative inset-0 pb-2 px-0">
              <div
                class="bg-white shadow rounded-md overflow-hidden mb-0 w-full max-h-[35rem] overflow-y-auto sm:overflow-x-auto">
                <!--  -->
                <Table :data="schedulings" :columns="columnsTab" class="lg:mb-16 mb-0 md:mb-20">
                  <template #body-cell="{ row, column, value }">
                    <template v-if="column.key === 'dropdown'">
                      <Dropdown class="lg:mr-10">
                        <template #content="{ closeDropDown }">
                          <button @click="
                            () => {
                              closeDropDown(), onOpenModal()
                            }
                          " class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                            role="menuitem" tabindex="0" id="menu-item-0">Dados do paciente</button>
                          <button @click="
                            () => {
                              close(), openModalDetails()
                            }
                          " class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                            role="menuitem" tabindex="0" id="menu-item-0">Detalhes do Agendamento</button>
                        </template>
                      </Dropdown>
                    </template>
                  </template>
                </Table>
              </div>
            </div>
            <div
              class="absolute bottom-0 w-full pr-1 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <Pagination :item-per-page="10" :total-items="300" :current-page="currentPage" :max-links-displayed="3" />
            </div>
            <!-- End main area -->
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

