<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: ['data', 'selectedItems'],
  setup(_) {
    const isOn = ref<boolean>(false)
    const isAll = ref<boolean>(false)
    const textSearch = ref<string>('')
    const onClickSelect = (data) => {
      
      isOn.value = !isOn.value
     
    }
    const onSelectChange =  (i, data) => {
      if (!data) return []

      if (!i) return

      data.forEach(element => {
        if(element.nome === i.nome){
          element.selected = !element.selected
        }   
        if(element.selected === false){
          data = data.filter((c) => c.selected === true)
        }     
      });
      
      return data
    }
    const onBind = (list) => {
      

      if (list) {
        list = list.filter((c) => c.nome.includes(textSearch.value))

        if (list.every((c) => c.selected)) isAll.value = true
        if (isAll.value === true && list.some((c) => c.selected === false)) isAll.value = false
      }

      return list
    }
    const onSelectAll = (list) => {
      list.forEach((c) => { 
        c.selected = !isAll.value

        if(c.selected === false){
          list = list.filter((d)=> d.selected === true)
        }
      })
      return list
    }
    return {
      isOn,
      isAll,
      textSearch,
      onClickSelect,
      onSelectAll,
      onBind,
      onSelectChange,
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
        @click="onClickSelect(data)"
        :class="isOn ? 'bg-gray-200' : ''"
        type="button"
        class="
          bg-white
          relative
          w-full
          border border-gray-300
          rounded-md
          shadow-sm
          pl-3
          pr-10
          py-2
          text-left
          cursor-default
          focus:outline-none
          focus:ring-1 focus:ring-indigo-500
          focus:border-indigo-500
          sm:text-sm
        "
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        <span class="block truncate">
          ({{
            data
              ? data.filter((c) => c.selected === true)
                ? data.filter((c) => c.selected === true).length
                : 0
              : 0
          }}) selecionados
        </span>
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
          class="
            focus:ring-indigo-500
            focus:border-indigo-500
            block
            w-full
            pr-10
            sm:text-sm
            border-gray-300
            rounded-md
          "
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
      <ul
        :class="isOn ? 'visible' : 'invisible'"
        class="
          absolute
          mt-1
          w-full
          bg-white
          shadow-lg
          max-h-60
          rounded-md
          py-1
          text-base
          ring-1 ring-black ring-opacity-5
          overflow-auto
          focus:outline-none
          sm:text-sm
        "
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <li
          @click="selectedItems(onSelectAll(onBind(data)))"
          class="text-gray-900 cursor-default hover:bg-gray-100 select-none relative py-2 pl-3 pr-9"
          id="listbox-option-0"
          role="option"
        >
          <a href="#">
            <span class="font-semibold block truncate"> TODOS ({{ data ? data.length : 0 }}) </span>
          </a>
          <span
            v-if="isAll"
            class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
        <li
          @click="selectedItems(onSelectChange(i, onBind(data)))"
          v-for="i in onBind(data)"
          :key="i"
          class="text-gray-900 cursor-default hover:bg-gray-100 select-none relative py-2 pl-3 pr-9"
          id="listbox-option-0"
          role="option"
        >
          <a href="#">
            <span class="font-semibold block truncate">
              {{ i.nome }}
            </span>
          </a>
          <span
            v-if="i.selected"
            class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>