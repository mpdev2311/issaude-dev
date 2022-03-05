<template>
<div class="h-screen">
  <div>
    <div class="mt-19  bg-gray-300 hover:bg-gray-200  py-5 px-5 border-b-4 border-gray-400 hover:border-gray-500 rounded">
        <div class="bg-white rounded-t-md shadow-md rounded-b-lg ">
            <div class="w-full">
              <div v-show="step === 'complete'"></div>
              <div class="" v-show="step != 'complete'">	
                <div class="border-b-2 px-4 py-2 text-white bg-gray-900 rounded-t-lg">                  
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div  v-if="healthProfessional.id !== 0">
                    <a href="#" class="flex-shrink-0 w-full group block">
                      <div class="flex items-center">
                        <div>
                          <img class="inline-block h-24 w-24 rounded-full" size="lg" shape="rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                        </div>
                        <div class="ml-3">
                          <p class="text-lg font-medium text-white group-hover:text-gray-300">
                            {{healthProfessional.apelido}}
                          </p>
                          <p class="text-sm font-medium text-white-500 group-hover:text-gray-300">
                            Registros: {{healthProfessional.id}}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                    <div class="">
                      <div class="mt-0 align-text-top text-lg text-gray-400 font-semibold">
                        Cadastro de Profissionais de Saúde
                      </div>
                       <div class="mt-8 ">
                        <div v-show="step === 1">
                          <div class="text-2xl  font-bold text-center text-white bg-gray-900 leading-tight">DADOS BÁSICOS </div>
                        </div>
                        
                        <div v-show="step === 2">
                          <div class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight">ENDEREÇO</div>
                        </div>

                        <div v-show="step === 3">
                          <div class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight">DADOS PESSOAIS</div>
                        </div>
                        <div v-show="step === 4">
                          <div class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight">DADOS PROFISSIONAIS </div>
                        </div>
                        
                        <div v-show="step === 5">
                          <div class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight">CONTATOS</div>
                        </div>
                       </div>
                    </div>

                    <div class=" ">
                         <div class="align-text-top m-2 text-right right-8">
                          <div class="uppercase tracking-wide text-xs font-bold text-white bg-gray-900  leading-tight text-right" v-text="`Página: ${step} - 5`"></div>
                        </div>
                        <div class="flex items-center md:w-64   mt-10">                        
                            <div class="w-full bg-white rounded-full mr-2">
                              <div class="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white" :style="'width: '+ parseInt(step / 6 * 100) +'%'"></div>
                            </div>
                            <div class="text-xs w-10 text-white" v-text="parseInt(step / 5 * 100) +'%'"></div>
                        </div>
                    </div>
                  </div>
                </div>
                  <div class="py-2 ">	
                    <div class="px-5 py-1 " v-show="step === 1">
                       <HealthProfessionalStep1 />
                    </div>
                    <div class="px-5 py-1 " v-show="step === 2">
                        <HealthProfessionalStep2 />
                    </div>
                    <div class="px-5 py-1 " v-show="step === 3">
                      <HealthProfessionalStep3 />
                    </div>
                     <div class="px-5 py-1" v-show="step === 4">
                       <HealthProfessionalStep4 />
                    </div>
                    <div class="px-5 py-1 " v-show="step === 5">
                        <HealthProfessionalStep5 />
                    </div>
                  </div>
              <div class="border-b-2 px-3 py-4 text-white bg-gray-900 rounded-b-lg">
                  <div class="flex flex-wrap  md:items-center md:justify-between">
              
                    <div class="w-4/6 text-right">
                      <button
                      v-show="step > 1"
                        @click="step--"
                        class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm  rounded-md text-center font-medium text-gray-600 bg-white hover:bg-gray-100 " 
                      >Anteriorr</button>
                    </div>

                    <div  class="w-2/2 text-right ">
                      <button
                        v-show="step < 5"
                        @click="step++"
                        class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm  rounded-md text-center text-white  bg-green-600 hover:bg-green-500 font-medium" 
                        >
                        Próximo </button>           

                      <button						
                        v-show="step === 5"
                        @click="onSave()"
                        class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm  rounded-md text-center text-white  bg-green-600 hover:bg-green-500 font-medium" 
                      >
                      Salvar	
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                      </button>
                    </div>
                    
                    <div v-show="step < 5" class="w-2/2 text-right">
                      <button
                        v-show="step < 5"
                        @click="step = 5"
                        class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm  rounded-md text-center text-white  bg-green-600 hover:bg-green-500 font-medium" 
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
            </div>
        </div>
    </div>
  </div>
  <NotificationAlert />
  </div> 
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router"
import { HealthProfessional } from "../../../core/domain/heath-professional/health-professional-model"
import {mapGetters, mapState, useStore } from 'vuex'
import { key, store } from "../../../../src/core/store/store"
import HealthProfessionalStep1 from "../../../components/layouts/helth-professional/HealthProfessionalStep1.vue";
import HealthProfessionalStep2 from "../../../components/layouts/helth-professional/HealthProfessionalStep2.vue";
import HealthProfessionalStep3 from "../../../components/layouts/helth-professional/HealthProfessionalStep3.vue";
import HealthProfessionalStep4 from "../../../components/layouts/helth-professional/HealthProfessionalStep4.vue";
import HealthProfessionalStep5 from "../../../components/layouts/helth-professional/HealthProfessionalStep5.vue";
import { TargetAudience } from "../../../core/domain/target-audience/target-audience-model";
import { Language } from "../../../core/domain/language/language-model";
import { Approach } from "../../../core/domain/approach/Approach-model";
import { Specialty } from "../../../core/domain/specialty/specialty-model";
import NotificationAlert from '../../../components/alerts/NotificationAlert.vue'

