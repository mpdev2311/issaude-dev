<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    aria-live="assertive"
    class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
  >
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->

      <div
        class="w-full flex flex-col items-center space-y-4 sm:items-end"
        v-for:="i in messages.messages"
      >
        <transition
          enter-active-class="transform ease-out duration-300 transition"
          enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="i.opened"
            class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div v-if="i.type === 'error'">
                    <ExclamationIcon class="h-6 w-6 text-red-400" aria-hidden="true" />
                  </div>
                  <div v-if="i.type === 'success'">
                    <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
                  </div>
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-sm font-medium text-gray-900">
                    {{ i.type === 'error' ? 'Error' : 'Success' }}
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ i.message }}
                  </p>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    @click="onClose(i)"
                    class="bg-white rounded-md p-4 rounded-md bg-gray-50 inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close</span>
                    <XIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { mapGetters, mapMutations, mapState, useStore } from 'vuex'
import { CheckCircleIcon } from '@heroicons/vue/outline'
import { XIcon, ExclamationIcon } from '@heroicons/vue/solid'
import { key, store } from '@core/store'

export default defineComponent({
  props: [],

  components: {
    CheckCircleIcon,
    ExclamationIcon,
    XIcon,
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  methods: {
    ...mapMutations(['messages']),
  },

  computed: {
    ...mapGetters(['messages']),

    ...mapState(['messages']),
  },

  setup(props) {
    const onClose = (i) => {
      i.opened = false
      setTimeout(() => store.dispatch('MESSAGE_STORE_CLOSE_MESSAGE', i.uid), 2000)
    }

    return {
      onClose,
    }
  },
})
</script>
