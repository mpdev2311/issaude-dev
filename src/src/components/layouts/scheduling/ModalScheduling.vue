<script setup lang="ts">
import Modal from '../../modal/Modal.vue';
import { ref, watch } from 'vue';
import { useStore } from 'vuex'
import { key } from '../../../core/store/store'
import Pagination from '../../../components/pagination/Pagination.vue';
import Table from '../Table/Table.vue';

const storePatient = useStore(key)
const storeScheduling = useStore(key)
const storeProviders = useStore(key)

const currentPage = ref(1)

const provider = ref('')

const emit = defineEmits(['closeModal'])

const modalIsOpen = ref(false)

const onCloseModal = () => {
  emit('closeModal')
  modalIsOpen.value = false
}

const onOpenModal = () => {
  modalIsOpen.value = true
}

watch(provider, async (value) => {
  await storePatient.dispatch('SEARCH_PATIENT', { paciente_nome: provider.value, page: 0, size: 10, id_corp: 1 })
  console.log(storePatient.getters.listPatients)
})

defineExpose({
  onOpenModal
})

const data = [
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
  { data: '14/03/2022', horario: '10:00:00 a 10:30:00', local: 'Hospital 12', obs: 'OBSS' },
]

const columnsTable = {
  'data': {
    label: 'Data',
    align: 'start',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
  },
  'horario': {
    label: 'Horário',
    align: 'start',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
  },
  'local': {
    label: 'Local',
    align: 'start',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
  },
  'obs': {
    label: 'OBS.',
    align: 'start',
    cellClass: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
  }
}

</script>

<template>
  <Modal title="Agendamento" :modal-is-open="modalIsOpen" @on-close-modal="onCloseModal" mg>
    <template #body class="overflow-auto">
      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Profissinal</label>
          <input
            v-model="provider"
            type="text"
            id="professional"
            autocomplete="off"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label for="last-name" class="block text-sm font-medium text-gray-700">Especialidade</label>
          <select
            id="specialty"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outros</option>
          </select>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-700"
          >Mostrar Horários a partir de</label>
          <input
            v-model="provider"
            type="text"
            id="professional"
            autocomplete="off"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Outras Opções</label>
          <button
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
      <div class="mt-6 grid grid-cols-12 gap-6 border-t-2 border-gray-300 pt-6">
        <div class="col-span-12 flex flex-row items-center">
          <span>Exibindo</span>
          <select
            id="exibir"
            class="ml-3 mr-3 block w-20 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>10</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>Resultados por página</span>
        </div>
      </div>
      <div class="mt-6 mb-4">
        <!-- <table class="relative text-left w-full max-w-full border-collapse table-auto h-56 overflow-auto">
          <thead class="bg-gray-50 w-full border-b-2 border-gray-300">
            <tr>
              <th
                scope="col"
                class="sticky px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >Data</th>
              <th
                scope="col"
                class="sticky px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >Horário</th>

              <th
                scope="col"
                class="sticky px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >Local</th>
              <th
                scope="col"
                class="sticky px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >Obs.</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 h-56">
            <tr v-for="i in 10" v-bind="i" :key="i" class="bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20/02/2022</td>

              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >10:00:00 a 10:30:00</td>

              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SANTA MÀRA</td>

              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">OBS</td>
            </tr>
          </tbody>
        </table> -->
        <div
                  class="bg-white shadow rounded-md overflow-hidden mb-4 w-full max-h-[16rem] overflow-y-auto "
                >
                  <!--  -->
                  <Table
                    :data="data"
                    :columns="columnsTable"
                  />
                </div>
        
        <div class="flex flex-row flex-wrap justify-between mt-1">
          <Pagination
            :item-per-page="10"
            :total-items="300"
            :current-page="currentPage"
            :max-links-displayed="3"
            noRouter
            @update:current-page="e => currentPage = e"
          />
        </div>
      </div>
    </template>
  </Modal>
</template>