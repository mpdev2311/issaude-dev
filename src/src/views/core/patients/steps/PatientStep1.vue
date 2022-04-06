
<template>
<form class="">


        <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="px-2 py-4 bg-white text-sm text-gray-500"> Dados pessoais </span>
  </div>
</div>


  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-4 flex-auto">
      <div class="pt-1">             
        <div class="mt-0 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

            <div class="sm:col-span-1">
                <label for="registro_ans" class="block text-sm font-medium text-gray-700">
                Registro
                </label>
                <div class="mt-1">
                <input disabled type="text" name="registro_ans" id="registro_ans" autocomplete="given-name" class="w-full xl:w-40 bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border border-gray-200 rounded-md"
                v-model="patient.id">
                </div>
            </div>     
          

          <div class="sm:col-span-3">
            <label for="nome" class="block text-sm font-medium text-gray-700">
              Nome<span class="text-red-700">*</span>
            </label>
            <div class="mt-1">
              <input  type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"              
                v-model="patient.nome">
            </div>
          </div>

        <div class="sm:col-span-2">
            <label for="apelido" class="block text-sm font-medium text-gray-700">
            CPF<span class="text-red-700">*</span>
            </label>
            <div class="mt-1">
              <input  type="text" name="apelido" id="apelido" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                v-model="patient.cpf">
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>


<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="px-2 py-4 bg-white text-sm text-gray-500"> Filiação </span>
  </div>
</div>

  <div class="py-3 flex-auto">
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-4 flex-auto">
             <div class="pt-1">                        
                <div class="mt-2 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6 space-y-1">


                        <div class="sm:col-span-3">
                        <label for="ncasa" class="block text-sm font-medium text-gray-700">
                           Nome da mãe <span class="text-red-700">*</span>
                        </label>
                        <div class="mt-2">
                            <input  type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                              v-model="patient.nome_mae" > 
                        </div>                        
                    </div>



                        <div class="sm:col-span-3">
                        <label for="cep" class="block text-sm font-medium text-gray-700">
                          Nome do pai  <span class="text-red-700">*</span>
                        </label>
                        <div class="mt-2">
                            <input type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                             v-model="patient.pai"> 
                        </div>                        
                    </div>          
                </div>
            </div>
        </div>        
    </div>
</div>


<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="px-2 py-4 bg-white text-sm text-gray-500"> Documentos pessoais </span>
  </div>
</div>


  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-4 flex-auto">
      <div class="pt-1">             
        <div class="mt-0 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

            <div class="sm:col-span-2">
                <label for="registro_ans" class="block text-sm font-medium text-gray-700">
                N° documento
                </label>
                <div class="mt-1">
                <input  type="text" name="registro_ans" id="registro_ans" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                v-model="patient.rg">
                </div>
            </div>     
          

          <div class="sm:col-span-2">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Orgão origem<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">




                    <select  v-model="patient.organizacao_documento" id="origin" name="origin" autocomplete="protudo" class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  :selected="patient?.organizacao_documento?.id">
                      <option v-for="item in organizacoesDocumentos" :key="item" v-bind:value="{ ...item }">{{item.nome}}</option> 
                    </select>

                        </div>                          
                    </div>

                                <div class="sm:col-span-2">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Estado do orgão origem<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                          <select  v-model="patient.estado_documento" id="origin" name="origin" autocomplete="protudo" class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  :selected="patient?.estado_documento?.id">
                            <option v-for="item in estados" :key="item" v-bind:value="{ ...item }">{{item.nome}}</option> 
                          </select>
                        </div>                          
                    </div>

          

          
        

          
        </div>
      </div>
    </div>
  </div>



<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="px-2 py-4 bg-white text-sm text-gray-500"> Características </span>
  </div>
</div>


    <div class="py-3 flex-auto">
      
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-4 flex-auto">
             <div class="pt-1">                        
                <div class="mt-2 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6 space-y-1">


                        <div class="sm:col-span-3">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Raça<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            

                          <select  v-model="patient.raca" id="origin" name="origin" autocomplete="protudo" class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  :selected="patient?.estado_documento?.id">
                            <option v-for="item in racas" :key="item" v-bind:value="{ ...item }">{{item.nome}}</option> 
                          </select>
                            
                            
                            
                        </div>                          
                    </div>

                    <div class="sm:col-span-3">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Etinia<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">


                          <select v-model="patient.etinia" id="origin" name="origin" autocomplete="protudo" 
                          class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  
                            :selected="patient?.etinia?.codigo">
                            <option v-for="item in etinias" :key="item" v-bind:value="{ ...item }">{{item.descri}}</option> 
                          </select>
                            
                        </div>                          
                    </div>



                        



                    
                    
                    
                    

                    
                    
                        

                        
           
                </div>
            </div>
        </div>        
    </div>
