<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '@core/store'
import Modal from '@components/modal/Modal.vue'
import { ref, computed } from 'vue'
import { generateSuccessAlert } from '@core/helpers/alert'

const store = useStore(key)
const modalIsOpen = ref(false)
const state = ref<any | null>(null)
const user = computed(() => store.getters.user)
const emit = defineEmits(['updateSchedulings'])
const schedulingStatus = computed(() => store.getters.schedulingStatus)

async function showModal(_state?: any) {
  if (_state !== undefined) {
    state.value = _state
  }
  modalIsOpen.value = true
}

async function updateStatus(id: number) {
  if (state.value !== null) {
    const update = await store.dispatch('UPDATE_STATUS_SCHEDULING', {
      id: state.value.id,
      id_plano: state.value.id_plano,
      status: {
        id: id,
      },
      id_corp: state.value.id_corp,
      id_user: user.value.id,
    })

    if (update.status === 200 || update.status === 201) {
      let date = state.value.data_agendamento
      closeModal()
      generateSuccessAlert('Agendamento', 'Status Atualizado.')
      emit('updateSchedulings', date)
    }
  }
}

function closeModal() {
  modalIsOpen.value = false
  state.value = null
}

defineExpose({
  showModal,
})
</script>

<template>
  <Modal
    title="Definir Status"
    id="refStatus"
    ref="refStatus"
    :modal-is-open="modalIsOpen"
    @on-close-modal="closeModal"
    sm
    hidden-footer
    title-center
  >
    <template #body>
      <div class="w-full h-auto relative flex flex-col items-center justify-center">
        <button
          v-for="(status, id) in schedulingStatus"
          :key="id"
          @click="updateStatus(status.id)"
          class="w-7/12 my-0.5 py-4 px-4 border-2 border-gray-300 text-center rounded-md font-semibold text-base hover:bg-gray-300 hover:border-gray-400"
        >
          {{ status.nome }}
        </button>
      </div>
    </template>
  </Modal>
</template>
