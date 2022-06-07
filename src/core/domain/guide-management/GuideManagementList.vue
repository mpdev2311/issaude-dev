<template>
  <div>
    <NotificationAlert />
    <h3 class="text-gray-700 text-3xl font-semibold">Gestão de Guias</h3>
    <div class="mt-4">
      <div class="mt-6">
        <div
          class="rounded-lg mt-4 px-4 py-5 bg-white grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1"
        >
          <div class="sm:col-span-1">
            <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
              Prontuário
            </label>
            <div class="mt-3">
              <input
                type="text"
                v-model="inputFilter.prontuario"
                name="p_consulta"
                id="p_consulta"
                autocomplete="p_consulta"
                class="w-full xl:w-40 ml-2 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md transition duration-500 ease-in-out"
              />
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              ></div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="first_name" class="block text-sm font-medium text-gray-700">
              Paciente
            </label>
            <div class="mt-2 max-w-5xl">
              <Combobox
                :options="state.patients"
                label="nome"
                v-model="inputFilter.id_paciente"
                @change-search="onSearchPatient"
                hidden-icon
              >
                <!-- <template #noResults>
                  <button
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Novo
                    Paciente</button>
                </template> -->
              </Combobox>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
              Período de Busca:
            </label>
            <div class="mt-2 px-2 flex">
              <input
                v-model="inputFilter.data_ini"
                type="date"
                pattern="\d{4}-\d{1,2}-\d{1,2}"
                name="dataInicio"
                id="dataInicio"
                autocomplete="dataInicio"
                class="w-30 ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-2 rounded-r border border-gray-300 rounded-md transition duration-500 ease-in-out"
              />
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              ></div>
              <span>a</span>
              <input
                v-model="inputFilter.data_fim"
                type="date"
                pattern="\d{4}-\d{1,2}-\d{1,2}"
                name="dataFim"
                id="dataFim"
                autocomplete="dataFim"
                class="w-30 ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-2 rounded-l border border-gray-300 rounded-md transition duration-500 ease-in-out"
              />
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              ></div>
              <button
                @click="alert('crud componentes')"
                type="button"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-3"
              >
                Atualizar
              </button>
            </div>
          </div>

          <div class="sm:col-span-1 m-2">
            <label for="nome" class="block text-sm font-medium text-gray-700"> Tipo de Guia </label>
            <div class="mt-1">
              <select
                v-model="inputFilter.tipoGuia"
                name="agenda"
                id="agenda"
                autocomplete="agenda"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option v-bind:value="0">Selecione</option>
                <option v-for="i in guidetypes" :key="i" :value="i.id">{{ i.nome }}</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-2 m-2">
            <label for="nome" class="block text-sm font-medium text-gray-700"> Convênio </label>
            <div class="mt-1">
              <Combobox
                  v-model="inputFilter.convenio"
                  class="bg-gray-100"
                  autocomplete="given-name"
                  :options="state.healthProfessionals?.content ?? []"
                  label="nome"
                  @change-search="onSearchHealthProfessional"
                  hidden-icon
                >
                </Combobox>             
            </div>
          </div>

          <div class="sm:col-span-1">
            <label for="nome" class="block text-sm font-medium text-gray-700">
              Local Atendimento
            </label>
            <div class="mt-1">
              <select
                v-model="inputFilter.local_atend"
                name="agenda"
                id="agenda"
                autocomplete="agenda"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option v-bind:value="0">Selecione</option>
                <option v-for="i in localAccess.content" :key="i" :value="2">
                  {{ i.localAttendance.local }}
                </option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="nome" class="block text-sm font-medium text-gray-700"> Profissional </label>
            <div class="mt-1">
              <select
                v-model="inputFilter.profissional"
                name="profissional"
                id="profissional"
                autocomplete="profissional"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
              >
                <option v-bind:value="0">Selecione</option>
                <option v-for="i in providers.content" :key="i" :value="i.id">{{ i.nome }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- drop -->

    <div class="mt-4 flex flex-col md:flex-row">
      <button
        class="rounded-l text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-5"
      >
        <span class="flex justify-end px-4 py-0">
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          PDF
        </span>
      </button>
      <button class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-5">
        <span class="flex justify-end px-4 py-0">
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Excel
        </span>
      </button>
      <div class="flex">
        <div class="relative"></div>
      </div>
    </div>
    <!--  -->

    <!-- nova table -->

    <div class="flex-1 mt-3 relative z-0 flex overflow-hidden">
      <main class="flex-1 relative z-0 overflow-y-hidden focus:outline-none xl:order-last">
        <!-- Start main area-->
        <div class="relative inset-0 pb-2 px-0">
          <div>
            <div
              class="bg-white shadow rounded-md overflow-hidden mb-0 w-full max-h-[27rem] overflow-y-auto"
            >
              <!--  -->
              <Table
                v-if="guideManagements !== 0"
                :data="guideManagements.content"
                :columns="columnsTab"
              >
                <template #header-column="{ column }">
                  <template v-if="column.label === 'drop-header'">
                    <th
                      class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      <Dropdown class="lg:mr-10">
                        <template #content="{ closeDropDown }">
                          <button
                            @click="
                              () => {
                                closeDropDown(), onCreate()
                              }
                            "
                            class="flex text-left text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 w-full"
                            role="menuitem"
                            tabindex="0"
                            id="menu-item-0"
                          >
                            Nova Guia
                            <span
                              class="inline-flex justify-center border border-transparent shadow-sm text-sm font-medium rounded-md text-green-600"
                            >
                              <svg
                                class="h-5 w-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </template>
                      </Dropdown>
                    </th>
                  </template>
                </template>
                <template #body-cell="{ row, column, value }">
                  <template v-if="column.key === 'iditem'">{{ row.id }}</template>
                  <template v-if="column.key === 'convenio'">{{ row.agreementPlan.id }}</template>

                  <template v-if="column.key === 'dropdown'">
                    <Dropdown class="lg:mr-10">
                      <template #content="{ closeDropDown }">
                        <button
                          @click="
                            () => {
                              closeDropDown(), onEdit(row)
                            }
                          "
                          class="flex text-left text-gray-700 px-4 py-1 text-sm hover:bg-gray-100 w-full"
                          role="menuitem"
                          tabindex="0"
                          id="menu-item-0"
                        >
                          <span
                            class="text-indigo-600 rounded-md text-sm hover:bg-indigo-500 focus:outline-none"
                          >
                            <svg
                              class="h-4 w-4 m-1"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </span>
                          <span class="m-0">Editar</span>
                        </button>
                        <button
                          @click="
                            () => {
                              closeDropDown(), onDelete(row.id)
                            }
                          "
                          class="flex text-left text-gray-700 px-4 py-1 text-sm hover:bg-gray-100 w-full"
                          role="menuitem"
                          tabindex="0"
                          id="menu-item-0"
                        >
                          <span
                            class="text-red-600 rounded-md text-sm hover:bg-red-600 focus:outline-none"
                          >
                            <svg
                              class="h-4 w-4 m-1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                          <span class="m-0">Excluir</span>
                        </button>
                      </template>
                    </Dropdown>
                  </template>
                </template>
              </Table>

              <div
                class="px-5 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
              >
                <Pagination
                  :item-per-page="pagination.size"
                  :total-items="pagination.totalElements"
                  v-model:current-page="currentPage"
                  :max-links-displayed="3"
                  noRouter
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, reactive, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { mapGetters, mapState, useStore, mapMutations } from 'vuex'
import { key, store } from '@core/store'
import { PAGINATION_SIZE } from '@core/constaints'
import Pagination from '@components/pagination/Pagination.vue'
import Table from '@components/layouts/Table/Table.vue'
import Dropdown from '@components/dropdown/Dropdown.vue'
import Combobox from '@components/combobox/Combobox.vue'
import { Patient } from './guide-management-model'
import { PatientService } from '@domain/patient/patient-service'
import { RequestPatient } from '@domain/patient/patient'
import HealthProfessionalService from '@domain/health-professional/health-professional-service'
import { HealthProfessional, RequestHealthProfessional } from '@domain/health-professional/health-professional-model'

export default defineComponent({
  components: {
    Dropdown,
    Pagination,
    Table,
    Combobox,
  },
  methods: {
    ...mapMutations([
      'guideManagement',
      'guideManagements',
      'providers',
      'scheduleNames',
      'guidetypes',
      'localAccess',
    ]),
    ...mapGetters([
      'guideManagement',
      'guideManagements',
      'scheduleNames',
      'providers',
      'guidetypes',
      'localAccess',
    ]),
  },
  computed: {
    ...mapState(['guideManagements', 'providers', 'guidetypes', 'localAccess']),
    ...mapGetters(['guideManagements', 'providers', 'guidetypes', 'localAccess']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup() {
    const patientService = new PatientService()

    const router = useRouter()
    const route = useRoute()
    const currentPage = ref(1)
    const user = computed(() => store.getters.user)
    const pagination = ref({
      totalPages: 0,
      size: 0,
      totalElements: 0,
    })

    let state = reactive({
      patients: [] as Patient[],
      healthProfessionals: [] as HealthProfessional[],
    })

    const inputFilter = reactive({
      tipoGuia: 0,
      prontuario: 0,
      id_paciente: '',
      paciente: '',
      data_ini: '',
      data_fim: '',
      convenio: '',
      local_atend: 0,
      profissional: 0,
    })

    const columnsTab = ref({
      iditem: {
        label: 'ID',
        align: 'start',
        format: (value: any) => value,
        cellClass:
          'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
      },
      data_atendimento: {
        label: 'Data',
        align: 'start',
        cellClass:
          'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
      },
      patient: {
        label: 'Paciente',
        align: 'start',
        format: (value: any) => value.nome,
        cellClass:
          'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
      },
      id: {
        label: 'Guia Prestator',
        align: 'start',
      },
      numero_guia: {
        label: 'Guia Operadora',
        align: 'start',
        cellClass:
          'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
      },
      convenio: {
        label: 'Convênio',
        align: 'start',
        // format: (value: any) => value,
        cellClass:
          'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
      },
      provider: {
        label: 'Profissional',
        align: 'start',
        format: (value: any) => value.nome,
        cellClass:
          'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
      },

      dropdown: {
        label: 'Mais detalhes',
        align: 'start',
      },
      'drop-header': {
        label: 'drop-header',
        align: 'start',
      },
    })

    onMounted(async () => {
      await store.dispatch('LOAD_LOCAL_ACESS')
      await store.dispatch('PROVIDER_STORE_LOAD')
      await store.dispatch('GUIDES_TYPE_STORE_LOAD')
      await store.dispatch('GUIDE_MANAGEMENT_STORE_LOAD')
    })

    const onSearchPatient = async (name: string) => {
      let requestPatient = new RequestPatient(0, PAGINATION_SIZE, name, store.getters.user.id_corp)
      const patientResults = await patientService.searchPatient(requestPatient)
      state.patients = patientResults.content
    }

    const onEdit = (dados) => {
      switch (dados.tipo) {
        case 3:
          router.push(`/guide-sadt/${dados.id}`)
          break
        case 5:
          router.push(`/guide-management/${dados.id}`)
          break
        case 6:
          router.push(`/guide-honorarios/${dados.id}`)
          break
        case 7: //Solicitação de Internação
          router.push(`/guide-hospitalization/${dados.id}`)
          break
        case 10: //STJ - Guia de Consultas
          router.push(`/guide-management/${dados.id}`)
          break
        case 11: //STJ - Guia de Procedimento
          alert('Selecione um Tipo de Guia')
          break
        case 21: //SUS - Guia de Consulta
          alert('Selecione um Tipo de Guia')
          break
        case 22: //SUS - Guia de Procedimento
          alert('Selecione um Tipo de Guia')
          break

        default:
          alert('Selecione um Tipo de Guia')
          break
      }
    }

    const onDelete = async (id) => {
      await store.dispatch('GUIDE_MANAGEMENT_STORE_DELETE_BY_ID', id)
    }

    const onCreate = () => {
        switch (inputFilter.tipoGuia) {
          case 3:
            router.push(`/guide-sadt/0`)
            break
          case 5:
            router.push(`/guide-management/0`)
            break
          case 6:
            router.push(`/guide-honorarios/0`)
            break
          case 7: //Solicitação de Internação
            router.push(`/guide-hospitalization/0`)
            break
          case 10: //STJ - Guia de Consultas
            router.push(`/guide-management/0`)
            break
          case 11: //STJ - Guia de Procedimento
            alert('Selecione um Tipo de Guia')
            break
          case 21: //SUS - Guia de Consulta
            alert('Selecione um Tipo de Guia')
            break
          case 22: //SUS - Guia de Procedimento
            alert('Selecione um Tipo de Guia')
            break

          default:
            alert('Selecione um Tipo de Guia')
            break
        }
      }

      watch(
        currentPage,
        async (value) => {
          await getListGuides(value - 1)
        },
        { immediate: true }
      )

      const getListGuides = async (page = 0) => {
        let result = await store.dispatch('GUIDE_MANAGEMENT_STORE_LOAD')
        pagination.value.size = result.value.size
        pagination.value.totalElements = result.value.totalElements
        pagination.value.totalPages = result.value.totalPages
      }

       const onSearchHealthProfessional = async (name: string) => {
        const requestHealthProfessional = new RequestHealthProfessional(
          0,
          PAGINATION_SIZE,
          name,
          store.getters.user.id_corp,
          false,
          3,
          false
        )      
        state.healthProfessionals = await HealthProfessionalService.getAll(requestHealthProfessional)
      }

 
    return {
      onCreate,
      onEdit,
      onDelete,
      currentPage,
      columnsTab,
      inputFilter,
      onSearchPatient,
      pagination,
      state,
      onSearchHealthProfessional
    }
  },
})
</script>
