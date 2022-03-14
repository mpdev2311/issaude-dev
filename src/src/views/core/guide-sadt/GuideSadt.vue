<template>
<div>
  <div class="  h-96 w-96 max-h-3/4 m-5 p-4 border-r-2 rounded  border-gray-500">
        <div class="sm:col-span-3">               
                <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
                     Paciente
                </label>
                <div class="mt-3 w-10/12">
                    <input type="text"  name="p_consulta" id="p_consulta" autocomplete="p_consulta" class=" xl:w-50 ml-2 text-sm bg-gray-200 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md transition duration-500 ease-in-out " >
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>                    
                </div>
             </div>
             
        <div class="sm:col-span-3">               
                <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
                     Paciente
                </label>
                <div class="mt-3 w-10/12">
                    <input type="text"  name="p_consulta" id="p_consulta" autocomplete="p_consulta" class=" xl:w-50 ml-2 text-sm bg-gray-200 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md transition duration-500 ease-in-out " >
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>                    
                </div>
             </div>
             
  </div>
  </div>
  
  
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router"
import  {Approach} from "../../../core/domain/approach/Approach-model"
import {mapGetters, mapMutations, mapState, useStore } from 'vuex'
import { key, store } from "../../../../src/core/store/store"
import { Specialty } from "../../../core/domain/specialty/specialty-model";


 
export default defineComponent({

  components: { 
  },
   methods: {
         ...mapMutations([         
          'approaches',
          'approach'
         ]),
      },

  computed:{
    ...mapState([
      'approach', 
      'specialties',
      'modalApprocVerify'
      ]),
    ...mapGetters([
      'approach', 
      'specialties', 
      'modalApprocVerify'
    ]),
  },

  beforeCreate : function() {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter();

    const approach = ref<Approach>({
      
      id : 0,
      descricao : "",
      id_especialidade : 0,
      id_user : 0,
      id_corp : 0,
      data_gravacao :"",
      ativo : true,


      
  });


  const specialty = ref<Specialty>({
      
    nome_especialidade : "",
    codigo : 0,
    id : 0,
    codigo2 : 0,
    id_user : 0,
    id_corp : 0,
    ativo : true,
    codigo_3 : "",      
  });


  store.dispatch('APPROACH_STORE_SET_BLANK', approach.value)

  onMounted(async () => {  
  //   console.log(store.getters.modalApprocVerify);
  //  if(store.getters.modalApprocVerify === true){
  //     approach.value.id = 0
  //     approach.value.descricao = ""
  //     approach.value.id_especialidade = 0
  //     approach.value.id_user = 0
  //     approach.value.id_corp = 0
  //     approach.value.data_gravacao =""
  //     approach.value.ativo = true

  //     //store.getters.approach.id = 0
  //     store.dispatch('APPROACH_STORE_SET_BLANK', approach.value)
  //  }else{
        if(router.currentRoute.value.params.id !== '0'){
          await store.dispatch('APPROACH_STORE_LOAD_BY_ID', router.currentRoute.value.params.id)
          await store.dispatch('SPECIALTY_STORE_LOAD')
          await store.dispatch('SPECIALTY_STORE_LOAD_BY_ID' , specialty.value.id)
        }else {
          await store.dispatch('APPROACH_STORE_SET_BLANK', approach.value)
          await store.dispatch('SPECIALTY_STORE_LOAD')
         }
  // }
    });
  
    const onCancel = async () =>{
      router.push('/guide-managements')
    }

    const onSave = async () => {      
      await store.dispatch('APPROACH_STORE_SAVE')
    };

    return {
      onSave,
      onCancel,
    };

  }

})
</script>
