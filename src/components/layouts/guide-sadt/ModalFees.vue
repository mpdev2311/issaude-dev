<template>
  <Modal
    class="  lg:grid-cols-2  lg:ml-auto lg:pr-36  lg:pl-1/3 md:mx-auto "
    title="Procedimentos"
    :modal-is-open="modalIsOpen"
    @on-close-modal="onCloseModal"
    lg
    @save="onSave"
  >
    <template #body>
      <div class="mt-6 pl-1 mb-4  gap-4">
        <div class="col-span-11 sm:col-span-4">
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Faturamento de:</label
          >
          <select
            id="location"
            disabled
            name="location"
            v-model="billsSadt.tipo"
            class="mt-1 block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option v-bind:value="''">Selecione</option>
            <option v-for="i in listIinvoicing" :key="i.id" :value="i.id">
              {{ i.name }}
            </option>
          </select>
        </div>
             
         <div class="grid grid-cols-2 mt-0 ">                 
            <div class=" flex col-span-11  sm:col-span-1 px-1 py-2 m-2 ">
          <input
            type="checkbox"
            @click="checkboxValidate()"
            :value="cirurgia"
            v-model="cirurgia"
            class="mr-1 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
          />
          <span class=" px-2 mt-0 "> Cirurgia</span>
        </div>
        
        <div class=" flex  lg:flex-row  px-3  py-4 lg:m-1   ">
          <input
            type="checkbox"
            @click="checkboxValidate()"
            :value="searizar"
            v-model="searizar"
            class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
          />
          <span class=" px-2 mt-0  "> Searizar</span>
        </div>
      </div>
        

        <div class="col-span-11 sm:col-span-4 m-1">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Produtos:</label
          ><!--model codigo_tiss-->
          <Combobox
            :options="state.products"
            label="descri"
            v-model="billsSadt.id_produto"
            @change-search="onSearchProduct"
            hidden-icon
          >
            <!-- <template #noResults>
                  <button
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Novo
                    Paciente</button>
                </template> -->
          </Combobox>
        </div>
      </div>
         
        <div class="grid grid-cols-12 ">            
             <div class="col-span-11 sm:col-span-4 m-2 py-2">
           <label for="first-name" class="block text-sm font-medium text-gray-700"
          >Tipo Executante:</label
         >
         <select
          v-model="billsSadt.tipo_executante"
          id="select-local-atendimento"
          name="local"
          autocomplete="local"
          class="mt-0 block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out"
         >
          <option value="">Selecionar</option>
          <option v-for="i in getPerformeType" :key="i" :value="i.id">{{ i.descricao }}</option>
         </select>
      </div> 

      <div class="col-span-11 sm:col-span-4 m-2">
        <label for="last-name" class="block text-sm font-medium text-gray-700">Executante:</label>
        <!-- <Combobox :options="providers" label="nome"  v-model="billsSadt.id_medico" @change-search="getProviders" hidden-icon /> -->

        <input
          type="text"
          name="last-name"
          id="last-name"
          autocomplete="family-name"
          v-model="billsSadt.id_medico"
          class="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
        />
      </div>
     </div>
     

      <div class="mt-4 pl-1 grid grid-cols-12 gap-4 m-2">
        <div class="col-span-11 sm:col-span-4">
          <label for="last-name" class="block text-sm font-medium text-gray-700">Quantidade</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            v-model="billsSadt.quant"
            @change="calc()"
            autocomplete="family-name"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        <div class="col-span-11 sm:col-span-4">
          <label for="first-name" class="block text-sm font-medium text-gray-700"
            >Acrescimo/Desconto:</label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            @change="calc()"
            v-model="billsSadt.acrescimo"
            autocomplete="family-name"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
      </div>
      <div class="mt-4 pl-1  sm:grid sm:grid-cols-12 gap-4 m-2">
        <div class="col-span-11 sm:col-span-4">
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Valor Unitário:</label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            v-model="billsSadt.valor_unitario"
            @change="calc()"
            autocomplete="family-name"
            class="mt-4 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        <div class="col-span-11 sm:col-span-4">
          <label for="first-name" class="block text-sm font-medium text-gray-700"
            >Valor total:</label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            disabled
            v-model="billsSadt.valor_total"
            autocomplete="family-name"
            class="mt-4 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div> 
             <div class=" mt-3 pl-1 grid grid-cols-2   gap-6 m-2 ">
        <div class="col-span-11 sm:col-span-7">
          <label for="last-name" class="block text-sm font-medium text-gray-700 ">Tiss</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autocomplete="family-name"
            v-model="billsSadt.codigo_tiss"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
      </div>    
      </div>

   
    </template>
  </Modal>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watchEffect,
  defineProps,
  defineEmits,
  reactive,
} from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapMutations, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import Modal from '@components/modal/Modal.vue'
import { Bill } from '@domain/guide-sadt/bill/bill-model'
import Combobox from '@components/combobox/Combobox.vue'
import { AmbProcedure } from '@domain/amb-procedure/amb-procedure-model'

