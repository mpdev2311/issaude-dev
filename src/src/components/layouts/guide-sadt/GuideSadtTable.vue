<template>
  <div>
    <!-- <NotificationAlert /> -->
    <!-- <Modal title="Dados do paciente" :modal-is-open="modalIsOpen" @on-close-modal="onCloseModal" lg>
      <template #body>
         <div class="mt-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-6">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
            >Data de nascimento</label>
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
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
            >Telefone comercial</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <label for="last-name" class="block text-sm font-medium text-gray-700">Telefone celular</label>
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
    </Modal> -->
     <ModalFees :open-modal="modalFees" @close-modal="modalFees = false" />
    
    <!-- drop -->
<!-- <div class="mt-4 flex flex-col md:flex-row">         
         <button class="rounded-l text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-5">
              <span class="flex justify-end px-4 py-0">  
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg> PDF
              </span>
         </button>
         <button class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-5">
              <span class="flex justify-end px-4 py-0">  
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg> Excel
              </span>
         </button>
         <div class="flex">
            <div class="relative">
                  
            </div>
         </div>
      </div> -->
    <!--  -->
 
      <!-- nova table -->

      <div class="flex-1 mt-3 relative z-0 flex overflow-hidden">
          <main class="flex-1 relative z-0 overflow-y-hidden focus:outline-none xl:order-last">
            <!-- Start main area-->
            <div class="relative inset-0 pb-2 px-0">
              <div>
                <div
                  class="bg-white shadow rounded-md overflow-hidden mb-0 w-full max-h-[27rem] overflow-y-auto bg-gray-100"
                >
                  <!--  -->
                  <Table v-if="billsSadts !== 0"
                    :data="billsSadts.content"
                    :columns="columnsTab"
                  >
                    <template #header-column="{ column }">
                      <template v-if="column.label === 'drop-header'">
                        <th
                          class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                         <Dropdown class="lg:mr-10">
                          <template #content="{ closeDropDown }">
                            <button
                               @click="
                                () => {
                                  closeDropDown(), openModalFees()
                                }
                              "
                              class="flex text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full"
                              role="menuitem"
                              tabindex="0"
                              id="menu-item-0"
                            >Nova Procedimento
                              <span class="inline-flex justify-center border border-transparent shadow-sm text-sm font-medium rounded-md text-green-600">
                                <svg class="h-5 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                              </span>
                            </button>                           
                          </template>
                        </Dropdown>
                        </th>
                      </template>
                    </template>
                    <template #body-cell="{ row, column, value }">
                       <template v-if="column.key === 'iditem'">{{ row.id }}</template>
                      <!-- <template v-if="column.key === 'convenio'">{{ row.agreementPlan.id }}</template> -->
                      
                      <template v-if="column.key === 'dropdown'">
                        <Dropdown class="lg:mr-10">
                          <template #content="{ closeDropDown }">
                            <button
                              @click="
                                () => {
                                  closeDropDown(), onEdit(row.id)
                                }
                              "
                              class="flex text-left text-gray-700 block px-4 py-1 text-sm hover:bg-gray-100 w-full"
                              role="menuitem"
                              tabindex="0"
                              id="menu-item-0"
                            >
                            <span class=" text-indigo-600 rounded-md text-sm hover:bg-indigo-500 focus:outline-none">
                              <svg class="h-4 w-4 m-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </span>
                            <span class="m-0">Editar</span>
                            </button>
                            <button
                              @click="
                                () => {
                                  closeDropDown(), onDelete(row.id)
                                }
                              "
                              class="flex text-left text-gray-700 block px-4 py-1 text-sm hover:bg-gray-100 w-full"
                              role="menuitem"
                              tabindex="0"
                              id="menu-item-0"
                            >
                              <span class="text-red-600 rounded-md text-sm hover:bg-red-600 focus:outline-none ">
                                <svg class="h-4 w-4 m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                              </svg>
                              </span>
                              <span class="m-0">Excluir</span>
                            </button>
                          </template>
                        </Dropdown>
                      </template>
                    </template>
                  </Table>
            
                  <div
                    class="px-5 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
                  >
                   <!-- <Pagination 
                    :item-per-page="pagination.size" 
                    :total-items="pagination.totalElements"
                    v-model:current-page="currentPage" 
                    :max-links-displayed="3" noRouter /> -->
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
         <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-20">   
            <div class="sm:col-span-6"></div> 
            <div class="sm:col-span-6"></div> 
            <div class="sm:col-span-6"></div>    
            <div class="sm:col-span-6"></div> 
                   
        </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { mapGetters,mapMutations, mapState, useStore } from "vuex";
