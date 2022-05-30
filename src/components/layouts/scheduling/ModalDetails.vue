<script setup lang="ts">
import Modal from '../../modal/Modal.vue'
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { key } from '@core/store/store'

const storePatient = useStore(key)
const storeScheduling = useStore(key)

const props = defineProps<{ openModal: boolean }>()
const emit = defineEmits(['closeModal'])

const modalIsOpen = ref(false)

const onCloseModal = () => {
  emit('closeModal')
  modalIsOpen.value = false
}

const onOpenModal = () => {
  modalIsOpen.value = true
}

watchEffect(() => {
  if (props.openModal) {
    onOpenModal()
  }
})
</script>

<template>
  <Modal
    title="Detalhes Agendamento"
    :modal-is-open="modalIsOpen"
    @on-close-modal="onCloseModal"
    lg
  >
    <template #body>
      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium text-gray-700"
            >Data de nascimento</label
          >
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
          <label for="first-name" class="block text-sm font-medium text-gray-700"
            >Telefone comercial</label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            autocomplete="family-name"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Telefone celular</label
          >
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
</template>
