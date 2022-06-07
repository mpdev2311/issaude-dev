<script setup lang="ts">

interface Props {
  title?: string
  modalIsOpen: boolean,
  full?: boolean,
  lg?: boolean
  mg?: boolean
  md?: boolean
  sm?: boolean
  titleCenter: boolean
  hiddenFooter?: boolean
  classBody: string
  classContainer?: string
}

const props = withDefaults(defineProps<Props>(), {
  full: false,
  lg: false,
  mg: false,
  md: false,
  sm: true,
  hiddenFooter: false,
  titleCenter: false,
  classBody: '',
  classContainer: ''
})
const emit = defineEmits(['onCloseModal', 'saveModal', 'save'])

function save() {
  emit('saveModal')
  emit('save')
}

</script>

<template>
  <div
    :class="`modal ${!props.modalIsOpen && 'opacity-0 pointer-events-none'
    } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
  >
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div
      class="modal-container bg-white mx-auto rounded shadow-lg z-50 overflow-y-hidden h-full w-full"
      :class="[
        props.full && 'sm:w-full sm:h-full' ||
        props.lg && 'sm:w-9/12 sm:h-10/12' ||
        props.mg && 'sm:w-[100%] md:w-[50%] sm:h-[83%]' ||
        props.md && 'sm:w-6/12 sm:h-8/12' ||
        props.sm && 'sm:w-3/12 sm:h-[51%]',
        props.classContainer
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
        <div class="flex items-center pb-3 px-3 py-4" :class="[props.title.length && 'border-b  shadow-sm', !props.titleCenter && 'justify-between']">
          <span v-if="props.titleCenter" class="hidden sm:block sm:w-[10%]"></span>
          <p class="text-2xl font-bold" :class="[props.titleCenter && 'sm:w-[80%] sm:text-center']">{{ props.title }}</p>
          <div class="modal-close cursor-pointer z-50" :class="[props.titleCenter && 'w-[10%]']" @click="emit('onCloseModal')">
            <svg
              class="fill-current text-black"
              :class="[props.titleCenter && 'float-right']"
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
          class="w-full relative overflow-y-auto px-3 my-1 h-[calc(95vh-100px)]"
          :class="[            
            props.full && 'w-full h-full' ||
            props.lg && 'sm:h-[calc(80vh-100px)]' ||
            props.mg && 'sm:h-[calc(80vh-100px)]' ||
            props.md && 'sm:h-[calc(80vh-259px)]' ||
            props.sm && 'sm:h-[24rem] box-border',
            props.classBody
          ]"
        >
          <slot name="body"></slot>
        </div>
      </div>
      <!--Footer-->
      <div v-if="!props.hiddenFooter" class="w-full flex justify-end py-2 shadow-2xl border-t">
        <slot name="footer">
          <button
            @click.prevent="save()"
            type="button"
            class="space-x-4 inline-flex justify-center px-5 py-2.5 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
          >Salvar</button>
        </slot>
      </div>
    </div>
  </div>
</template>