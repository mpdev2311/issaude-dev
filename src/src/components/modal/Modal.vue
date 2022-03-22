<script setup lang="ts">

interface Props {
  title?: string
  modalIsOpen: boolean,
  full?: boolean,
  lg?: boolean
  mg?: boolean
  md?: boolean
  sm?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  full: false,
  lg: false,
  mg: false,
  md: false,
  sm: true
})
const emit = defineEmits(['onCloseModal'])

</script>

<template>
  <div
    :class="`modal ${!props.modalIsOpen && 'opacity-0 pointer-events-none'
    } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
  >
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div
      class="modal-container bg-white mx-auto rounded shadow-lg z-50 overflow-y-hidden"
      :class="[
        props.full && 'w-full h-full' ||
        props.lg && 'w-9/12 h-10/12' ||
        props.mg && 'w-[50%] h-[83%]' ||
        props.md && 'w-6/12 h-8/12' ||
        props.sm && 'w-3/12 h-[51%]'
      ]"
    >
      <div
        @click="emit('onCloseModal')"
        class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
      >
        <svg
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          />
        </svg>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content text-left w-full relative">
        <!--Title-->
        <div class="flex justify-between items-center pb-3 px-3 py-4 border-b shadow-sm">
          <p class="text-2xl font-bold">{{ props.title }}</p>
          <div class="modal-close cursor-pointer z-50" @click="emit('onCloseModal')">
            <svg
              class="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
          </div>
        </div>
        <!--Body-->
        <div
          class="w-full relative overflow-y-auto px-3 my-1"
          :class="[
            props.full && 'w-full h-full' ||
            props.lg && 'h-[calc(80vh-100px)]' ||
            props.mg && 'h-[calc(80vh-100px)]' ||
            props.md && 'h-[calc(80vh-259px)]' ||
            props.sm && 'max-h-[36rem] box-border'
          ]"
        >
          <slot name="body"></slot>
        </div>
      </div>
      <!--Footer-->
      <div class="w-full flex justify-end py-2 shadow-2xl border-t">
        <button
          @click="emit('onCloseModal')"
          type="button"
          class="space-x-4 inline-flex justify-center px-5 py-2.5 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
        >Salvar</button>
      </div>
    </div>
  </div>
</template>