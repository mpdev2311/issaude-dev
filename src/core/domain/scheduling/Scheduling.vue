<script setup lang="ts">
import { ref, onMounted, computed, reactive, watch } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useStore } from 'vuex'
import { key } from '@core/store'
import Dropdown from '@components/dropdown/Dropdown.vue'
import ModalProperties from '@components/layouts/scheduling/ModalProperties.vue'
import ModalScheduling from '@components/layouts/scheduling/ModalScheduling.vue'
import ModalStatus from '@components/layouts/scheduling/ModalStatusScheduling.vue'
import Pagination from '@components/pagination/Pagination.vue'
import Table from '@components/layouts/Table/Table.vue'
import { filterScheduling } from './scheduling-model'
import Combobox from '@components/combobox/Combobox.vue'
import Timer from '@components/timer/Timer.vue'

const store = useStore(key)
const patients = computed(() => store.getters.patients)
const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')
const departments = ref(true)
const refModalScheduling = ref(null)
const refModalProperties = ref(null)
const refModalStatus = ref(null)
const user = computed(() => store.getters.user)
const masks = {
  data: 'DD/MM/YYYY',
}

const pagination = ref({
  totalPages: 0,
  size: 0,
  totalElements: 0,
})

const filter = reactive<filterScheduling>({
  page: 1,
  size: 20,
  id_corp: user.value.id_corp,
  date: new Date(),
  id_medico: undefined,
  id_paciente: undefined,
  id_local: '',
})

const mapGetters = (getters: any) => {
  return Object.fromEntries(
    Object.keys(getters).map((getter) => [getter, computed(() => getters[getter])])
  )
}

const { schedulingStatus, schedulings, menus } = mapGetters(store.getters)

