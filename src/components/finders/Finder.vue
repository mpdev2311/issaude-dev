<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import router from '@src/router'
export default defineComponent({
  computed: {
    ...mapState(['selectedItem']),
    ...mapGetters(['selectedItem']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },
  props: ['data', 'selectedHandle', 'id_object', 'object_name'],
  setup(_, { emit }) {
    const textSearch = ref<string>('')
    const isSelected = ref<boolean>(false)
    onMounted(async () => {
      if (router.currentRoute.value.params.id !== '0') {
      }
    })
    const onBind = (list: Array<any>) => {
      list = list.filter((c) => c.nome.includes(textSearch.value))
      return list
    }

    const onSelectItem = () => {
      isSelected.value = true
      textSearch.value = ''
      isOn.value = false
    }
    const isOn = ref<boolean>(false)
    const onClickSelect = () => {
      isOn.value = !isOn.value
      textSearch.value = ''

      if (isOn.value) {
        setTimeout(() => {
          isOn.value = false
          textSearch.value = ''
        }, 10000)
      }
    }
    return {
      isOn,
      onClickSelect,
      textSearch,
      onBind,
      isSelected,
      onSelectItem,
      store,
    }
  },
})
</script>

<template>
  <div>
    <div class="mt-1 relative ml-1 mr-1">
      <button
        role="checkbox"
        :aria-checked="isOn"
        tabindex="1"
        @click="onClickSelect"
        :class="isOn ? 'bg-white' : ''"
        type="button"
        class="bg-gray-200 rounded-md relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        <input
          disabled
          class="bg-gray-200 block truncate w-full"
          :value="id_object == 0 ? 'Selecione' : object_name"
        />
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div :class="isOn ? 'visible' : 'invisible'" class="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="account_number"
          @change="onBind(data)"
          v-model="textSearch"
          id="account_number"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="Pesquisar"
        />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div class="static">
        <ul
          :class="textSearch == '' ? 'invisible' : 'visible'"
          class="absolute mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="index in onBind(data)"
            :key="index"
            class="text-gray-900 cursor-default hover:bg-gray-100 select-none relative py-0 pl-3 pr-9"
            id="listbox-option-0"
            role="option"
          >
            <a @click.prevent="selectedHandle(index), onSelectItem()" href="#">
              <span class="font-semibold block truncate">
                {{ index.nome }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
