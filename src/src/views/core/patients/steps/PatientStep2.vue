
<template>
<form class="">
      
      
<div class="py-3 flex-auto">
   <h6 class="px-1 py-4 text-gray-700 text-lg font-semibold flex-auto">Endereço</h6>
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-4 flex-auto">
             <div class="pt-1">                        
                <div class="mt-2 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6 space-y-1">

                        <div class="sm:col-span-1">
                        <label for="cep" class="block text-sm font-medium text-gray-700">
                            CEP<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-2">
                            <input  @keyup="getAddressData()" type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                             v-model="patient.cep"> 
                        </div>                        
                    </div>


                        <div class="sm:col-span-4">
                        <label for="ncasa" class="block text-sm font-medium text-gray-700">
                            Endereço<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input   type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                              v-model="patient.endereco" > 
                        </div>                        
                    </div>

                    
                    <div class="sm:col-span-1">
                        <label for="ncasa" class="block text-sm font-medium text-gray-700">
                            Número<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                            v-model="patient.ncasa"> 
                        </div>                        
                    </div>
                

                    <div class="sm:col-span-2">
                        <label for="bairro" class="block text-sm font-medium text-gray-700">
                        Bairro<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input  type="text" name="bairro" id="bairro" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                               v-model="patient.bairro">
                        </div>                        
                    </div>
                    
                        <div class="sm:col-span-2">
                        <label for="cidade" class="block text-sm font-medium text-gray-700">
                        Cidade<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input type="text" name="cidade" id="cidade" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="patient.cidade">
                        </div>                        
                    </div>

                        <div class="sm:col-span-2">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        UF<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                           <select  v-model="patient.estado" id="origin" name="origin" autocomplete="protudo" class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  :selected="patient?.estado?.id">
                            <option v-for="item in estados" :key="item" v-bind:value="{ ...item }">{{item.nome}}</option> 
                          </select> 
                        </div>                          
                    </div>
           
                </div>
            </div>
        </div>        
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
        'estados'
        ]),
      ...mapGetters([
        'patient',
        'estados'
      ]),
    },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  setup(props) {
    onMounted(async () => {
    
    });

 
        
    let getAddressData =  async () => { 
            await  axios.get(`https://viacep.com.br/ws/${store.getters.provider.cep}/json/`).then(response => {
                let data = response.data;
                console.log(data);
                store.getters.provider.bairro = data.bairro;
                store.getters.provider.cidade = data.localidade;
                store.getters.provider.endereco = data.logradouro;
                store.getters.provider.uf = data.uf;
                store.getters.provider.cod_ibge= data.ibge
            });
    };
    
    return {
     getAddressData
    };
  },
 
});
</script>