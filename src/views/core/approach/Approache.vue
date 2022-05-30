<template>
  <div>
    <ApprocheFormComponent />

    <!-- <div class="flex justify-end px-4 py-3 bg-gray-50 rounded-b-lg text-right sm:px-6 bg-gray-900">
      <button @click="onCancel()" type="button" class="space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2">
        Voltar
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>
      </button>
      <button @click="onSave()" type="button" class="space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4">
        Salvar 
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      </button>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapState, useStore } from 'vuex'
import ApprocheFormComponent from '../../../components/layouts/Approach/ApproacheFormComponent.vue'
import { Approach } from '@core/domain/approach/Approach-model'
import { key } from '@core/services/request'
import { store } from '@core/store/store'

export default defineComponent({
  components: {
    ApprocheFormComponent,
  },

  computed: {
    ...mapState(['approach', 'specialties']),
    ...mapGetters(['approach', 'specialties']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()

    const approach = ref<Approach>({
      id: 0,
      descricao: '',
      id_especialidade: 0,
      id_user: 0,
      id_corp: 0,
      data_gravacao: '',
      ativo: true,
    })

    onMounted(async () => {
      store.dispatch('MODAL_APPROACH_VERIFY', false)
    })

    const onCancel = async () => {
      router.push('/approaches')
    }

    const onSave = async () => {
      await store.dispatch('APPROACH_STORE_SAVE')
      router.push('/approaches')
      await store.dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Abordagem salva com sucesso!')
    }

    return {
      onSave,
      onCancel,
    }
  },
})
</script>