import { key, store } from "../../../../src/core/store/store";
import Pagination from '../../../components/pagination/Pagination.vue';
import Table from '../../../components/layouts/Table/Table.vue';
import Dropdown from '../../../components/dropdown/Dropdown.vue';
import Modal from '../../../components/modal/Modal.vue'
import ModalFees from '../../../components/layouts/guide-sadt/ModalFees.vue'

export default defineComponent({

  components: {
    Dropdown,
    Pagination,
    Table,
    Modal,
    ModalFees
  },
 methods: {
    ...mapMutations([
      'billsSadts',
      'guideManagements',
       'localAccess',
       'providers',
       'guidetypes'
    ]),
  },
  computed:{
    ...mapState([
      'billsSadts',
      'guideManagements',
       'localAccess',
       'providers',
       'guidetypes'
      ]),
    ...mapGetters([
      'billsSadts',
      'guideManagements',
      'localAccess',
      'providers',
      'guidetypes'
    ]),
  },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  setup(props) {

    const router = useRouter();
    const route = useRoute();
    const modalIsOpen = ref(false);
    const modalFees = ref(false);
    const currentPage = ref(1);  
    const pagination = ref({
      totalPages: 0,
      size: 0,
      totalElements: 0
    })
    const columnsTab = ref({
                      iditem: {
                        label: 'ID',
                        align: 'start',
                        format: (value: any) => value,
                        cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                      },
                      data_prescricao: {
                        label: 'Data',
                        align: 'start',
                       // format: (value: any) => value,
                        cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                       },
                      codigo_tiss: {
                        label: 'Código',
                        align: 'start',
                       // format: (value: any) => value.nome,
                      cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                       },
                      honorario: {
                        label: 'Descrição',
                        align: 'start',
                        format: (value: any) => value.descri,
                        cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                      },
                       quant: {
                        label: 'Qtd',
                        align: 'start',
                      cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                       },
                     valor_unitario: {
                        label: 'Valor',
                        align: 'start',
                       // format: (value: any) => value,
                        cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                      },
                       valor_total: {
                        label: 'Valor Total',
                        align: 'start',
                        //format: (value: any) => value.nome,
                      cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                       },
                      grau_part: {
                        label: 'Grau',
                        align: 'start',
                        //format: (value: any) => value.nome,
                      cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                       },
                       provider: {
                        label: 'Profissional',
                        align: 'start',
                        format: (value: any) => value.nome,
                      cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                       },
                                          
                      dropdown: {
                        label: 'Mais detalhes',
                        align: 'start'
                      },
                       'drop-header': {
                      label: 'drop-header',
                      align: 'start',
                      }
                    })
                    
  

    onMounted(async () => {
        await store.dispatch('BILLS_STORE_LOAD')
        await store.dispatch('LOAD_LOCAL_ACESS')
        await store.dispatch('PROVIDER_STORE_LOAD')
        await store.dispatch('GUIDES_TYPE_STORE_LOAD')
        await store.dispatch('GUIDE_MANAGEMENT_STORE_LOAD')

      //  console.log(store.getters.billsSadts);
    })

    const onEdit = (id) => {
        openModalFees()
     // router.push(`/guide-management/${id}`)
    }

    const onDelete = async (id) => {
      await store.dispatch('BILLS_STORE_DELETE_BY_ID', id)
    }

    const onCreate = () =>{
      router.push('/guide-management/0')
    }

    

      const getListGuides = async(page = 0) => {
        let result= await store.dispatch('BILLS_STORE_LOAD')
        console.log(result);
        pagination.value.size = result.value.size
        pagination.value.totalElements = result.value.totalElements
        pagination.value.totalPages = result.value.totalPages
      }

       watch(currentPage, async (value) => {
        await getListGuides(value - 1)
      },{immediate: true})

//     const dataAtualFormatada = () =>{
//     let data = new Date(),
//         dia  = data.getDate().toString().padStart(2, '0'),
//         mes  = (data.getMonth()+1).toString().padStart(2, '0'),
//         ano  = data.getFullYear();
//     return `${dia}/${mes}/${ano}`;
// }
// console.log(dataAtualFormatada());

  const onCloseModal = () => {
      modalIsOpen.value = !modalIsOpen.value
    }

    const onOpenModal = () => {
      modalIsOpen.value = !modalIsOpen.value
    }

    const openModalFees = () => {
      modalFees.value = !modalFees.value
    }

    return {
      onCreate,
      onEdit,
      onDelete,
      currentPage,
      columnsTab,
      onCloseModal,
      onOpenModal,
      modalIsOpen,
      modalFees,
      openModalFees,
      //dataAtualFormatada
    };
  },
 
});

</script>
