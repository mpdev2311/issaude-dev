
<template>
<div class="">
<form >
    <div class="py-1 flex-auto">
     <h6 class="px-1 my-2 py-4 text-gray-700 text-lg font-semibold flex-auto">Plano </h6>

	    <div v-if="patient.planos.length <= 0" class="bg-white overflow-hidden shadow rounded-lg">        
		    <div class="px-4 py-4 flex-auto">             
              

              <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="relative py-6">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
                  <button @click="onAddPlan()" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    <span class="sr-only">Edit</span>
                    <!-- Heroicon name: solid/pencil -->
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>

                  </button>
                  <button @click="removePlan(index)" type="button" class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    <span class="sr-only">Delete</span>
                    <!-- Heroicon name: solid/trash -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </span>
              </div>
            </div> 
        </div>
    </div>

     
	    <div v-for="(i, index) in patient.planos" :key="index" :value="i.id" class="bg-white overflow-hidden shadow rounded-lg">        
		    <div class="px-4 py-4 flex-auto">             
             <div class="pt-3">                        
                <div class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

                    <div class="sm:col-span-2">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Plano<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-2">
                          <select
                            :v-model="{ id : (i.id_plano | 2) }"  
                            id="origin" name="origin" autocomplete="protudo" class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                             :selected="i.id_plano | 2">
                            <option v-for="item in planAgree" :key="item" v-bind:value="{ id: item.id, nome: item.nome }">{{item.nome}}</option> 
                          </select>
                            
                        </div>                          
                    </div>

                     <div class="sm:col-span-2">
                        <label for="nome" class="block text-sm font-medium text-gray-700">
                        Matricula<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                        <input  type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"              
                           v-model="i.matricula">
                        </div>
                    </div>

                     <div class="sm:col-span-2">
                        <label for="nome" class="block text-sm font-medium text-gray-700">
                        Validade
                        </label>
                        <div class="mt-1">
                          <input type="date" :value="formatDate(i.validade)"  :v-model="formatDate(i.validade)" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md">
                        </div>
                    </div>
                </div>
             </div>   

              <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="relative py-6">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
                  <button @click="onAddPlan()" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    <span class="sr-only">Edit</span>
                    <!-- Heroicon name: solid/pencil -->
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>

                  </button>
                  <button @click="removePlan(index)" type="button" class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    <span class="sr-only">Delete</span>
                    <!-- Heroicon name: solid/trash -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </span>
              </div>
            </div> 
        </div>
    </div>
</div>

     <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-4">   
        <div class="sm:col-span-6">
        </div> 
        <div class="sm:col-span-6">
        </div> 
           <div class="sm:col-span-6">
        </div>   
                               
    </div>


  </form> 
 </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {mapGetters, mapState, useStore, mapMutations } from 'vuex';
import { key, store } from "../../../../core/store/store"
import { useRouter } from "vue-router";
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'
import moment from "moment";


export default defineComponent({
    props: [],

    components: { 
        PlusIconSolid
    },

    computed:{
      ...mapState([
        'patient',
        'planAgree'
        ]),
      ...mapGetters([
        'patient',
        'planAgree'
      ]),
    },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  setup(props) {
    
    const router = useRouter();

    const formatDate = (date) =>{
      return moment(date).format('YYYY-MM-DD')
    } 

    const onAddPlan = () => {
      store.dispatch('PATIENT_ADD_PLAN')
    }

    const removePlan = (index) => {
      store.dispatch('PATIENT_REMOVE_PLAN', index)
    }

    onMounted(async () => {  

    });
  
    return {
      onAddPlan,
      formatDate,
      removePlan
    };
  },
 
});
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}

</style>
