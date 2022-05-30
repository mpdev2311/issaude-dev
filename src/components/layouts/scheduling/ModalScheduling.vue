<script setup lang="ts">
import { useStore } from 'vuex'
import Table from '../Table/Table.vue'
import { DatePicker } from 'v-calendar'
import { Alert as iAlert } from '@core/domain/alert/alert-model'
import Modal from '../../modal/Modal.vue'
import { key } from '@core/store/store'
import { field, fieldGroup, required } from 'vue-validus'
import Combobox from '../../../components/combobox/Combobox.vue'
import { ref, watch, reactive, computed, onMounted } from 'vue'
import Pagination from '../../../components/pagination/Pagination.vue'
import Alert from '../../../components/alerts/Alert.vue'
const showOthers = ref(false)
const refAlert = ref()
const size = ref(10)
const date = ref(new Date())
const currentPage = ref(1)
const store = useStore(key)
const specialties = ref([])
const modalIsOpen = ref(false)
const user = computed(() => store.getters.user)
const freeTimes = computed(() => store.getters.freeTimes)
const patients = computed(() => store.getters.patients)
const providers = computed(() => store.getters.providers)
const localAccess = computed(() => store.getters.localAccess)
const specialtiesList = computed(() => {
  if (specialties.value.length > 1) {
    //@ts-ignore
    return specialties.value.map((p) => p.nome_especialidade).join(' - ')
  } else {
    //@ts-ignore
    return specialties.value.map((p) => p.nome_especialidade).join('')
  }
})
const pagination = ref({
  totalPages: 0,
  size: 0,
  totalElements: 0,
})

const state = reactive({
  typeConsultation: {
    id: '',
  },
  id_medico: '',
  id_local_atendimento: '',
  data_agendamento: '',
  id_dia_semana: '',
  obs: '',
  id_paciente: '',
  bloqueio: false,
  schedulingName: {
    id: '',
    id_tipo_sala: '',
  },
  id_plano: '', //Corrigir amanhã sem falta
  status: {
    id: 2,
  },
  id_corp: user.value.id_corp,
  inicio: '',
  fim: '',
  id_user: user.value.id,
  prioridade: 1000,
  encaixe: false,
  origem_agendamento: 1,
})

async function getProviders(nome: string) {
  if (!nome.length) return
  await store.dispatch('SEARCH_PROVIDER', {
    page: 0,
    size: size.value,
    id_corp: user.value.id_corp,
    id_tipo_prestador: 1,
    nao_atende: false,
    nome: nome,
  })
}

async function getPatients(nome: string) {
  if (!nome.length) return
  await store.dispatch('SEARCH_PATIENT', {
    page: 0,
    size: size.value,
    paciente_nome: nome,
    id_corp: user.value.id_corp,
  })
}

async function getHours(page = 0) {
  await store.dispatch('SEARCH_FREE_TIMES', {
    page: page,
    size: size.value,
    date: date.value,
    id_corp: user.value.id_corp,
    id_agenda: 1,
    id_local: state.typeConsultation.id,
    id_medico: state.id_medico,
  })
  pagination.value.size = freeTimes.value.size
  pagination.value.totalElements = freeTimes.value.totalElements
  pagination.value.totalPages = freeTimes.value.totalPages
}

function selectedCol(row: any) {
  state.id_user = row.idUser
  state.id_dia_semana = row.dayWeek.id
  state.bloqueio = row.bloquearOnline
  state.id_local_atendimento = row.id_local_atendimento
  state.obs = row.obs
  state.schedulingName.id = row.schedulingName.id
  state.schedulingName.id_tipo_sala = row.schedulingName.id_tipo_sala
  state.inicio = row.start
  state.fim = row.end
  state.data_agendamento = row.startDate
  state.bloqueio = row.bloquearOnline
  validate.validate('data_agendamento')
}

function onCloseModal() {
  clearStateAll()
  validate.clear()
  modalIsOpen.value = false
  emit('closeModal')
}

async function onOpenModal(id?: number, provider?: any) {
  if (id !== undefined && provider !== undefined) {
    let providers = []
    providers.push(provider)
    store.commit('SEARCH_PROVIDER', providers)
    state.id_medico = id.toString()
    state.typeConsultation.id = provider.typeConsultation
  } else {
    showOthers.value = true
  }
  date.value = new Date()
  currentPage.value = 1
  await getHours()
  modalIsOpen.value = true
}

