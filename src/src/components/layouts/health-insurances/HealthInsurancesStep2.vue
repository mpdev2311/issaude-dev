
<template>
<div class="">
<form >

 <div class="py-1 flex-auto">
        <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-2 flex-auto">
                <div class="pt-1">                        
                    <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

                        <div class="sm:col-span-6">
                            <label for="uf_ctps" class="block text-sm font-medium text-gray-700">
                                Contribuinte<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <select type="text" name="uf_ctps" id="uf_ctps" autocomplete="uf_ctps" class="mt-1 block bg-gray-200 w-full xl:w-72 py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    v-model="healthInsurance.tipo_contribuinte" >
                                    <option value=""></option> 
                                    <option v-bind:value="'1 - Contribuinte ICMS'">1 - Contribuinte ICMS</option>
                                    <option v-bind:value="'2 - Contribuinte ISENTO'">2 - Contribuinte ISENTO</option>
                                    <option v-bind:value="'9 - Não Contribuinte'">9 - Não Contribuinte</option>
                                
                                </select>
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="imposto_hm" class="block text-sm font-medium text-gray-700">
                            Imposto sobre Hm<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input type="text" name="imposto_hm" id="imposto_hm" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="healthInsurance.imposto_hm">
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for="produtividade" class="block text-sm font-medium text-gray-700">
                           Produtividade<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="produtividade" id="produtividade" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="healthInsurance.produtividade">  
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for="iss" class="block text-sm font-medium text-gray-700">
                            Iss<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="iss" id="iss" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                 v-model="healthInsurance.iss"> 
                            </div>                        
                        </div>
                        <div class="sm:col-span-1">
                            <label for="ir" class="block text-sm font-medium text-gray-700">
                            IR<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="ir" id="ir" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="healthInsurance.ir"> 
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for="cll" class="block text-sm font-medium text-gray-700">
                            Cll<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input   type="text" name="cll" id="cll" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="healthInsurance.cll" > 
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for="cofins" class="block text-sm font-medium text-gray-700">
                            Cofins<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="cofins" id="cofins" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                 v-model="healthInsurance.cofins">  
                            </div>                        
                        </div>
                  </div>
              </div>
          </div>        
      </div>
  </div>

<div class="py-1 flex-auto">
      <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Padrão TISS</h6>
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-2 flex-auto">
             <div class="pt-1">                        
                <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
    
                        
                        <div class="sm:col-span-1">
                            <label for="cpts" class="block text-sm font-medium text-gray-700">
                            Registro ANS<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-2">
                                <input type="text" name="cpts" id="cpts" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="healthInsurance.registro_ans">   
                            </div>                        
                        </div>

                         <div class="sm:col-span-3">
                            <label for="cpts" class="block text-sm font-medium text-gray-700">
                                Registro da empresa no convênio<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input type="text" name="cpts" id="cpts" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="healthInsurance.registro_convenio">   
                            </div>                        
                        </div>

                         <div class="sm:col-span-2">
                            <label for="cpts" class="block text-sm font-medium text-gray-700">
                            Fonte Pagadora
                            </label>
                            <div class="mt-1">
                                <input type="text" name="cpts" id="cpts" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="healthInsurance.fonte_pagadora">   
                            </div>                        
                        </div>

                        <div class="sm:col-span-2">
                            <label for="uf_ctps" class="block text-sm font-medium text-gray-700">
                                Versão do TISS
                            </label>
                            <div class="mt-1">
                                <select type="text" name="uf_ctps" id="uf_ctps" autocomplete="uf_ctps" class="mt-1 block bg-gray-200 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    v-model="healthInsurance.versao_tiss" >
                                    <option value=""></option> 
                                    <option v-bind:value="''">GEAP</option>
                                    <option v-bind:value="''">3.05.00</option>
                                </select>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="serie_ctps" class="block text-sm font-medium text-gray-700">
                            Link Elegibilidade
                            </label>
                            <div class="mt-1">
                                <input type="text" name="serie_ctps" id="serie_ctps" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="healthInsurance.elegibilidade">
                            </div>                        
                        </div>

                        <div class="sm:col-span-6">                            
                            <fieldset class="mt-2 relative z-0 w-full p-px mb-5">
                                
                                <div class=" block pt-3 pb-2 space-x-4">
                                
                                <label>
                                    <input
                                    type="checkbox"
                                    name="checkbox"                                   
                                    id="do_corpo_clinico"
                                    @click="checkboxValidate()"
                                     :value="healthInsurance.identificar_executante"
                                    v-model="healthInsurance.identificar_executante"
                                    class="mr-2 text-orange-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                                    />
                                    <span class="font-bold text-gray-800">  Identificar executante</span>
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

     <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-2">   
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

    const onOpenModalApproach = async (id: number) => {
        window.open("/approaches/"+id, "_blank", "width=500,height=500, top=100, left=500");
     }
  
      const onOpenModalLanguage = async (id: number) => {
            window.open("/languages/"+id, "_blank", "width=500,height=500, top=100, left=500");
          //await store.dispatch('MODAL_LANGUAGE_OPEN', true);
     }

      const onOpenModalTargetAudience = async (id: number) => {
            window.open("/target-audience/"+id, "_blank", "width=500,height=500, top=100, left=500");
          //await store.dispatch('MODAL_TARGET_AUDIENCE_OPEN', true);
     }


  
    
    return {
     onOpenModalApproach,
     onOpenModalLanguage,
     onOpenModalTargetAudience
    };
  },
 
});
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}

</style>