export default defineComponent({
  components: {
    Combobox,
    Modal,
  },
  methods: {
    ...mapMutations(['getPerformeType', 'billsSadts', 'billsSadt', 'providers']),
  },

  computed: {
    ...mapState(['getPerformeType', 'billsSadts', 'billsSadt', 'providers']),
    ...mapGetters(['getPerformeType', 'billsSadts', 'billsSadt', 'providers']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  props: {
    openModal: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  emits: ['closeModal'],

  setup(props, { emit }) {
    const router = useRouter()
    const store = useStore(key)
    const modalIsOpen = ref(false)
    const searizar = ref(false)
    const cirurgia = ref(false)

    const billsSadt = ref<Bill>({
      id_paciente: 1,
      id_protocolo: 2,
      data_prescricao: '23/05/2022 11:54:00',
      codigo_tiss: '',
      quant: 0,
      valor_unitario: 0,
      valor_total: 0,
      tipo: 0,
      linha: null,
      conta: 1,
      acrescimo: 0.0,
      id_medico: '',
      id_plano: 1,
      glosa: 0.0,
      obs: null,
      data_recebimento: null,
      recebido: false,
      guia: 1,
      id_orcamento: 0,
      id_produto: null,
      id_tipo_recebimento: null,
      id_pagamento_medico: null,
      via_acesso: 'U',
      tecnica_utilizada: 'C',
      usuario: 'suport',
      usuario_encerrou: 'suport',
      data_gravacao: '23/05/2022 11:54:00',
      id_corp: 1,
      id_glosa: null,
      data_recebimento_usuario: null,
      repre_conta: null,
      inicio: '11:54:00',
      fim: '11:54:00',
      cid_c: null,
      grau_part: '12',
      ativo: true,
      id_conta_corrente: null,
      id_user: 1,
      nfe: null,
      codigo_prestador: null,
      guia_secundaria: null,
      id_remessa: null,
      opme: false,
      data_baixa_financeiro: null,
      id_user_recebeu_financeiro: null,
      provider: {
        id: null,
        nome: null,
      },
      honorario: {},
    })

    // store.dispatch('BILLS_STORE_SET_BLANK', billsSadt.value)

    onMounted(async () => {
      await store.dispatch('BILLS_STORE_LOAD')
      await store.dispatch('PERFORMER_TYPE_STORE_LOAD')
      const { id } = router.currentRoute.value.params

      if (id !== '0') {
        await store.dispatch('BILLS_STORE_LOAD_BY_ID', router.currentRoute.value.params.id)
      } else {
        store.getters.guideManagement.tipo = 3
        await store.dispatch('BILLS_STORE_SET_BLANK', billsSadt.value)
      }
    })

    const onCancel = async () => {
      router.push('/guide-managements')
    }

    const onSave = async () => {
      await store.dispatch('BILLS_STORE_SAVE')
      onCloseModal()
    }

    const checkboxValidate = () => {
      if (searizar) {
        cirurgia.value = false
      }
      if (cirurgia) {
        searizar.value = false
      }
    }

    const listIinvoicing = [
      { id: 0, name: 'Honorários' },
      { id: 1, name: 'Material' },
      { id: 2, name: 'Medicamento' },
      { id: 4, name: 'Taxas/Diárias' },
    ]

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

    let calc = () => {
      let desconto = store.getters.billsSadt.acrescimo / 100
      let valorCompra = store.getters.billsSadt.valor_unitario * store.getters.billsSadt.quant
      let valorDesconto = valorCompra * desconto
      store.getters.billsSadt.valor_total = valorCompra - valorDesconto //(store.getters.billsSadt.valor_unitario * store.getters.billsSadt.quant) - desconto
    }

    async function getProviders(nome: string) {
      if (!nome.length) return
      await store.dispatch('SEARCH_PROVIDER', {
        page: 0,
        size: 20, //size.value,
        id_corp: 1, //user.value.id_corp,
        id_tipo_prestador: 1,
        nao_atende: false,
        nome: nome,
      })
    }

    let state = reactive({
      products: [] as AmbProcedure[],
    })

    const onSearchProduct = async (descricao: string) => {
      if (!descricao.length) return
      const productResults = await ambProcedureService.searchAmbProcedure(descricao)
      state.products = productResults.content
    }

    return {
      onSave,
      onCancel,
      modalIsOpen,
      searizar,
      cirurgia,
      checkboxValidate,
      listIinvoicing,
      onOpenModal,
      onCloseModal,
      billsSadt,
      calc,
      getProviders,
      onSearchProduct,
      state,
    }
  },
})
</script>
