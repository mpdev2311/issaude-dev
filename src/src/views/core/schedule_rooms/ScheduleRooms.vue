<template>
  <div>
    <h3 class="text-gray-700 text-2xl font-semibold">Agenda e Salas</h3>

    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-t-lg shadow-md">
         
<form class="space-y-4 divide-y divide-gray-200">
  <div class="space-y-8 divide-y divide-gray-200">

    <div class="pt-1">
 
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
 
        <div class="sm:col-span-3">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
          Registro
          </label>
          <div class="mt-1">
            <input disabled type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" v-model="scheduleName.id">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <div class="mt-1">
            <input type="text" name="last_name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" v-model="scheduleName.nome">
          </div>
        </div>
        
        <div class="sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">
            Leito
          </label>
          <div class="mt-1">
            <input type="text" name="last_name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" v-model="scheduleName.leito">
          </div>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="local" class="block text-sm font-medium text-gray-700">
            Local
          </label>
          <div>
            <select  v-model="scheduleName.id_local" id="select-local-atendimento" name="local" autocomplete="local" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
              <option v-for="i in consultationPlaces" :key="i" :value="i.id" >{{i.local}}</option> 
            </select>
          </div>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="tipo" class="block text-sm font-medium text-gray-700">
            Tipo
          </label>
          <div>
            <select v-model="scheduleName.id_tipo_sala" id="tipo-sala-atendimento-select" name="tipo" autocomplete="tipo" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
              <option v-for="i in serviceTypes" :key="i" :value="i.id">{{i.nome}}</option> 
            </select>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">
            Desativar Agenda
          </label>
          <div class="mt-1">
              <input type="checkbox" name="last_name" id="desativar-agenda" class="form-checkbox" v-model="scheduleName.desativado"> 
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">
            Idade Mínima 
          </label>
          <div class="mt-1">
            <input type="text" name="last_name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" v-model="scheduleName.idade_min">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">
            Idade Máxima
          </label>
          <div class="mt-1">
            <input type="text" name="last_name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" v-model="scheduleName.idade_max">
          </div>
        </div>
      </div>
    </div>
  </div>


</form>


        </div>
      </div>
    </div>
    
              <div class="flex justify-end px-4 py-3 bg-gray-50 rounded-b-lg text-right sm:px-6 bg-gray-900">
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router"
import { ScheduleName } from "../../../core/domain/schedule_rooms/schedule-name-model"
import { ServiceType } from '../../../core/domain/service_types/service-types-model'
import { ConsultationPlace } from '../../../core/domain/consultation-places/consultation-place-model'
import {mapGetters, mapState, useStore } from 'vuex'
import { key, store } from "../../../../src/core/store/store"



export default defineComponent({

  components: { 
  },

  computed:{
    ...mapState([
      'scheduleName', 
      'serviceType',
      'serviceTypes',
      'consultationPlace',
      'consultationPlaces'
      
      ]),
    ...mapGetters([
      'scheduleName', 
      'serviceType',
      'serviceTypes',
      'consultationPlace',
      'consultationPlaces'
      
    ]),
  },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter();

    const scheduleName = ref<ScheduleName>({
        id: 0,
        nome: "",
        id_local: 0,
        id_user: 0,
        id_corp: 0,
        id_setor: 0,
        id_tipo_sala: 0,
        desativado: false,
        ativo: true,
        sigla: "",
        leito: "",
        idade_max: 0,
        idade_min: 0,
        protocolos: ""
  });

const serviceType = ref<ServiceType>({
    id: 0,
    id_corp: 0,
    nome: "",
    ativo: true
})
  
const consultationPlace = ref<ConsultationPlace>({
    local : "",
    id : 0,
    id_corp : 0,
    id_user : 0,
    data_gravacao : "",
    telefone : "",
    endereco : "",
    uf : "",
    cep : "",
    numero : "",
    cidade : "",
    bairro : "",
    id_empresa : 0,
    ativo : true
})

  store.dispatch('SCHEDULE_NAME_STORE_SET_BLANK', scheduleName.value)

 

  onMounted(async () => {
        if(router.currentRoute.value.params.id !== '0'){
          await store.dispatch('SCHEDULE_NAME_STORE_LOAD_BY_ID', router.currentRoute.value.params.id)
          await store.dispatch('SCHEDULE_NAME_STORE_LOAD')
          await store.dispatch('SERVICE_TYPE_STORE_LOAD')
          await store.dispatch('CONSULTATION_PLACE_STORE_LOAD')
          await store.dispatch('SERVICE_TYPE_STORE_LOAD_BY_ID' , serviceType.value.id)
          await store.dispatch('CONSULTATION_PLACE_STORE_LOAD_BY_ID' , consultationPlace.value.id)

        }
        else {
          await store.dispatch('SCHEDULE_NAME_STORE_SET_BLANK', scheduleName.value)
          await store.dispatch('SERVICE_TYPE_STORE_LOAD')
          await store.dispatch('CONSULTATION_PLACE_STORE_LOAD')
        }
    });

    const onCancel = async () =>{
      router.push('/schedule_rooms')
    }

    const onSave = async () => {
      await store.dispatch('SCHEDULE_NAME_STORE_SAVE')
    };

    return {
      onSave,
      onCancel,
    };

  }


})

</script>