export default defineComponent({
  beforeCreate : function() {
    this.store = useStore(key)
  },

  components: { 
    NotificationAlert,
    HealthProfessionalStep1,
    HealthProfessionalStep2,
    HealthProfessionalStep3,
    HealthProfessionalStep4,
    HealthProfessionalStep5
  },

  computed:{
    ...mapState([
      'healthProfessional'
      ]),
    ...mapGetters([
      'healthProfessional'
    ]),
  },

  setup() {

    const router = useRouter();
    const step = ref<number>(1);

    const healthProfessional = ref<HealthProfessional>({
      id: 0,
      ativo: true,
      cnpj: '',
      id_corp: 0,
      nome: '',
      endereco: '',
      cep: '',
      prazo_entrega: 0,
      contato: '',
      tel: '',
      id_user: 0,
      cidade: '',
      bairro: '',
      data_gravacao: '',
      pagamento_em: 0,
      prazo_faturar: 0,
      prazo_revisao: 0,
      registro_convenio: '',
      id_empresa: 0,
      imagem: '',
      particular: false,
      versao_tiss: 0,
      tamanho_matricula: 0,
      registro_ans: '',
      fonte_pagadora: '',
      id_tipo_prestador: 1,
      idantigo: 0,
      rg:'',
      crm:'',
      uf:'',
      celular:'',
      imposto_hm: 0,
      produtividade: 0,
      primeira_especialidade: 0,
      conselho: '',
      do_corpo_clinico: false,
      encaminhador: false,
      socio: false,
      data_nasc: '',
      desconto: 0,
      e_mail: '',
      nao_atende: false,
      cofins: 0,
      iss: 0,
      ir: 0,
      cll: 0,
      apelido: '',
      cpf: '',
      cargo: '',
      salario: 0,
      id_setor: 0,
      tel_residencial: '',
      tel_outro: '',
      sexo: '',
      responsavel: '',
      data_admissao: '',
      cpts: '',
      livro_registro: '',
      ramal: '',
      data_demissao: '',
      obs: '',
      cf_df: '',
      banco: '',
      id_cargo:0,
      ncasa: '',
      proibir_fin: false,
      hablimit: false,
      senha: '',
      id_carga_horaria: 0,
      tipo_retorno_consulta: 0,
      n_pis: '',
      exige_cid: false,
      cid_consulta: '',
      obs_consulta: '',
      cns: '',
      cnes: '',
      quant_consulta: 0,
      cod_ibge: '',
      agencia: '',
      conta: '',
      segunda_especialidade: 0,
      terceira_especialidade: 0,
      icms: 0,
      ipi: 0,
      outras_taxas: 0,
      pis: 0,
      sus: false,
      inscricao: '',
      tipo_de_contruinte: '',
      tipo_contribuinte: '',
      p_autorizar: 0,
      uf_crm: '',
      foto: '',
      livro_ctps: '',
      id_civil: 0,
      data_entrada_brasil: '',
      data_documento: '',
      nacionalidade: '',
      pais_origem: '',
      serie_ctps: '',
      emissao_ctps: '',
      emissao_certidao: '',
      titulo_eleitor:'',
      zona_titulo_eleitor: '',
      secao_titulo_eleitor: '',
      nome_pai: '',
      uf_ctps: '',
      complemento_documento: '',
      orgao_documento: '',
      tipo_endereco: '',
      uf_documento: '',
      id_escolaridade: 0,
      tipo_certidao: '',
      naturalidade: '',
      naturalidade_uf: '',
      id_raca: 0,
      cbo: '',
      escola: false,
      nome_cartorio: '',
      numero_livro_registro: '',
      numero_folha_registro: '',
      numero_termo_registro: '',
      nome_mae: '',
      numero_cartorio: '',
      id_cbo: 0,
      identificar_executante: false,
      id_banco: 0,
      complemento_end:'',
      uf_estados:'',
      rqe: '',
      observacao_funcionario:'',
      repetir_guia: false,
      repetir_senha: false,
      elegibilidade: '',
      id_idioma: '',
      id_publico: '',
      id_abordagem: '',
    });

    const specialty = ref<Specialty>({
      nome_especialidade : "",
      codigo : 0,
      id : 0,
      codigo2 : 0,
      id_user : 0,
      id_corp : 0,
      ativo : false,
      codigo_3 : ""
    })

    const approach = ref<Approach>({
      id : 0,
      descricao : "" ,
      id_especialidade : 0,
      id_user : 1,
      id_corp : 1,
      data_gravacao : "",
      ativo : true 
    })

    const language = ref<Language>({
        id : 0,
        descricao : ""  ,
        id_user : 0,
        id_corp : 0,
        data_gravacao : "",
        ativo : true 
      })

    const targetAudience = ref<TargetAudience>({
      id : 0,
      descricao : ""  ,
      id_user : 0,
      id_corp : 0,
      data_gravacao : "",
      ativo : true 
    })

  store.dispatch('HEALTH_PROFESSIONAL_STORE_SET_BLANK', healthProfessional.value)
  
  onMounted(async () => {
    await store.dispatch('SPECIALTY_STORE_LOAD')
    await store.dispatch('APPROACH_STORE_LOAD')
    await store.dispatch('LANGUAGES_STORE_LOAD')
    await store.dispatch('TARGET_AUDIENCE_STORE_LOAD')

    if(router.currentRoute.value.params.id !== '0'){
      await store.dispatch('HEALTH_PROFESSIONAL_STORE_LOAD_BY_ID', router.currentRoute.value.params.id)          
        await store.dispatch('SPECIALTY_STORE_LOAD_BY_ID' , specialty.value.id)          
        await store.dispatch('APPROACH_STORE_LOAD_BY_ID' , approach.value.id)           
        await store.dispatch('LANGUAGES_STORE_LOAD_BY_ID' , language.value.id)            
        await store.dispatch('TARGET_AUDIENCE_STORE_LOAD_BY_ID' , targetAudience.value.id)
    } else
      await store.dispatch('HEALTH_PROFESSIONAL_STORE_SET_BLANK', healthProfessional.value)
    
    });

    const onCancel = async () =>{
      router.push('/health_professionals')
    }

    const onSave = async () => {
      await store.dispatch('HEALTH_PROFESSIONAL_STORE_SAVE')
    };

    return {
      onSave,
      onCancel,
      step
    };
  }
})

</script>