<script setup lang="ts">
//@ts-ignore
import moment from 'moment'
import { axios } from '../../../core/services/request'
import Modal from '../../modal/Modal.vue';
import { ref, watch, reactive, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import { key } from '../../../core/store/store'
import Pagination from '../../../components/pagination/Pagination.vue';
import Combobox from '../../../components/combobox/Combobox.vue';
import Table from '../Table/Table.vue';
const store = useStore(key)
const currentPage = ref(1)
const size = ref(10)

const pagination = ref({
  totalPages: 0,
  size: 0,
  totalElements: 0
})

const state = reactive({
  id_tipo_consulta: '',
  id_medico: '',
  id_paciente: '',
  id_local_atendimento: '',
  data_agendamento: '',
  id_dia_semana: '',
  obs: '',
  ativo: true
})

const listas = reactive({
  medicos: [],
  pacientes: [],
  especialidades: [],
  datas_disponiveis: [],
})

async function getMedicos(nome: string) {
  if (!nome.length) return
  const { data } = await axios.get(`/providers/filters?page=0&size=20&id_corp=1&id_tipo_prestador=1&nao_atende=false&nome=${nome}`)
  console.log(data.content);
  listas.medicos = data.content
}

async function getPacientes(nome: string) {
  if (!nome.length) return
  const { data } = await axios.get(`/patients?page=0&id_corp=1&paciente_nome=${nome}&size=20`)
  listas.pacientes = data.content
}

async function getHorarios(page = 0) {
  const { data } = await axios.get(`/schedulings/scheduling-acess/free-times?page=${page}&size=${size.value}&id_provider=${state.id_medico}&start_date=2022-04-19&end_date=2022-06-19&id_agenda=1&id_tipo_sala=1&id_local=1&id_corp=1`)
  console.log(data);
  formatarHorarios(data.content)
  pagination.value.size = data.size
  pagination.value.totalElements = data.totalElements
  pagination.value.totalPages = data.totalPages

}

async function formatarHorarios(horarios) {
  listas.datas_disponiveis = []
  if (horarios.length) {
    for (let key in horarios) {
      let data = moment(horarios[key]).format('DD/MM/YYYY')
      let horario = moment(horarios[key]).format('HH:mm:ss')
      listas.datas_disponiveis.push({ date: data, hours: horario })
    }
    return
  }
  listas.datas_disponiveis = []
}

// async function eventPagination(e) {
//   currentPage.value = e
//   console.log(currentPage.value - 1);
//   await getHorarios(currentPage.value - 1)
// }


const emit = defineEmits(['closeModal'])

const modalIsOpen = ref(false)

const onCloseModal = () => {
  emit('closeModal')
  modalIsOpen.value = false
}

const onOpenModal = () => {
  modalIsOpen.value = true
}

defineExpose({
  onOpenModal
})

const columnsTable = {
  'date': {
    label: 'Data',
    align: 'start',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
  },
  'hours': {
    label: 'Horário',
    align: 'start',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
  },
  // 'obs': {
  //   label: 'OBS.',
  //   align: 'start',
  //   cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
  // }
}

watch(() => state.id_medico, valor => {
  let _medico = listas.medicos.filter(med => med.id === valor)
  if (_medico !== null && _medico.length) {
    _medico = _medico[0]
    for (let key in _medico) {
      if (key.toLowerCase().includes('especialidade') && _medico[key] !== null) {
        console.log(_medico[key]);
        listas.especialidades.push(_medico[key])
      }
    }
    return
  }
  listas.especialidades = []
})

watch(currentPage, async (value) => {
  await getHorarios(value - 1)
})
onBeforeMount(() => moment.locale('pt-br'))
</script>

<template>
  <Modal title="Agendamento" :modal-is-open="modalIsOpen" @on-close-modal="onCloseModal" mg>
    <template #body class="overflow-auto">
      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Profissinal</label>
          <Combobox :options="listas.medicos" label="apelido" v-model="state.id_medico" @change-search="getMedicos" />
        </div>
        <div class="col-span-12 sm:col-span-6 relative absolute">
          <label for="last-name" class="block text-sm font-medium text-gray-700">Especialidade</label>
          <select id="specialty" v-model="state.id_tipo_consulta"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option v-for="(op, idx) in listas.especialidades" :key="idx" :value="op.id">{{ op.nome_especialidade }}
            </option>
          </select>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Paciente</label>
          <Combobox :options="listas.pacientes" label="nome" v-model="state.id_paciente" @change-search="getPacientes">
            <template #noResults>
              <button
                class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Novo
                Paciente</button>
            </template>
          </Combobox>
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Mostrar Horários a partir de</label>
          <input v-model="provider" type="text" id="professional" autocomplete="off"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <div class="col-span-12">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Outras Opções</label>
          <button @click="getHorarios()"
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
      <div class="mt-6 grid grid-cols-12 gap-6 border-t-2 border-gray-300 pt-3">
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
      </div>
      <div class="my-3">
        <div class="bg-white shadow rounded-md overflow-hidden mb-4 w-full max-h-[12.75rem] overflow-y-auto scroll-smooth">
          <Table :data="listas.datas_disponiveis" :columns="columnsTable" reactive scrollTop />
        </div>
        <div class="flex flex-row flex-wrap justify-between mt-0">
          <Pagination :item-per-page="pagination.size" :total-items="pagination.totalElements" v-model:current-page="currentPage"
            :max-links-displayed="3" noRouter />
        </div>
      </div>
    </template>
  </Modal>
</template>