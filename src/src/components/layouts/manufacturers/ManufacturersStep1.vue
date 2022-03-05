
<template>
<form class="">

  <div class="bg-white overflow-hidden shadow rounded-lg">
	<div class="px-4 py-1 flex-auto">
      <div class="pt-1">                        
        <div class="mt-0 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

            <div class="sm:col-span-6">
                <label for="registro_ans" class="block text-sm font-medium text-gray-700">
                Registro
                </label>
                <div class="mt-1">
                <input disabled type="text" name="registro_ans" id="registro_ans" autocomplete="given-name" class="w-full xl:w-40 bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border border-gray-200 rounded-md"
                v-model="manufacturer.id">
                </div>
            </div>     
          

          <div class="sm:col-span-4">
            <label for="nome" class="block text-sm font-medium text-gray-700">
              Nome<span class="text-red-700">*</span>
            </label>
            <div class="mt-2">
              <input  type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"              
                v-model="manufacturer.nome">
            </div>
          </div>

           <div class="sm:col-span-2">
            <label for="apelido" class="block text-sm font-medium text-gray-700">
            CNPJ<span class="text-red-700">*</span>
            </label>
            <div class="mt-2">
              <input  type="text" name="apelido" id="apelido" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                v-model="manufacturer.cnpj">
            </div>
          </div>


          
        </div>
      </div>
    </div>
  </div>
      
<div class="py-3 flex-auto">
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-2 flex-auto">
             <div class="pt-1">                        
                <div class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

                        <div class="sm:col-span-1">
                        <label for="cep" class="block text-sm font-medium text-gray-700">
                            CEP<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-2">
                            <input  @keyup="getAddressData()" type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                             v-model="manufacturer.cep"> 
                        </div>                        
                    </div>

                        <div class="sm:col-span-1">
                        <label for="cod_ibge" class="block text-sm font-medium text-gray-700">
                            Cód. IBGE
                        </label>
                        <div class="mt-1">
                            <input  type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                               v-model="manufacturer.cod_ibge"> 
                        </div>                        
                    </div>

                        <div class="sm:col-span-4">
                        <label for="ncasa" class="block text-sm font-medium text-gray-700">
                            Endereço<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input   type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                              v-model="manufacturer.cep" > 
                        </div>                        
                    </div>

                    
                    <div class="sm:col-span-1">
                        <label for="ncasa" class="block text-sm font-medium text-gray-700">
                            Número<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                            v-model="manufacturer.ncasa"> 
                        </div>                        
                    </div>

                    <div class="sm:col-span-2">
                        <label for="bairro" class="block text-sm font-medium text-gray-700">
                        Bairro<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input  type="text" name="bairro" id="bairro" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                               v-model="manufacturer.bairro">
                        </div>                        
                    </div>
                    
                        <div class="sm:col-span-2">
                        <label for="cidade" class="block text-sm font-medium text-gray-700">
                        Cidade<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input type="text" name="cidade" id="cidade" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="manufacturer.cidade">
                        </div>                        
                    </div>

                        <div class="sm:col-span-1">
                        <label for="uf" class="block text-sm font-medium text-gray-700">
                        UF<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <select type="text" name="uf" id="uf" autocomplete="uf" class="bg-gray-200 mt-1 uppercase block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                               v-model="manufacturer.uf">
                                <option value=""></option> 
                                <option v-bind:value="'AC'">AC</option>
                                <option v-bind:value="'AL'">AL</option>
                                <option v-bind:value="'AP'">AP</option>
                                <option v-bind:value="'AM'">AM</option>
                                <option v-bind:value="'BA'">BA</option>
                                <option v-bind:value="'CE'">CE</option>
                                <option v-bind:value="'DF'">DF</option>
                                <option v-bind:value="'ES'">ES</option>
                                <option v-bind:value="'GO'">GO</option>
                                <option v-bind:value="'MA'">MA</option>
                                <option v-bind:value="'MT'">MT</option>
                                <option v-bind:value="'MS'">MS</option>
                                <option v-bind:value="'MG'">MG</option>
                                <option v-bind:value="'PA'">PA</option>
                                <option v-bind:value="'PB'">PB</option>
                                <option v-bind:value="'PR'">PR</option>
                                <option v-bind:value="'PE'">PE</option>
                                <option v-bind:value="'PI'">PI</option>
                                <option v-bind:value="'RJ'">RJ</option>
                                <option v-bind:value="'RN'">RN</option>
                                <option v-bind:value="'RS'">RS</option>
                                <option v-bind:value="'RO'">RO</option>
                                <option v-bind:value="'RR'">RR</option>
                                <option v-bind:value="'SC'">SC</option>
                                <option v-bind:value="'SP'">SP</option>
                                <option v-bind:value="'SE'">SE</option>
                                <option v-bind:value="'TO'">TO</option>
                            </select>
                        </div>                          
                    </div>
           
                </div>
            </div>
        </div>        
    </div>
