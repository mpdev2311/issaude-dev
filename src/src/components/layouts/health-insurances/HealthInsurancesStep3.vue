
<template>
<div class="">
<form >
 
 <div class="py-1 flex-auto">
        <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-1 flex-auto">
                <div class="pt-1">                        
                    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

                        <!-- <div class="sm:col-span-6">
                            <label for="uf_ctps" class="block text-sm font-medium text-gray-700">
                                Contribuinte
                            </label>
                            <div class="mt-1">
                                <select type="text" name="uf_ctps" id="uf_ctps" autocomplete="uf_ctps" class="mt-1 block bg-gray-200 w-full xl:w-72 py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    v-model="healthInsurance.uf_ctps" >
                                    <option value=""></option> 
                                    <option v-bind:value="'1 - Contribuinte ICMS'">1 - Contribuinte ICMS</option>
                                    <option v-bind:value="'2 - Contribuinte ISENTO'">2 - Contribuinte ISENTO</option>
                                    <option v-bind:value="'9 - Não Contribuinte'">9 - Não Contribuinte</option>
                                
                                </select>
                            </div>
                        </div> -->

                        <div class="sm:col-span-2">
                            <label for="imposto_hm" class="block text-sm font-medium text-gray-700">
                            Prazo para Pagamento (dias)
                            </label>
                            <div class="mt-1">
                                <input type="text" name="imposto_hm" id="imposto_hm" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="healthInsurance.pagamento_em">
                            </div>                        
                        </div>

                        <div class="sm:col-span-2">
                            <label for="produtividade" class="block text-sm font-medium text-gray-700">
                           Prazo para faturar uma guia
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="produtividade" id="produtividade" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="healthInsurance.prazo_faturar">  
                            </div>                        
                        </div>

                        <div class="sm:col-span-2">
                            <label for="iss" class="block text-sm font-medium text-gray-700">
                            Prazo para revisão glosa
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="iss" id="iss" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                 v-model="healthInsurance.prazo_revisao"> 
                            </div>                        
                        </div>
                        <div class="sm:col-span-2">
                            <label for="ir" class="block text-sm font-medium text-gray-700">
                            Prazo para autorizar procedimento
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="ir" id="ir" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="healthInsurance.p_autorizar"> 
                            </div>                        
                        </div>

                        <div class="sm:col-span-2">
                            <label for="cll" class="block text-sm font-medium text-gray-700">
                            Percentual de Repasse
                            </label>
                            <div class="mt-1">
                                <input   type="text" name="cll" id="cll" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                 > 
                            </div>                        
                        </div>

                        <div class="sm:col-span-2">
                            <label for="cofins" class="block text-sm font-medium text-gray-700">
                            Preencher observação da guia de consulta
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="cofins" id="cofins" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                 v-model="healthInsurance.obs_consulta">  
                            </div>                        
                        </div>
                         <div class="sm:col-span-2">
                            <label for="cofins" class="block text-sm font-medium text-gray-700">
                            Preencher CID automaticamente
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="cofins" id="cofins" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                 v-model="healthInsurance.cid_consulta">  
                            </div>                        
                        </div>
                         <div class="sm:col-span-2">
                            <label for="cofins" class="block text-sm font-medium text-gray-700">
                            Limite de Consulta
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="cofins" id="cofins" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                 v-model="healthInsurance.quant_consulta">  
                            </div>                        
                        </div>
                         <div class="sm:col-span-2">
                            <label for="cofins" class="block text-sm font-medium text-gray-700">
                            Tamanho da Matricula
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="cofins" id="cofins" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                 v-model="healthInsurance.tamanho_matricula">  
                            </div>                        
                        </div>
                        <div class="sm:col-span-6">                            
                            <fieldset class="relative z-0 w-full p-px mb-5">
                                
                                <div class=" block pt-3 pb-2 space-x-4">
                                
                                <label>
                                    <input
                                    type="checkbox"
                                    name="checkbox"                                   
                                    id="do_corpo_clinico"
                                    @click="checkboxValidate()"
                                    :value="healthInsurance.exige_cid"
                                    v-model="healthInsurance.exige_cid"
                                    class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                                    />
                                    <span class="font-bold text-gray-800">Exige CID na guia de consulta</span>
                                </label>
                              
                                </div>
                                <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </fieldset>     
                        </div>

                  </div>
              </div>
          </div>        
      </div>
  </div>

<div class="py-1 flex-auto">
      <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Detalhes</h6>
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-2 flex-auto">
             <div class="pt-1">                        
                <div class=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
    
                        <div class="sm:col-span-1">
                        <label for="banco" class="block text-sm font-medium text-gray-700">
                        Banco
                        </label>
                        <div class="mt-2">
                            <input type="text" name="banco" id="banco" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                  v-model="healthInsurance.banco">   
                        </div>                        
                    </div>

                    <div class="sm:col-span-1">
                        <label for="agencia" class="block text-sm font-medium text-gray-700">
                            Agência
                        </label>
                        <div class="mt-1">
                            <input type="text" name="agencia" id="agencia" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                  v-model="healthInsurance.agencia">
                        </div>
                    </div>

                    <div class="sm:col-span-1">
                        <label for="conta" class="block text-sm font-medium text-gray-700">
                        Conta
                        </label>
                        <div class="mt-1">
                            <input type="text" name="conta" id="conta" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                  v-model="healthInsurance.conta">
                        </div>                        
                    </div>
                     <div class="sm:col-span-1">
                        <label for="conta" class="block text-sm font-medium text-gray-700">
                        Chave PIX
                        </label>
                        <div class="mt-1">
                            <input type="text" name="conta" id="conta" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                  >
                        </div>                        
                    </div>

                    <div class="sm:col-span-2">
                        <label for="obs" class="block text-sm font-medium text-gray-700">
                        Obs:
                        </label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="1"  class="max-w-lg shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                            v-model="healthInsurance.obs"/>                               
                        </div>                       
                    </div>

                        <div class="sm:col-span-6">                            
                            <fieldset class=" relative z-0 w-full p-px mb-5">
                                
                                <div class=" block pt-3 pb-2 space-x-4">
                                
                                <label>
                                    <input
                                    type="checkbox"
                                    name="checkbox"                                   
                                    id="do_corpo_clinico"
                                    @click="checkboxValidate()"
                                     :value="healthInsurance.repetir_guia"
                                    v-model="healthInsurance.repetir_guia"
                                    class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                                    />
                                    <span class="font-bold text-gray-800">Não permitir repetição de Guia</span>
                                </label>

                                <label>
                                    <input
                                    type="checkbox"
                                    name="checkbox"                                   
                                    id="do_corpo_clinico"
                                    @click="checkboxValidate()"
                                     :value="healthInsurance.repetir_senha"
                                    v-model="healthInsurance.repetir_senha"
                                    class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                                    />
                                     <span class="font-bold text-gray-800">Não permitir repetição de senha</span>
                                </label>
                            
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
 </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {mapGetters, mapState, useStore, mapMutations } from 'vuex';
import { key, store } from "../../../../src/core/store/store";
import { useRouter } from "vue-router";
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'


export default defineComponent({
    props: [],

    components: { 
        PlusIconSolid
    },

        methods: {
         ...mapMutations([
          'healthInsurance',
          'healthInsurance'
         ]),
      },

    computed:{
      ...mapState([
        'healthInsurance',
        'healthInsurance'
        ]),
      ...mapGetters([
        'healthInsurance',
        'healthInsurance'
      ]),
    },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter();

  
    onMounted(async () => {  
    });

    
  
    
    return {
    };
  },
 
});
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}

</style>
