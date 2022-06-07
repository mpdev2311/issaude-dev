<template>
  <div>
    <h3 class="text-gray-700 text-2xl font-semibold">Cadastro de Abordagem</h3>

    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-t-lg shadow-md">
          <form class="space-y-4 divide-y divide-gray-200">
            <div class="space-y-8 divide-y divide-gray-200">
              <div class="pt-1">
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Registros
                    </label>
                    <div class="mt-1">
                      <input
                        disabled
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="approach.id"
                      />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="local" class="block text-sm font-medium text-gray-700">
                      Selecionar Especialidade
                    </label>
                    <div>
                      <select
                        v-model="approach.id_especialidade"
                        id="select-local-atendimento"
                        name="local"
                        autocomplete="local"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Selecionar</option>
                        <option v-for="i in specialties" :key="i" :value="i.id">
                          {{ i.nome_especialidade }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <!--
        <div class="sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">
           Usuário
          </label>
          <div class="mt-1">
            <select v-model="specialty.id_user"  id="tipo" name="tipo" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
             <option v-for="item in user" :key="item.nome" v-bind:value="item.id">{{item.nome}}</option>
          </select>
          </div>
        </div>

        


        <div class="sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">
           Corporação
          </label>
          <div class="mt-1">
           <select v-model="specialty.id_corp"  id="corporation" name="corporation" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
             <option v-for="item in usercorporation" :key="item.nome" v-bind:value="item.id">{{item.nome}}</option>
          </select>
          </div>
        </div>
 -->
                  <div class="sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">
                      Nome
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="family-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="approach.descricao"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex justify-end px-4 py-3 bg-gray-50 rounded-b-lg text-right sm:px-6">
      <button
        @click="onCancel()"
        type="button"
        class="space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
      >
        Voltar
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        @click="onSave()"
        type="button"
        class="space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4"
      >
        Salvar
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Approach } from '@domain/approach/Approach-model'
import { mapGetters, mapMutations, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import { Specialty } from '@domain/specialty/specialty-model'

export default defineComponent({
  components: {},
  methods: {
    ...mapMutations(['approaches', 'approach']),
  },

  computed: {
    ...mapState(['approach', 'specialties', 'modalApprocVerify']),
    ...mapGetters(['approach', 'specialties', 'modalApprocVerify']),
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

    const specialty = ref<Specialty>({
      nome_especialidade: '',
      codigo: 0,
      id: 0,
      codigo2: 0,
      id_user: 0,
      id_corp: 0,
      ativo: true,
      codigo_3: '',
    })

    store.dispatch('APPROACH_STORE_SET_BLANK', approach.value)

    onMounted(async () => {
      //
      //  if(store.getters.modalApprocVerify === true){
      //     approach.value.id = 0
      //     approach.value.descricao = ""
      //     approach.value.id_especialidade = 0
      //     approach.value.id_user = 0
      //     approach.value.id_corp = 0
      //     approach.value.data_gravacao =""
      //     approach.value.ativo = true

      //     //store.getters.approach.id = 0
      //     store.dispatch('APPROACH_STORE_SET_BLANK', approach.value)
      //  }else{
      if (router.currentRoute.value.params.id !== '0') {
        await store.dispatch('APPROACH_STORE_LOAD_BY_ID', router.currentRoute.value.params.id)
        await store.dispatch('SPECIALTY_STORE_LOAD')
        await store.dispatch('SPECIALTY_STORE_LOAD_BY_ID', specialty.value.id)
      } else {
        await store.dispatch('APPROACH_STORE_SET_BLANK', approach.value)
        await store.dispatch('SPECIALTY_STORE_LOAD')
      }
      // }
    })

    const onCancel = async () => {
      router.push('/approaches')
    }

    const onSave = async () => {
      await store.dispatch('APPROACH_STORE_SAVE')
    }

    return {
      onSave,
      onCancel,
    }
  },
})
</script>
