<template>
  <div>
    <NotificationAlert />
     <h3 class="text-gray-700 text-3xl font-semibold">Gestão de Guias</h3>
    <div class="mt-4">
      <div class="mt-6" >
        <div class="rounded-lg  mt-4 px-4 py-5 bg-white grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
                       
             <div class="sm:col-span-1">               
                <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
                     Prontuário
                </label>
              <div class="mt-3" >
                  <input type="text" v-model="inputFilter.prontuario"  name="p_consulta" id="p_consulta" autocomplete="p_consulta" class="w-full xl:w-40 ml-2 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md transition duration-500 ease-in-out " >
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>                    
              </div>
            </div>
        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
          Paciente
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="inputFilter.paciente" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

            <div class="sm:col-span-3">
                <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
                   Período de Busca:
                </label>
                <div class="mt-2 px-2  flex">
                    <input v-model="inputFilter.data_ini" type="date" pattern="\d{4}-\d{1,2}-\d{1,2}"  name="dataInicio" id="dataInicio" autocomplete="dataInicio" class=" w-30 ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-2 rounded-r border border-gray-300 rounded-md transition duration-500 ease-in-out " >
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                     <span>a</span>
                     <input v-model="inputFilter.data_fim" type="date"  pattern="\d{4}-\d{1,2}-\d{1,2}" name="dataFim" id="dataFim" autocomplete="dataFim" class="w-30 ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-2 rounded-l border border-gray-300 rounded-md transition duration-500 ease-in-out " >
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  <button @click="alert('crud componentes')" type="button" class="  inline-flex justify-center  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-3 ">
                  Atualizar               
                </button>
                </div>                       
             </div>

              <div class="sm:col-span-1 m-2">
                <label for="nome" class="block text-sm font-medium text-gray-700">
                    Tipo de Guia
                </label>
                <div class="mt-1 ">
                    <select v-model="inputFilter.tipoGuia" name="agenda" id="agenda" autocomplete="agenda" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out" 
                        >
                         <option  v-bind:value="0">Selecione</option>
                          <option v-for="i in guidetypes" :key="i" :value="i.id" >{{i.nome}}</option>
                    </select>
                </div>
             </div>

              <div class="sm:col-span-1 m-2">
                <label for="nome" class="block text-sm font-medium text-gray-700">
                    Convênio
                </label>
                <div class="mt-1 ">
                    <select v-model="inputFilter.convenio" name="agenda" id="agenda" autocomplete="agenda" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out" 
                        >
                         <option  v-bind:value="0"></option>
                          <option v-for="i in scheduleNames" :key="i" :value="i.id" >{{i.nome}}</option>
                    </select>
                </div>
             </div>

              <div class="sm:col-span-2">
                <label for="nome" class="block text-sm font-medium text-gray-700">
                    Local Atendimento
                </label>
                <div class="mt-1">
                    <select v-model="inputFilter.local_atend" name="agenda" id="agenda" autocomplete="agenda" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out" 
                        >
                        <option  v-bind:value="0">Selecione</option>
                         <option
                            v-for="i in localAccess"
                            :key="i"
                            :value="i.id"
                          >{{ i.localAttendance.local }}</option>
                    </select>
                </div>
             </div>

              <div class="sm:col-span-2">
                <label for="nome" class="block text-sm font-medium text-gray-700">
                    Profissional
                </label>
                <div class="mt-1">
                    <select v-model="inputFilter.profissional" name="profissional" id="profissional" autocomplete="profissional" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-500 ease-in-out" 
                       >
                        <option  v-bind:value="0">Selecione</option>
                            <option v-for="i in providers.content" :key="i" :value="i.id" >{{i.nome}}</option> 
                            
                    </select>
                </div>
             </div>
             
        </div>       
      </div> 
    </div>
    <!-- drop -->
    <div class="mt-4 flex flex-col md:flex-row">         
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
    </div>
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
              <Table v-if="guideManagements !== 0"
                :data="guideManagements.content"
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
                              closeDropDown(), onCreate()
                            }
                          "
                          class="flex text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full"
                          role="menuitem"
                          tabindex="0"
                          id="menu-item-0"
                        >Nova Guia
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
                  <template v-if="column.key === 'convenio'">{{ row.agreementPlan.id }}</template>
                  
                  <template v-if="column.key === 'dropdown'">
                    <Dropdown class="lg:mr-10">
                      <template #content="{ closeDropDown }">
                        <button
                          @click="
                            () => {
                              closeDropDown(), onEdit(row)
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
                <Pagination
                  :item-per-page="10"
                  :total-items="300"
                  :current-page="currentPage"
                  :max-links-displayed="3"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUpdate, toRef, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { mapGetters, mapState, useStore } from "vuex";
import { key, store } from "../../../../src/core/store/store";
import Pagination from '../../../components/pagination/Pagination.vue';
import Table from '../../../components/layouts/Table/Table.vue';
import Dropdown from '../../../components/dropdown/Dropdown.vue';

export default defineComponent({

  components: {
    Dropdown,
    Pagination,
    Table
  },

  computed:{
    ...mapState([
      'guideManagements',
       'localAccess',
       'providers',
       'guidetypes'
      ]),
    ...mapGetters([
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

    const inputFilter ={
      tipoGuia: 0,
      prontuario: 0,
      paciente: "",
      data_ini:"",
      data_fim: "",
      convenio: 0,
      local_atend: 0,
      profissional: 0
    }
    const columnsTab = ref({
                      iditem: {
                        label: 'ID',
                        align: 'start',
                        format: (value: any) => value,
                        cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                      },
                      data_atendimento: {
                        label: 'Data',
                        align: 'start',
                        cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                       },
                      patient: {
                        label: 'Paciente',
                        align: 'start',
                        format: (value: any) => value.nome,
                      cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                       },
                      id: {
                        label: 'Guia Prestator',
                        align: 'start'
                      },
                       numero_guia: {
                        label: 'Guia Operadora',
                        align: 'start',
                      cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]'
                       },
                     'convenio': {
                        label: 'Convênio',
                        align: 'start',
                       // format: (value: any) => value,
                        cellClass: 'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
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
                    
    const currentPage = computed(() => {
      try {
        return Number.parseInt(route.query.page as string) || 1
      } catch { }
      return 1
    })

    onMounted(async () => {
      await store.dispatch('LOAD_LOCAL_ACESS')
      await store.dispatch('PROVIDER_STORE_LOAD')
       await store.dispatch('GUIDES_TYPE_STORE_LOAD')
      await store.dispatch('GUIDE_MANAGEMENT_STORE_LOAD')
    })

    const onEdit = (dados) => {
      if(store.getters.guideManagement.tipo === 3){
        router.push(`/guide-sadt/${ dados.id}`)        
      }else  if(store.getters.guideManagement.tipo === 5){
        router.push(`/guide-management/${ dados.id}`)
      }else{
         router.push(`/guide-management/${ dados.id}`)
      }

    }

    const onDelete = async (id) => {
      await store.dispatch('GUIDE_MANAGEMENT_STORE_DELETE_BY_ID', id)
    }

    const onCreate = () =>{
      if(inputFilter.tipoGuia !== 0){
         if(inputFilter.tipoGuia === 3){
            router.push(`/guide-sadt/0`)        
          }else  if(inputFilter.tipoGuia === 5){
            router.push(`/guide-management/0`)
          }else{
            router.push(`/guide-management/0`)
          }
      }else{
        alert('Selecione um Tipo de Guia');
      }
      
    }

//     const dataAtualFormatada = () =>{
//     let data = new Date(),
//         dia  = data.getDate().toString().padStart(2, '0'),
//         mes  = (data.getMonth()+1).toString().padStart(2, '0'),
//         ano  = data.getFullYear();
//     return `${dia}/${mes}/${ano}`;
// }
// console.log(dataAtualFormatada());

    return {
      onCreate,
      onEdit,
      onDelete,
      currentPage,
      columnsTab,
      inputFilter
      //dataAtualFormatada
    };
  },
 
});

</script>