async function sendScheduling() {
  let message = {} as iAlert
  validate.validate()
  if (validate.invalid) return

  let save = await store.dispatch('NEW_SCHEDULING', state)

  if (save.status === 200 || save.status === 201) {
    let date = state.data_agendamento
    onCloseModal()
    refAlert.value.showAlert({
      title: 'Agendamento',
      message: 'Agendamento adicionado',
      fixed: false,
      success: true,
      show: true,
    } as iAlert)
    emit('updateSchedulings', date)
    // await store.dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Agendamento adicionado!')
    return
  }
  refAlert.value.showAlert({
    title: 'Agendamento',
    message: 'Erro ao adicionar agendamento!',
    fixed: false,
    success: false,
    show: true,
  } as iAlert)
  // store.dispatch('MESSAGE_STORE_ERROR_PUSH', 'Erro ao adicionar agendamento!')
}

function clearState() {
  state.id_user = ''
  state.id_dia_semana = ''
  state.bloqueio = false
  state.id_local_atendimento = ''
  state.obs = ''
  state.schedulingName.id = ''
  state.inicio = ''
  state.fim = ''
  state.data_agendamento = ''
  state.bloqueio = false
}

function clearStateAll() {
  state.typeConsultation.id = ''
  state.id_medico = ''
  state.id_local_atendimento = ''
  state.data_agendamento = ''
  state.id_dia_semana = ''
  state.obs = ''
  state.id_paciente = ''
  state.bloqueio = false
  state.schedulingName.id = ''
  state.schedulingName.id_tipo_sala = ''
  state.id_plano = ''
  state.status.id = 2
  state.id_corp = user.value.id_corp
  state.inicio = ''
  state.fim = ''
  state.id_user = user.value.id
  state.prioridade = 1000
  state.encaixe = false
  state.origem_agendamento = 1
  pagination.value.totalPages = 0
  pagination.value.size = 0
  pagination.value.totalElements = 0
  date.value = null
  store.commit('SEARCH_PROVIDER', [])
  store.commit('SEARCH_FREE_TIMES', [])
}

watch(
  () => state.id_paciente,
  async (value) => {
    if (!String(value).length) {
      state.id_plano = ''
      return
    }
    if (patients.value.length) {
      let consult = patients.value.find((patient: any) => patient.id == value)
      if (consult) {
        let plans = consult.planos.find((plan: any) => plan.principal)
        if (plans) {
          state.id_plano = plans.id
          return
        }
        if (consult.planos.length) {
          state.id_plano = consult.planos[0].id
          return
        } else {
          store.dispatch('MESSAGE_STORE_ERROR_PUSH', 'Paciente selecionado não tem plano de saúde!')
        }
      }
    }

    await getHours()
  }
)

watch(
  () => state.id_medico,
  (valor) => {
    //@ts-ignore
    let _medico = providers.value.filter((prov) => prov.id === Number(valor))
    if (_medico !== null && _medico.length) {
      _medico = _medico[0]
      for (let key in _medico) {
        if (key.toLowerCase().includes('especialidade') && _medico[key] !== null) {
          //@ts-ignore
          specialties.value.push(_medico[key])
        }
      }
      return
    }
    specialties.value = []
  },
  { deep: true }
)

watch(date, async (value) => {
  if (state.id_medico && value) {
    validate.validate('date')
    if (currentPage.value != 1) {
      currentPage.value = 1
    } else {
      getHours()
    }
  }
})

watch(currentPage, async (value) => {
  if (state.id_medico && state.id_paciente && date.value) {
    await getHours(value - 1)
  }
})

watch(
  () => state.id_medico,
  (value, old) => {
    if (value !== old) {
      clearState()
    }
  }
)

onMounted(async () => {
  if (!localAccess.value.length) {
    await store.dispatch('LOAD_LOCAL_ACESS')
  }
})

