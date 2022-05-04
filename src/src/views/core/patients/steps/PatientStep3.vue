
<template>
<form class="">

<div class="py-3 flex-auto">
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-4 flex-auto">
             <div class="pt-1">                        
                <div class="mt-2 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6 space-y-1">



                    <div class="sm:col-span-3">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        Setor<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-3">
                          <select  :v-model="patient.cbo" id="origin" name="origin" autocomplete="protudo" class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  :selected="patient?.cbo?.id">
                            <option v-for="item in cbos" :key="item" :v-bind:value="{ ...item }">{{item.descricao}}</option> 
                          </select>

                        </div>                          
                    </div>


                                            <div class="sm:col-span-3">
                        <label for="cep" class="block text-sm font-medium text-gray-700">
                          Salário  <span class="text-red-700">*</span>
                        </label>
                        <div class="mt-2">
                            <input type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                             v-model="patient.salario"> 
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
        'cbos'
        ]),
      ...mapGetters([
        'patient',
        'cbos'
      ]),
    },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  setup(props) {
    onMounted(async () => {   
    });

    const formatDate = (date) =>{
      return moment(date).format('DD/MM/YYYY')
    } 
        
    let getAddressData =  async () => { 
          await axios.get(`https://viacep.com.br/ws/${store.getters.patient.cep}/json/`)
          .then(response => {
                let data = response.data;
                console.log(data);
                store.getters.patient.bairro = data.bairro;
                store.getters.patient.cidade = data.localidade;
                store.getters.patient.endereco = data.logradouro;
                store.getters.patient.uf = data.uf;
                store.getters.patient.cod_ibge = data.ibge
            });
    };
    
    return {
      getAddressData,
      formatDate
    };
  },
 
});
</script>