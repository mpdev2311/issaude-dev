<template>
  <div>
    <h3 class="text-gray-700 text-2xl font-semibold">Local de Atendimento</h3>

    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-t-lg shadow-md">
         
<form class="space-y-4 divide-y divide-gray-200">
  <div class="space-y-8 divide-y divide-gray-200">

    <div class="pt-1">

 
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1 ">

        <div class="sm:col-span-1 ">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
          Prontuário
          </label>
          <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
          Local
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id_paciente" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
            Telefone
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id_empresa_solicitante" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

                <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
            CEP
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id_empresa_solicitante" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
            Endereço
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id_empresa_solicitante" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
            Bairro
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id_empresa_solicitante" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
            Cidade
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id_empresa_solicitante" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
            Nº
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id_empresa_solicitante" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
            UF
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id_empresa_solicitante" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">
            Empresa
          </label>
           <div class="mt-2 max-w-5xl ">
            <input  v-model="guideManagement.id_empresa_solicitante" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md transition duration-500 ease-in-out ">
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
import {mapGetters, mapMutations, mapState, useStore } from 'vuex'
import { key, store } from "../../../core/store/store"
import { GuideManagement } from "../../../core/domain/guide-management/guide-management-model";


 
export default defineComponent({

  components: { 
  },
   methods: {
         ...mapMutations([   
            'guideManagement',
             'guideManagements',
             'localAccess',
             'providers',
             'guidetypes'
         ]),
      },

  computed:{
    ...mapState([
      'guideManagement',
      'localAccess',
      'providers',
      'guidetypes'
      ]),
    ...mapGetters([
      'guideManagement',
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

    const guideManagement = ref<GuideManagement>({
      id:0,
      numero_guia: "0",
      emissao: "",
      id_profissional_executante: 0,
      id_paciente: 0,
      tipo_doenca: "",
      tempo_doenca: "",
      indicacao_acidente: 2,
      cid_principal: "",
      cid1: null,
      cid2: null,
      cid3: null,
      data_atendimento: "",
      cod_procedimento: "",
      tipo_consulta: 0,
      tipo_saida: 0,
      obs: "",
      cod_tabela_hm: "0",
      tempo_doe: "",
      tipo: 5,
      data_fim: "",
      tipo_atendimento: "",
      id_agenda: 1,
      consulta: true,
      senha: "",
      id_agenda_nome: 1,
      id_local_atendimento: 0,
      id_empresa_contratada: 1,
      usuario: "",
      //data_gravacao: "2021-11-08T18:55:25.421+00:00",
      id_solicitante: 0,
      id_corp: 1,
      id_tipo_internacao: null,
      id_regime_internacao: null,
      carater_internacao: "",
      id_user: 1,
      id_empresa_solicitante: 0,
      qdiarias: null,
      id_plano: 1,
      id_acomodacao: null,
      alta: null,
      id_entrega: null,
      data_hora_recebimento: null,
      id_user_recebeu: null,
      hora_atendimento: "1970-01-01T18:53:00.000+00:00",
      data_autorizacao: "",
      justificativa: null,
      id_especialidade: 0,
      id_medico_autorizador: 0,
      atendimento_rn: "",
      sintomas: null,
      prova_diagnostica: null,
      ativo: true,
      guia_glosa: null,
      validade_senha: "",
      data_solicitacao: "",
      cod_solicitante: null,
      cod_executante: null,
      numero_guia_solicitacao_internacao: null,
      is_venda: false,
      id_prestador: null,
      id_user_quitou: null,
      dados_neo_natal: null,
      dados_parto: null
  });

   store.dispatch('GUIDE_MANAGEMENT_STORE_SET_BLANK', guideManagement.value)

  onMounted(async () => { 
      await store.dispatch('LOAD_LOCAL_ACESS')
      await store.dispatch('PROVIDER_STORE_LOAD')
      await store.dispatch('GUIDES_TYPE_STORE_LOAD')
      const { id } = router.currentRoute.value.params;

      if(id !== '0'){
        await store.dispatch('GUIDE_MANAGEMENT_STORE_LOAD_BY_ID', router.currentRoute.value.params.id)
      }else {      
        store.getters.guideManagement.tipo = 5   
         await store.dispatch('GUIDE_MANAGEMENT_STORE_SET_BLANK', guideManagement.value)
        }
    });
  
    const onCancel = async () =>{
      router.push('/guide-managements')
    }

    const onSave = async () => {   
      store.getters.guideManagement.tipo = 5;
      await store.dispatch('GUIDE_MANAGEMENT_STORE_SAVE')
    };

    return {
      onSave,
      onCancel,
    };

  }

})
</script>