const columnsTab = ref({
  inicio: {
    label: 'Horário',
    align: 'start',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
  },
  id_paciente: {
    label: 'Paciente',
    align: 'start',
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
  status: {
    label: 'Status',
    align: 'start',
    format: (value: any) => value.nome,
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
  timer: {
    label: 'Tempo de espera',
    align: 'start',
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[34px]',
  },
  typeConsultation: {
    label: 'Tipo de consulta',
    align: 'start',
    format: (value: any) => value.nome,
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
  id_plano: {
    label: 'Plano',
    align: 'start',
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
  guia: {
    label: 'Guia',
    align: 'start',
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
  dropdown: {
    label: 'Mais detalhes',
    align: 'start',
  },
})

async function load_schedulings(date?: any) {
  if (date) {
    let [day, month, year] = date.split('/')
    filter.page = 1
    filter.date = new Date(year, month - 1, day)
  }

  try {
    if (filter.id_medico) {
      let result = await store.dispatch('LOAD_SCHEDULINGS', {
        ...filter,
        page: filter.page - 1,
      })

      pagination.value.size = result.size
      pagination.value.totalElements = result.totalElements
      pagination.value.totalPages = result.totalPages
    }
  } catch (error) {}
}
function showModalSchedulling(provider: Object, fn: Function) {
  if (refModalScheduling.value) {
    fn()
    //@ts-ignore
    refModalScheduling.value.onOpenModal(provider.id, { ...provider, apelido: provider.nome })
  }
}

function showModalProperties(value: any, fn: Function) {
  if (refModalProperties.value) {
    fn()
    //@ts-ignore
    refModalProperties.value.showModal(value)
  }
}

function showModalStatus(value: any, fn: Function) {
  if (refModalStatus.value) {
    fn()
    //@ts-ignore
    refModalStatus.value.showModal(value)
  }
}

async function getPatients(nome: string) {
  if (!nome.length) return
  await store.dispatch('SEARCH_PATIENT', {
    page: 0,
    size: 20,
    paciente_nome: nome,
    id_corp: user.value.id_corp,
  })
}

watch(
  () => filter.page,
  async (value) => {
    await load_schedulings()
  }
)

watch(
  () => filter.date,
  (value) => {
    filter.page = 1
  }
)

watch(
  () => filter.id_medico,
  async (value) => {
    if (value) {
      filter.page = 1
      await load_schedulings()
    }
  }
)

watch(
  () => filter.id_local,
  async (value) => {
    await store.dispatch('LOAD_MENU', filter)
  }
)

onMounted(async () => {
  store.dispatch('LOAD_LOCAL_ACESS')
  store.dispatch('LOAD_SCHEDULING_STATUS')
  store.dispatch('LOAD_MENU', {
    ...filter,
    id_local: filter.id_local === '' ? 1 : filter.id_local,
  })
})
</script>

<template>
  <ModalScheduling ref="refModalScheduling" @update-schedulings="load_schedulings" />
  <ModalProperties ref="refModalProperties" />
  <ModalStatus ref="refModalStatus" @update-schedulings="load_schedulings" />
  <div>
    <div class="space-y-6 -mt-5 sm:px-6 lg:px-0 lg:col-span-9">
      <div>
        <div
          class="mt-1 grid grid-cols-1 gap-6 2xl:gap-10 bg-white px-3 py-5 sm:grid-cols-6 2xl:grid-cols-12"
        >
          <div class="col-span-12 sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium text-gray-700"
              >Local de atendimento</label
            >
            <select
              id="select-local-atendimento"
              name="local"
              autocomplete="local"
              v-model="filter.id_local"
              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>Selecionar</option>
              <option v-for="(menu, id) in menus" :key="id" :value="menu.id">
                {{ menu.nome }}
              </option>
            </select>
          </div>
          <div class="col-span-12 sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium text-gray-700"
              >Status atendimento</label
            >
            <select
              id="select-status-atendimento"
              name="local"
              autocomplete="local"
              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value>Selecionar</option>
              <option v-for="i in schedulingStatus" :key="i" :value="i.id">{{ i.nome }}</option>
            </select>
          </div>
          <div class="col-span-12 sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium text-gray-700"
              >Localizar paciente</label
            >
            <Combobox
              :options="patients"
              label="nome"
              v-model="filter.id_paciente"
              @change-search="getPatients"
              hidden-icon
            >
              <!-- <template #noResults>
                  <button
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Novo
                    Paciente</button>
                </template> -->
            </Combobox>
          </div>
          <!-- <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Status do leito</label>
            <select id="location" name="location" v-model="filter.id_corp"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Em manutenção</option>
              <option selected>Em funcionamento</option>
              <option>Ocupado</option>
            </select>
          </div> -->
          <div class="col-span-12 sm:col-span-3 2xl:col-span-2">
            <label for="last-name" class="block text-sm font-medium text-gray-700">Data</label>
            <date-picker v-model="filter.date" :masks="masks" trim-weeks>
              <template #default="{ inputValue, inputEvents }">
                <div class="flex flex-col sm:flex-row justify-start items-center">
                  <div class="relative flex-grow w-full sm:w-auto">
                    <svg
                      class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <input
                      class="flex-grow pl-8 pr-2 border w-full mt-1 block py-2 px-3 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      :value="inputValue"
                      v-on="inputEvents"
                    />
                  </div>
                </div>
              </template>
            </date-picker>
          </div>
          <div class="col-span-12 mt-0 flex justify-start sm:col-span-6 2xl:col-span-1 2xl:mt-4">
            <button
              type="button"
              :title="
                filter.id_medico === undefined || filter.id_medico === ''
                  ? 'Selecione uma agenda'
                  : undefined
              "
              @click="load_schedulings()"
              class="bg-green-500 w-9 h-9 mt-2 font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-offset-transparent focus:ring-transparent"
              :class="[
                filter.id_medico === undefined || filter.id_medico === ''
                  ? 'hover:cursor-not-allowed bg-green-100'
                  : '',
                'inline-flex justify-center items-center w-full rounded-full border border-gray-300 shadow-sm p-1',
              ]"
              id="menu-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 -m-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
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
      class="h-full mt-12 sm:mt-0 lg:h-[calc(88vh-162px)] flex overflow-hidden py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 bg-white"
    >
      <div class="lg:flex lg:flex-shrink-0" :class="[!departments ? 'hidden' : '']">
        <div class="flex flex-col w-56 sm:w-64 justify-between">
          <div
            class="flex-1 flex flex-col min-h-0 border-r justify-between border-gray-200 bg-gray-50 overflow-y-auto"
          >
            <ul class="w-full flex flex-col justify-around h-auto sm:h-full py-5">
              <li v-for="menu in menus" v-bind="menu" :key="menu">
                <button @click="filter.id_local = menu.id" type="button" class="w-full">
                  <div
                    :class="
                      filter.id_local === menu.id
                        ? 'bg-green-600 px-2 py-0 sm:px-6'
                        : 'bg-gray px-2 py-0 sm:px-6 hover:bg-green-500 text-black hover:text-white'
                    "
                  >
                    <div class="flex space-x-4 py-10">
                      <div class="flex-shrink-0">
                        <span class="inline-block relative">
                          <div class="h-5 w-10 rounded-full"></div>
                        </span>
                      </div>
                      <div class="min-w-1 flex-2">
                        <div
                          :class="
                            filter.id_local === menu.id
                              ? 'text-white text-md font-medium h-2'
                              : ' text-md font-medium h-2'
                          "
                        >
                          <h1>{{ menu.nome }}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div v-if="filter.id_local === menu.id && menu.items.length">
                  <div
                    v-for="provider in menu.items"
                    :key="provider"
                    @click="filter.id_medico = provider.id"
                    class="bg-white px-4 py-5 sm:px-6 cursor-pointer hover:bg-gray-200"
                    :class="[filter.id_medico === provider.id && 'bg-gray-300']"
                  >
                    <div class="flex space-x-3">
                      <div class="flex-shrink-0">
                        <span class="inline-block relative">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <span
                            class="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"
                          ></span>
                        </span>
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="text-sm font-medium text-gray-900">
                          <a href="#" class="hover:underline">{{ provider.nome }}</a>
                        </p>
                        <p class="text-sm text-gray-500">
                          <a href="#" class="hover:underline">Em trabalho</a>
                        </p>
                      </div>
                      <div class="flex-shrink-0 self-center flex">
                        <div class="relative z-10 inline-block text-left">
                          <div>
                            <Dropdown class="z-50">
                              <template #content="{ closeDropDown }">
                                <a
                                  @click="
                                    showModalSchedulling(
                                      { ...provider, typeConsultation: menu.id },
                                      closeDropDown
                                    )
                                  "
                                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-0"
                                  >Novo Agendamento</a
                                >
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
          <div
            class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5"
          >
            <div>
              <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> -->
            </div>
            <div>
              <button
                type="button"
                @click="departments = !departments"
                class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
              >
                <span class="sr-only">Open sidebar</span>
                <!-- Heroicon name: outline/menu -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex-1 relative z-0 flex overflow-hidden">
          <main
            class="flex-1 relative z-0 overflow-y-hidden focus:outline-none xl:order-last sm:h-auto"
            :class="[!schedulings.length && 'flex items-center h-[19rem]']"
          >
            <!-- Start main area-->
            <div v-if="schedulings.length" class="relative inset-0 pb-2 px-0">
              <div
                class="bg-white shadow rounded-md overflow-hidden mb-0 w-full max-h-[35rem] h-[35rem] overflow-y-auto overflow-x-auto"
              >
                <!--  -->
                <Table
                  :data="schedulings"
                  :columns="columnsTab"
                  class="lg:mb-0 mb-0 md:mb-20"
                  scroll-top
                >
                  <template #body-cell="{ row, column, value }">
                    <template v-if="column.key === 'dropdown'">
                      <Dropdown class="lg:mr-10">
                        <template #content="{ closeDropDown }">
                          <button
                            @click="showModalProperties(row, closeDropDown)"
                            class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                            role="menuitem"
                            tabindex="0"
                            id="menu-item-0"
                          >
                            Atendimento
                          </button>
                          <button
                            class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                            role="menuitem"
                            tabindex="0"
                            id="menu-item-0"
                          >
                            Propriedades
                          </button>
                          <button
                            @click="showModalStatus(row, closeDropDown)"
                            class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                            role="menuitem"
                            tabindex="0"
                            id="menu-item-0"
                          >
                            Status
                          </button>
                          <button
                            class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full cursor-pointer"
                            role="menuitem"
                            tabindex="0"
                            id="menu-item-0"
                          >
                            WhatsApp
                          </button>
                        </template>
                      </Dropdown>
                    </template>
                    <template v-if="column.key === 'id_paciente'">
                      {{ row.patient.nome || row.id_paciente }}
                    </template>
                    <template v-if="column.key === 'id_plano'">
                      {{ row.agreementPlan.nome || row.id_plano }}
                    </template>
                    <template
                      v-if="column.key === 'timer' && row.status.nome.toLowerCase() !== 'atendido'"
                    >
                      <Timer :timer="row.inicio" />
                    </template>
                  </template>
                </Table>
              </div>
            </div>
            <div
              v-if="schedulings.length"
              class="absolute bottom-0 w-full pr-1 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
            >
              <Pagination
                :item-per-page="pagination.size"
                :total-items="pagination.totalElements"
                v-model:current-page="filter.page"
                :max-links-displayed="3"
                noRouter
              />
            </div>
            <div v-else-if="!schedulings.length" class="block mx-auto my-0">
              <div
                v-if="filter.id_medico === undefined || filter.id_medico === ''"
                class="flex"
                :class="[sm && departments ? 'hidden' : '']"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 font-bold pr-2 text-gray-600 hidden sm:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <p class="text-lg font-medium text-gray-600 select-none">
                  Selecione uma agenda para listar os pacientes.
                </p>
              </div>
              <p
                class="text-lg font-medium text-gray-600 select-none"
                v-if="
                  !schedulings.length && filter.id_medico !== '' && filter.id_medico !== undefined
                "
              >
                Nenhum agendamento localizado
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
