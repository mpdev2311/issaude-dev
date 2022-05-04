<template>


<div class="h-screen">
  <div>
    <NotificationAlert />
    <div class="mt-19  bg-gray-300 hover:bg-gray-200  py-5 px-5 border-b-4 border-gray-400 hover:border-gray-500 rounded">
      <!-- animation transform translate-x-4 translate-y-15 scale-10 rotate-5 -->
        <div class="bg-white rounded-t-md shadow-md rounded-b-lg ">
            <div class="w-full">
              <!-- inicio step -->
                <div v-show="step === 'complete'">
                 
                </div>
              <div class="" v-show="step != 'complete'">	
                <!-- Top Navigation -->
                <div class="border-b-2 px-4 py-2 text-white bg-gray-900 rounded-t-lg">                  

                  <!-- <div class="uppercase tracking-wide text-xs font-bold text-white bg-gray-900 mb-1 leading-tight" v-text="`Página: ${step} - 6`"></div> -->
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between">

                  <div  v-if="provider.id !== 0">
                    
                     <a href="#" class="flex-shrink-0 w-full group block">
                      <div class="flex items-center">
                        <div>
                          <img class="inline-block h-24 w-24 rounded-full" size="lg" shape="rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                        </div>

                        <div class="ml-3">
                          <p class="text-lg font-medium text-white group-hover:text-gray-300">
                            {{provider.apelido}}
                          </p>
                          <p class="text-sm font-medium text-white-500 group-hover:text-gray-300">
                            Registro: {{provider.id}}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  
                    <div class="">
                      <div class="mt-0 align-text-top text-lg text-gray-400 font-semibold">
                        Cadastro de pacientes
                      </div>
                       <div class="mt-8">
                        <div v-show="step === 1">
                          <div class="text-2xl  font-bold text-left text-white bg-gray-900 leading-tight">Dados do paciente</div>
                        </div>
                        
                        <div v-show="step === 2">
                          <div class="text-2xl font-bold text-   text-white bg-gray-900 leading-tight">Endereço</div>
                        </div>

                        <div v-show="step === 3">
                          <div class="text-2xl font-bold text-   text-white bg-gray-900 leading-tight">Dados profissionais</div>
                        </div>
                       
                       
                       </div>
                    </div>

                    <div class=" ">
                         <div class="align-text-top m-2 text-right right-8">
                          <div class="uppercase tracking-wide text-xs font-bold text-white bg-gray-900  leading-tight text-right" v-text="`Página: ${step} - 4`"></div>
                        </div>
                        <div class="flex items-center md:w-64   mt-10">                        
                            <div class="w-full bg-white rounded-full mr-2">
                              <div class="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white" :style="'width: '+ parseInt(step / 5 * 100) +'%'"></div>
                            </div>
                            <div class="text-xs w-10 text-white" v-text="parseInt(step / 4 * 100) +'%'"></div>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- /Top Navigation -->

                  <!-- Step Content -->
                  <div class="py-2 ">	
                    <div class="px-5 py-1 " v-show="step === 1">                    
                       <PatientStep1 />
                    </div>
                    <div class="px-5 py-1 " v-show="step === 2">
                        <PatientStep2 />
                    </div>
                    <div class="px-5 py-1 " v-show="step === 3">
                        <PatientStep3 />
                    </div>
                     <div class="px-5 py-1 " v-show="step === 4">
                        <PatientStep4 />
                    </div>
                  </div>
             

       <div class="border-b-2 px-3 py-4 text-white bg-gray-900 rounded-b-lg">
          <div class="flex flex-wrap  md:items-center md:justify-between">
			
            <div class="w-4/6 text-right">
              <button
              v-show="step !== 1"
                @click="step--"
                class="sm:space-x-0 sm:inline-flex sm:justify-items-center  inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm  rounded-md text-center text-white  bg-gray-700 hover:bg-gray-800 font-medium"
              >Anterior</button>
            </div>

            <div  class="text-right">
              <button
                v-show="step !== 4"
                @click="step++"
                class="sm:space-x-0 sm:inline-flex sm:justify-items-center  inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm  rounded-md text-center text-white  bg-gray-700 hover:bg-gray-800 font-medium"
                >Próximo </button>           

              
            </div>

            <div  class="text-right">

            <button						
                v-show="step === 4"
                @click="onSave()"
                class="sm:space-x-0 sm:inline-flex sm:justify-items-center  inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm  rounded-md text-center text-white  bg-green-600 hover:bg-green-500 font-medium" 
              >Salvar	<!-- @click="step = 'complete'" -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
              </button>

               </div>
            
            <div v-show="step < 2" class="text-right">
              <button
                v-show="step < 2"
                @click="step = 4"
                class="sm:space-x-0 sm:inline-flex sm:justify-items-center  inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm  rounded-md text-center text-white  bg-gray-700 hover:bg-gray-800 font-medium"
                >Útimo </button>           
            </div>

          	<div class="w-2/2 text-right">
              <button @click="onCancel()" type="button" class="sm:space-x-0  sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm  rounded-md text-center text-white  bg-red-600 hover:bg-red-500 font-medium">
                  Fechar
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>
                </button>               
            </div>

        </div>
			</div>
		</div>
		
              <!-- fim -->
            </div>
        </div>
    </div>

  </div>

</div> 
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router"
import {mapGetters, mapState, useStore } from 'vuex'
import { key, store } from "../../../core/store/store"
import PatientStep1 from "./steps/PatientStep1.vue";
import PatientStep2 from "./steps/PatientStep2.vue";
import PatientStep3 from "./steps/PatientStep3.vue";
import PatientStep4 from "./steps/PatientStep4.vue";
import NotificationAlert from '../../../components/alerts/NotificationAlert.vue'
export default defineComponent({

  components: { 
    PatientStep1,
    PatientStep2,
    PatientStep3,
    PatientStep4,
    NotificationAlert
  },

  computed:{
    ...mapState([
      'providers',
      'provider',
      'patient',
      'etinias',
      'racas',
      'religioes',
      'escolaridades',
      'maritalStatus',
      'planAgree'
      ]),
    ...mapGetters([
      'providers',
      'provider',
      'patient',
      'etinias',
      'racas',
      'religioes',
      'escolaridades',
      'maritalStatus',
      'planAgree'
    ]),
  },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  setup(_) {
    const router = useRouter();
    let step =ref<number>(1);
  
  onMounted(async () => {
       const { id } = router.currentRoute.value.params

        if(id !== '0')
          await store.dispatch('PATIENTS_STORE_LOAD_BY_ID', id) 
        else
          await store.dispatch('PATIENTS_STORE_SET_BLANK')

          await store.dispatch('PATIENTS_STORE_LOAD_TYPES')
    });

    const onCancel = async () =>{
      router.push('/patients')
    }

    const onSave = async () => {
      await store.dispatch('PATIENTS_STORE_SAVE')
    };

    return {
      onSave,
      onCancel,
      step
    };

  }


})

</script>