</div>

<div class="py-1 flex-auto">
     <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Dados de Contato</h6>
	<div class="bg-white overflow-hidden shadow rounded-lg">        
		<div class="px-4 py-2 flex-auto">             
             <div class="pt-1">                        
                <div class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

                    <div class="sm:col-span-2">
                        <label for="nome" class="block text-sm font-medium text-gray-700">
                        Nome 
                        </label>
                        <div class="mt-2">
                        <input  type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"              
                           v-model="manufacturer.nome">
                        </div>
                    </div>

                     <div class="sm:col-span-1">
                        <label for="nome" class="block text-sm font-medium text-gray-700">
                        Telefone<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                        <input  type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"              
                           v-model="manufacturer.tel">
                        </div>
                    </div>

                     <div class="sm:col-span-2">
                        <label for="nome" class="block text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <div class="mt-1">
                        <input  type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"              
                           v-model="manufacturer.e_mail">
                        </div>
                    </div>
                     <div class="sm:col-span-1">
                        <label for="nome" class="block text-sm font-medium text-gray-700">
                        Prazo de entrega(dias)
                        </label>
                        <div class="mt-1">
                        <input  type="text" name="nome" id="nome" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"              
                           v-model="manufacturer.prazo_entrega">
                        </div>
                    </div>

                        <div class="sm:col-span-2">                            
                            <fieldset class="mt-2 relative z-0 w-full p-px mb-5">
                                <div class=" block pt-3 pb-2 space-x-4">
                                <label>
                                    <input
                                    type="checkbox"
                                    name="checkbox"                                   
                                    id="do_corpo_clinico"
                                    @click="checkboxValidate()"
                                     :value="manufacturer.particular"
                                    v-model="manufacturer.particular"
                                    class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                                    />
                                   <span class="font-bold text-gray-800">Desativar fabricante</span>    
                                </label>
                              <!-- :value="healthProfessional.socio"
                                    v-model="healthProfessional.socio" -->
                              
                                </div>
                                <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </fieldset>  
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
import { key, store } from "../../../../src/core/store/store"
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
        'manufacturer'
        ]),
      ...mapGetters([
        'manufacturer'
      ]),
    },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  setup(props) {
    onMounted(async () => {
         await store.dispatch('MANUFACTURERS_STORE_LOAD')
    });

  const onOpenModal = async (router: string, id: number) => {
        window.open(router+id, "_blank", "width=500,height=500, top=100, left=500");
     }

    const formatDate = (date) =>{
            return moment(date).format('DD/MM/YYYY')
        } 
        
        let getAddressData =  async () => { 
              await  axios.get(`https://viacep.com.br/ws/${store.getters.manufacturer.cep}/json/`).then(response => {
                    let data = response.data;
                    console.log(data);
                    store.getters.manufacturer.bairro = data.bairro;
                    store.getters.manufacturer.cidade = data.localidade;
                    store.getters.manufacturer.endereco = data.logradouro;
                    store.getters.manufacturer.uf = data.uf;
                    store.getters.manufacturer.cod_ibge= data.ibge
                });
        };
    
    return {
      onOpenModal,
     getAddressData,
     formatDate
    };
  },
 
});
</script>