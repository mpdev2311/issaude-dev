<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Modal from '@components/modal/Modal.vue'
import ModalStatus from './ModalStatusScheduling.vue'
import { key } from '@core/store'
const store = useStore(key)

const modalIsOpen = ref(false)
const state = ref(null)
const user = computed(() => store.getters.user)
const managements = computed(() => store.getters.managements)
const refStatus = ref(null)

async function showModal(data?: any) {
  modalIsOpen.value = true
  if (data !== undefined) {
    state.value = data
  }

  await getManagements()
}

function closeModal() {
  modalIsOpen.value = false
  state.value = null
}

async function getManagements() {
  await store.dispatch('SET_MANAGEMENTS', {
    page: 0,
    size: 20,
    id_rota: 716,
    id_corp: user.value.id_corp,
  })
}

function managementSelected(service: string) {
  switch (service.toLowerCase()) {
    case 'definir status':
      //@ts-ignore
      if (refStatus.value) {
        refStatus.value.showModal()
      }
      break

    default:
      break
  }
}

defineExpose({
  showModal,
})
</script>

<template>
  <Modal
    title="Ordem de Atendimento"
    :modal-is-open="modalIsOpen"
    @on-close-modal="closeModal"
    sm
    hidden-footer
    title-center
  >
    <template #body>
      <div class="w-full h-full relative flex flex-col items-center justify-center">
        <button
          v-for="(management, id) in managements"
          :key="id"
          @click="managementSelected(management.servico)"
          class="w-7/12 my-0.5 py-4 px-4 border-2 border-gray-300 text-center rounded-md font-semibold text-base hover:bg-gray-300 hover:border-gray-400"
        >
          {{ management.servico }}
        </button>
      </div>
    </template>
  </Modal>
  <ModalStatus id="refStatus" ref="refStatus" />
</template>
