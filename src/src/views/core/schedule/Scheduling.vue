<template>
  <div>
    <!-- FIM DO MODAL -->
    <Modal title="Dados do paciente" :modal-is-open="modalIsOpen" @on-close-modal="onCloseModal">
      <template #body>
        <div class="mt-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-6">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
            >Data de nascimento</label>
            <input
              type="date"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <label for="last-name" class="block text-sm font-medium text-gray-700">Sexo</label>
            <select
              id="location"
              name="location"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>Masculino</option>
              <option selected>Feminino</option>
              <option>Outros</option>
            </select>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-6">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
            >Telefone comercial</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <label for="last-name" class="block text-sm font-medium text-gray-700">Telefone celular</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="mt-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-6">
            <label for="first-name" class="block text-sm font-medium text-gray-700">CPF</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <label for="last-name" class="block text-sm font-medium text-gray-700">RG</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="mt-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-6">
            <label for="first-name" class="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <label for="last-name" class="block text-sm font-medium text-gray-700">Sobrenome</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
        </div>
      </template>
    </Modal>

    <ModalScheduling ref="refModalScheduling" />
    <ModalDetails :open-modal="modalDetails" @close-modal="modalDetails = false" />
    <!-- FIM DO MODAL -->

    <div class="space-y-6 -mt-5 sm:px-6 lg:px-0 lg:col-span-9">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div>
        <h3 class="text-2xl font-bold uppercase leading-6 font-medium text-gray-900 text-center">Agendamentos</h3>
        <div class="mt-1 grid grid-cols-12 gap-6 lg:grid-flow-col bg-white p-3">
          <div class="col-span-full sm:col-span-4 md:col-span-12 lg:col-span-4">
            <Calendar />
          </div>
          <div class="col-span-full sm:col-span-4 md:col-span-12 lg:col-span-4 my-6">
            <div class="grid grid-cols-1">
              <div class="col-span-12">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                >Local de atendimento</label>
                <select
                  id="select-local-atendimento"
                  name="local"
                  autocomplete="local"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value>Selecionar</option>
                  <option
                    v-for="i in localAccess"
                    :key="i"
                    :value="i.id"
                  >{{ i.localAttendance.local }}</option>
                </select>
              </div>
              <div class="col-span-12 mt-2">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                >Status atendimento</label>
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
              <div class="col-span-12 mt-2">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                >Status do leito</label>
                <select
                  id="location"
                  name="location"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Em manutenção</option>
                  <option selected>Em funcionamento</option>
                  <option>Ocupado</option>
                </select>
              </div>
              <div class="col-span-12 mt-2">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                >Localizar paciente</label>
                <input
                  type="text"
                  value
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          
          </div>
          <div class="col-span-full sm:col-span-4 md:col-span-12 lg:col-span-4 my-6">
            <Glide>
              <template #body>
                <div
                  class="relative my-auto bg-white max-w-full h-full pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                >
                  <dt>
                    <p class="mx-4 text-sm font-medium text-gray-500 truncate">Pendenetes de Triagem</p>
                  </dt>
                  <dd class="mx-4 pb-6 flex items-baseline sm:pb-7">
                    <div class="max-w-sm max-h-full">
                      <img
                        src="data:image/png;base64,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"
                        alt
                      />
                    </div>
                    <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-2 py-2 sm:px-6">
                      <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                          View all
                          <span class="sr-only">Avg. Open Rate stats</span>
                        </a>
                      </div>
                    </div>
                  </dd>
                </div>
              </template>
            </Glide>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="h-full mt-12 sm:mt-0 lg:h-[calc(50vh-71px)] flex overflow-hidden py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 bg-white"
    >
      <!-- Static sidebar for desktop -->
      <div class="lg:flex lg:flex-shrink-0" :class="[!departments ? 'hidden' : '']">
        <div class="flex flex-col w-64 justify-between">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div
            class="flex-1 flex flex-col min-h-0 border-r justify-between border-gray-200 bg-gray-100"
          >
            <ul class="w-full flex flex-col">
              <li v-for="i in menus" v-bind="i" :key="i">
                <button @click="onSelect(i)" type="button" class="w-full">
                  <div
                    :class="
                      i.selected
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
                            i.selected
                              ? 'text-white text-md font-medium h-2'
                              : ' text-md font-medium h-2'
                          "
                        >
                          <h1>{{ i.nome }}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div v-if="i.selected">
                  <div
                    v-for="o in i.items"
                    v-bind="o"
                    :key="o"
                    class="bg-white px-4 py-5 sm:px-6 hover:bg-gray-200"
                  >
                    <div class="flex space-x-3">
                      <div class="flex-shrink-0">
                        <span class="inline-block relative">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt
                          />
                          <span
                            class="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"
                          ></span>
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
                            <Dropdown>
                              <template #content="{ closeDropDown }">
                                <a
                                  @click="refModalScheduling.onOpenModal()"
                                  class="text-gray-700 block px-4 py-2 text-sm"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-0"
                                >Novo Agendamento</a>

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
          <main class="flex-1 relative z-0 overflow-y-hidden focus:outline-none xl:order-last">
            <!-- Start main area-->
            <div class="relative inset-0 pb-2 px-0">
              <div>
                <div
                  class="bg-white shadow rounded-md overflow-hidden mb-0 w-full max-h-[27rem] overflow-y-auto bg-gray-100"
                >
                  <!--  -->
                  <Table
                    :data="schedulings"
                    :columns="columnsTab"
                  >
                    <template #body-cell="{ row, column, value }">
                      <template v-if="column.key === 'dropdown'">
                        <Dropdown class="lg:mr-10">
                          <template #content="{ closeDropDown }">
                            <button
                              @click="
                                () => {
                                  closeDropDown(), onOpenModal()
                                }
                              "
                              class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full"
                              role="menuitem"
                              tabindex="0"
                              id="menu-item-0"
                            >Dados do paciente</button>
                            <button
                              @click="
                                () => {
                                  close(), openModalDetails()
                                }
                              "
                              class="text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full"
                              role="menuitem"
                              tabindex="0"
                              id="menu-item-0"
                            >Detalhes do Agendamento</button>
                          </template>
                        </Dropdown>
                      </template>
                    </template>
                  </Table>

                  <!-- {{ schedulings }} -->
                  <div
                    class="px-5 py-4 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
                  >
                    <Pagination
                      :item-per-page="10"
                      :total-items="300"
                      :current-page="currentPage"
                      :max-links-displayed="3"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- End main area -->
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { key, store } from '../../../core/store/store'
import Modal from '../../../components/modal/Modal.vue'
import Dropdown from '../../../components/dropdown/Dropdown.vue'
import Calendar from '../../../components/calendar/Calendar.vue'
import ModalDetails from '../../../components/layouts/scheduling/ModalDetails.vue'
import ModalScheduling from '../../../components/layouts/scheduling/ModalScheduling.vue'
import Glide from '../../../components/glide/Glide.vue'
import Pagination from '../../../components/pagination/Pagination.vue'
import Table from '../../../components/layouts/Table/Table.vue'

export default defineComponent({
  components: {
    Modal,
    Calendar,
    Dropdown,
    ModalScheduling,
    ModalDetails,
    Glide,
    Pagination,
    Table
  },

  computed: {
    ...mapState(['localAccess', 'schedulingStatus', 'schedulings', 'menus']),
    ...mapGetters(['localAccess', 'schedulingStatus', 'schedulings', 'menus']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup() {
    const route = useRoute()
    const departments = ref(false)
    const modalIsOpen = ref(false)
    const modalDetails = ref(false)
    const refModalScheduling = ref(null)
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

    onMounted(async () => {
      store.dispatch('LOAD_LOCAL_ACESS')
      store.dispatch('LOAD_SCHEDULING_STATUS')
      store.dispatch('LOAD_SCHEDULINGS')
      store.dispatch('LOAD_MENU')
    })

    return {
      modalDetails,
      modalIsOpen,
      onOpenModal,
      onCloseModal,
      onSelect,
      openModalDetails,
      currentPage,
      refModalScheduling,
      departments,
      columnsTab
    }
  },
})
</script>
