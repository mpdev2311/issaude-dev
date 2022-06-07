<template>
  <div>
    <h3 class="text-gray-700 text-2xl font-semibold">Cadastro de Empresas</h3>

    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-t-lg shadow-md">
          <form class="space-y-4 divide-y divide-gray-200">
            <div class="space-y-8 divide-y divide-gray-200">
              <div class="pt-1">
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Nome
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.nome"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Cnpj
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.cnpj"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Endereço
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.endereco"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      UF
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.uf"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Cidade
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.cidade"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Bairro
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.bairro"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Cep
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.cep"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Tel_Comercial
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.tel_comercial"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Tel_Residencial
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.tel_residencial"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Tel_Celular
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.tel_celular"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      E-mail
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.e_mail"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">
                      Apelido
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                        v-model="company.apelido"
                      />
                    </div>
                  </div>

                  <!-- Select -->
                  <div class="sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">
                      Usuário
                    </label>
                    <div class="mt-1">
                      <select
                        v-model="company.id_user"
                        id="tipo"
                        name="tipo"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option v-for="item in user" :key="item.nome" v-bind:value="item.id">
                          {{ item.nome }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <!-- Select -->
                  <div class="sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">
                      Corporação
                    </label>
                    <div class="mt-1">
                      <select
                        v-model="company.id_corp"
                        id="corporation"
                        name="corporation"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option
                          v-for="item in usercorporation"
                          :key="item.nome"
                          v-bind:value="item.id"
                        >
                          {{ item.nome }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex justify-end px-4 py-3 bg-gray-50 rounded-b-lg text-right sm:px-6">
      <button
        @click="onCancel()"
        type="button"
        class="space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
      >
        Voltar
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        @click="onSave()"
        type="button"
        class="space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4"
      >
        Salvar
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Company } from './company-model'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'

export default defineComponent({
  components: {},

  computed: {
    ...mapState(['company']),
    ...mapGetters(['company']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()

    const company = ref<Company>({
      id: 0,
      nome: '',
      cnpj: '',
      crm: 0,
      cnes: '',
      endereco: '',
      tl: '',
      numero: '',
      complemento: '',
      municipio: '',
      uf: '',
      cod_ibge: '',
      cep: '',
      tel_comercial: '',
      tel_residencial: '',
      tel_celular: '',
      tel_outro: '',
      id_cidade: 0,
      id_bairro: 0,
      fatura: true,
      logomarca: '',
      e_mail: '',
      smtp: '',
      senha: '',
      smtp_porta: 0,
      e_mail_destino: '',
      ism: true,
      apelido: '',
      id_corp: 0,
      contato: '',
      id_user: 0,
      cidade: '',
      bairro: '',
      cf_df: '',
      numero_nf_inicial: 0,
      numero_nf_final: 0,
      validade_nf: '',
      inscri_estadual: '',
      cod_unidade_federacao: 0,
      ch_consulta: 0,
      ch_sadt: 0,
      ch_hi: 0,
      ch_us: 0,
      retorno: 0,
      site: '',
      regime_tributario: 0,
      cnae: '',
      inscricao_municipal: '',
      enviar_nfe: true,
      certificado: '',
      senha_certificado: '',
      ativo: true,
      csc: '',
      id_responsavel: 0,
      certificado_serial: '',
      validade_certificado: '',
      certificado_revogado: true,
      certificado_nome: '',
      data_gravacao: '',
      carga_tributaria: 0,
      modelo_exames: 0,
      modelo_venda: 0,
      json_google: '',
      mp_access_token: '',
      mp_client_id: '',
      mp_client_secret: '',
      mp_public_key: '',
    })

    store.dispatch('DOSAGE_STORE_SET_BLANK', company.value)

    onMounted(async () => {
      if (router.currentRoute.value.params.id !== '0')
        await store.dispatch('COMPANY_STORE_LOAD_BY_ID', router.currentRoute.value.params.id)
      else await store.dispatch('COMPANY_STORE_SET_BLANK', company.value)
    })

    const onCancel = async () => {
      router.push('/companies')
    }

    const onSave = async () => {
      await store.dispatch('COMPANY_STORE_SAVE')
    }

    return {
      onSave,
      onCancel,
    }
  },
})
</script>