</div>



  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-4 flex-auto">
      <div class="pt-2">             
        <div class="mt-0 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

              
          

                <div class="sm:col-span-3">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Religião<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">



                        <select v-model="patient.religiao" id="origin" name="origin" autocomplete="protudo" 
                          class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  
                            :selected="patient?.religiao?.id">
                            <option v-for="item in religioes" :key="item" v-bind:value="{ ...item }">{{item.nome}}</option> 
                          </select>
                            
                        </div>                          
                    </div>

                                <div class="sm:col-span-3">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Estado civil<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">


                        <select v-model="patient.estado_civil" id="origin" name="origin" autocomplete="protudo" 
                          class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  
                            :selected="patient.estado_civil?.id">
                            <option v-for="item in estadoCivil" :key="item" v-bind:value="{ ...item }">{{item.nome}}</option> 
                          </select>


                            
                        </div>                          
                    </div>

          

          
        

          
        </div>
      </div>
    </div>
  </div>


<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="px-2 py-4 bg-white text-sm text-gray-500"> Certidão </span>
  </div>
</div>


 <div class="py-3 flex-auto">
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-4 flex-auto">
      <div class="pt-1">             
        <div class="mt-2 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6 space-y-1">

            <div class="sm:col-span-1">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Tipo certidão<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <select type="text" name="uf" id="uf" autocomplete="uf" class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                               v-model="patient.tipo_certidao">
                                <option v-bind:value="'ÓBITO'">ÓBITO</option>
                                <option v-bind:value="'NASCIMENTO'">NASCIMENTO</option>
                                <option v-bind:value="'CASAMENTO'">CASAMENTO</option>
                                <option v-bind:value="'CASAMENTO COM AVERBAÇÃO'">CASAMENTO COM AVERBAÇÃO</option>

                            </select>
                        </div>                          
                    </div>    
          

                <div class="sm:col-span-2">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Nome Cartório<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                             <input type="text" v-model="patient.nome_cartorio" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md">
                        </div>                          
                    </div>


                    <div class="sm:col-span-1">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        N° Livro<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                             <input type="number" v-model="patient.numero_livro_registro" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md">
                        </div>                          
                    </div>


                                        <div class="sm:col-span-1">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        N° Folha<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                             <input type="number" v-model="patient.numero_folha_registro" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md">
                        </div>                          
                    </div>


                                <div class="sm:col-span-1">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Data emissão<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input type="date" :value="formatDate(patient.data_admissao)"  :v-model="formatDate(patient.data_admissao)" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md">
                        </div>                          
                    </div>

          

          
        

          
        </div>
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
      <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <span class="sr-only">Edit</span>
        <!-- Heroicon name: solid/pencil -->
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>
      <button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <span class="sr-only">Attachment</span>
        <!-- Heroicon name: solid/paper-clip -->
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
        </svg>
      </button>
      <button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <span class="sr-only">Annotate</span>
        <!-- Heroicon name: solid/annotation -->
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>
      </button>
      <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <span class="sr-only">Delete</span>
        <!-- Heroicon name: solid/trash -->
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
    </span>
  </div>
</div>


</form> 
 
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import {mapGetters, mapState, useStore } from 'vuex'
import { key, store } from "../../../../core/store/store"
import moment from 'moment';
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'
import axios from 'axios';

export default defineComponent({
    props: [],
    components: {     
      PlusIconSolid 
    },

    computed:{
      ...mapState([
        'patient',
        'etinias',
        'racas',
        'religioes',
        'escolaridades',
        'estadoCivil',
        'organizacoesDocumentos',
        'estados'
        ]),
      ...mapGetters([
        'patient',
        'etinias',
        'racas',
        'religioes',
        'escolaridades',
        'estadoCivil',
        'organizacoesDocumentos',
        'estados'
      ]),
    },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  


  setup(props) {
    const formatDate = (date) =>{
      return moment(date).format('YYYY-MM-DD')
    } 

    onMounted(async () => {
    });
    
    return {
      formatDate
    };
  },
 
});
</script>