const columnsTable = {
  startDate: {
    label: 'Data',
    align: 'start',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
  },
  start: {
    label: 'Inicia',
    align: 'start',
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
  end: {
    label: 'Finaliza',
    align: 'start',
    cellClass:
      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
  },
}

const validate = fieldGroup(
  {
    id_medico: field([required()]),
    id_paciente: field([required()]),
    data_agendamento: field([required()]),
    typeConsultation: fieldGroup({
      id: field([required()]),
    }),
    date: field([required()], date),
  },
  state
)

const emit = defineEmits(['closeModal', 'updateSchedulings'])

defineExpose({
  onOpenModal,
})
</script>

<template>
  <Alert ref="refAlert" />
  <Modal
    title="Agendamento"
    :modal-is-open="modalIsOpen"
    @on-close-modal="onCloseModal"
    mg
    @save="sendScheduling"
  >
    <template #body class="overflow-auto">
      <div class="mt-5 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium text-gray-700"
            >Profissinal</label
          >
          <Combobox
            :options="providers"
            label="apelido"
            v-model="state.id_medico"
            @change-search="getProviders"
          />
          <p v-if="validate.id_medico.invalid" class="mt-2 text-sm text-red-600">
            Selecione um médico.
          </p>
        </div>
        <div class="col-span-12 sm:col-span-6 relative">
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Especialidades</label
          >
          <!-- <select id="specialty" v-model="state.typeConsultation.id"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option v-for="(op, idx) in specialties" :key="idx" :value="op.id">{{ op.nome_especialidade }} || {{ op.id }}
            </option>
          </select> -->
          <input
            type="text"
            :value="specialtiesList"
            readonly
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md read-only:bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div class="mt-4 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Paciente</label>
          <Combobox
            :options="patients"
            label="nome"
            v-model="state.id_paciente"
            @change-search="getPatients"
          >
            <template #noResults>
              <button
                class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Novo Paciente
              </button>
            </template>
          </Combobox>
          <p v-if="validate.id_paciente.invalid" class="mt-2 text-sm text-red-600">
            Selecione um paciente.
          </p>
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium text-gray-700"
            >Mostrar Horários a partir de</label
          >
          <date-picker v-model="date" trim-weeks :min-date="new Date()">
            <template #default="{ inputValue, inputEvents }">
              <div class="flex flex-col sm:flex-row justify-start items-center">
                <div class="relative flex-grow">
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
          <p v-if="validate.date.invalid" class="mt-2 text-sm text-red-600">Selecione uma data.</p>
        </div>
        <div class="col-span-12 sm:col-span-6 relative" :class="[!showOthers && 'invisible']">
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Local Atendimento</label
          >
          <select
            id="specialty"
            v-model="state.typeConsultation.id"
            :disabled="!showOthers"
            :readonly="!showOthers"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Selecionar</option>
            <option v-for="i in localAccess" :key="i" :value="i.localAttendance.id">
              {{ i.localAttendance.local }}
            </option>
          </select>
          <p v-if="validate.typeConsultation.id.invalid" class="mt-2 text-sm text-red-600">
            Selecione o local de atendimento.
          </p>
        </div>
        <div class="col-span-12 sm:col-span-6 relative">
          <label for="first-name" class="block text-sm font-medium text-gray-700"
            >Outras Opções</label
          >
          <button
            @click="showOthers = !showOthers"
            class="rounded-full py-2 px-2 mt-1 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 hover:cursor-pointer text-white"
            title="Outras Opções"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- <div class="mt-6 grid grid-cols-12 gap-6 border-t-2 border-gray-300 pt-3">
        <div class="col-span-12 flex flex-row items-center">
          <span>Exibindo</span>
          <select id="exibir"
            class="ml-3 mr-3 block w-20 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span>Resultados por página</span>
        </div>
      </div> -->
      <div class="mt-4">
        <div
          :class="[
            validate.invalid ? 'max-h-[11.80rem] h-[11.80rem]' : 'max-h-[16.5rem] h-[16.5rem]',
          ]"
          class="bg-white shadow rounded-md overflow-hidden mb-4 w-full overflow-y-auto scroll-smooth"
        >
          <Table
            :data="freeTimes.content"
            :columns="columnsTable"
            reactive
            scrollTop
            clickable
            @row-click="selectedCol"
          />
        </div>
        <p v-if="validate.data_agendamento.invalid" class="mt-2 text-sm text-red-600">
          Selecione uma data.
        </p>
        <div class="flex flex-row flex-wrap justify-between mt-0">
          <Pagination
            :item-per-page="pagination.size"
            :total-items="pagination.totalElements"
            v-model:current-page="currentPage"
            :max-links-displayed="3"
            noRouter
          />
        </div>
      </div>
    </template>
  </Modal>
</template>

<style>
.vc-popover-content-wrapper {
  @apply z-50 !important;
}
</style>
