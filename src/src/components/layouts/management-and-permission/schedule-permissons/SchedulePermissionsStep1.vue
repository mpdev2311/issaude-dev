
<template>
  <form class="">
    <div class="py-1 flex-auto">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-2 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
              <div class="sm:col-span-2">
                <label for="conselho" class="block text-sm font-medium text-gray-700">
                  Profissionais
                </label>
                <div class="mt-2">
                  <select
                    id="providers-select"
                    class="
                      mt-1
                      block
                      w-full
                      xl:w-96
                      py-2
                      px-3
                      bg-gray-200
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      sm:text-sm
                    "
                  >
                    <option value=""></option>
                    <option v-for="i in providers" :key="i" :value="i.id">{{ i.nome }}</option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="conselho" class="block text-sm font-medium text-gray-700">
                  Permissões
                </label>
                <fieldset class="relative z-0 w-full p-px mb-5">
                  <div class="block pt-3 pb-2 space-x-4">
                    <label>
                      <input
                        v-model="permissionsCheckbox.leitura"
                        type="checkbox"
                        name="checkbox"
                        class="
                          mr-2
                          text-orange-600
                          border-2 border-gray-300
                          focus:border-gray-300
                          focus:ring-orange-600
                        "
                      />
                      Leitura
                    </label>
                    <label>
                      <input
                        v-model="permissionsCheckbox.alteracao"
                        type="checkbox"
                        name="checkbox"
                        class="
                          mr-2
                          text-orange-600
                          border-2 border-gray-300
                          focus:border-gray-300
                          focus:ring-orange-600
                        "
                      />
                      Alterar
                    </label>
                    <label>
                      <input
                        v-model="permissionsCheckbox.gravacao"
                        type="checkbox"
                        name="checkbox"
                        id="nao_atende"
                        class="
                          mr-2
                          text-orange-600
                          border-2 border-gray-300
                          focus:border-gray-300
                          focus:ring-orange-600
                        "
                      />
                      Gravação
                    </label>
                    <label>
                      <input
                        v-model="permissionsCheckbox.excluir"
                        type="checkbox"
                        name="checkbox"
                        class="
                          mr-2
                          text-orange-600
                          border-2 border-gray-300
                          focus:border-gray-300
                          focus:ring-orange-600
                        "
                      />
                      Excluir
                    </label>
                    <label>
                      <input
                        v-model="permissionsCheckbox.excluir_bloqueio"
                        type="checkbox"
                        name="checkbox"
                        class="
                          mr-2
                          text-orange-600
                          border-2 border-gray-300
                          focus:border-gray-300
                          focus:ring-orange-600
                        "
                      />
                      Excluir Bloqueio
                    </label>
                    <label>
                      <input
                        v-model="permissionsCheckbox.encaixe"
                        type="checkbox"
                        name="checkbox"
                        class="
                          mr-2
                          text-orange-600
                          border-2 border-gray-300
                          focus:border-gray-300
                          focus:ring-orange-600
                        "
                      />
                      Encaixe
                    </label>
                  </div>
                  <span class="text-sm text-red-600 hidden" id="error"
                    >Option has to be selected</span
                  >
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-1 flex-auto">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-2 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
              <div class="sm:col-span-3 mt-1">
                <label for="conselho" class="block font-medium text-3xl text-gray-700">
                  Usuários sem acesso
                </label>

                <div class="bg-white shadow rounded-md overflow-hidden my-6">
                  <table class="text-left w-full border-collapse">
                    <thead class="border-b">
                      <tr>
                        <th
                          class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100"
                        >
                          Incluir
                        </th>
                        <th
                          class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100"
                        >
                          Usuário
                        </th>
                      </tr>
                    </thead>
                    <tbody v-for="i in profiles" :key="i">
                      <tr v-show="i.haveAcess == false" class="hover:bg-gray-200">
                        <td class="py-4 px-8 border-b text-gray-700 text-lg">
                          <button
                            @click.prevent="selectPermission(i), changeTable(i)"
                            class="
                              px-3
                              py-1
                              bg-green-600
                              text-white
                              rounded-md
                              text-sm
                              hover:bg-green-200
                              focus:outline-none
                            "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </td>
                        <td class="py-4 px-8 border-b text-gray-700 text-lg">
                          {{ i.nome }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="conselho" class="block text-3xl font-medium text-gray-700">
                  Usuários com acesso
                </label>

                <div class="bg-white shadow rounded-md overflow-hidden my-6">
                  <table class="text-left w-full border-collapse">
                    <thead class="border-b">
                      <tr>
                        <th
                          class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100"
                        >
                          Usuário
                        </th>
                        <th
                          class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100"
                        >
                          Remover
                        </th>
                      </tr>
                    </thead>
                    <tbody v-for="j in profiles" :key="j">
                      <tr v-show="j.haveAcess == true" class="hover:bg-gray-200">
                        <td class="py-4 px-8 border-b text-gray-700 text-lg">{{ j.nome }}</td>
                        <td class="py-4 px-8 border-b text-gray-700 text-lg">
                          <button
                            @click.prevent="selectPermission(j), changeTable(j)"
                            class="
                              px-3
                              py-1
                              bg-red-600
                              text-white
                              rounded-md
                              text-sm
                              hover:bg-red-300
                              focus:outline-none
                            "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
import { defineComponent, onMounted, ref } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'
import { key, store } from '../../../../core/store/store'
import AclProfile from '../../../../core/domain/acl/acl-profile/acl-profile-model'
import { SchedulingAccess } from '../../../../core/domain/management-and-permission/scheduling_access/scheduling-access-model'

export default defineComponent({
  props: [],
  components: {
    PlusIconSolid,
  },

  computed: {
    ...mapState([
      'schedulingAccessArray',
      'schedulingAccessObject',
      'aclProfile',
      'aclProfiles',
      'auxiliaryArray',
      'providers',
      'provider',
    ]),
    ...mapGetters([
      'schedulingAccessArray',
      'schedulingAccessObject',
      'aclProfile',
      'aclProfiles',
      'auxiliaryArray',
      'providers',
      'provider',
    ]),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const profiles = ref<Array<any>>([])
    const schedulingAccessObject = ref<SchedulingAccess>({
      id_usuario: 0,
      tela: 0,
      id_medico: 0,
      leitura: false,
      alteracao: false,
      gravacao: false,
      excluir: false,
      excluir_bloqueio: false,
      id_user: 0,
      id_corp: 0,
      data_gravacao: '',
      encaixe: false,
      ativo: true,
      id_setor_perfil: 0,
      id_setor: 0,
    })
    const aclProfile = ref<AclProfile>({
      id: 0,
      nome: '',
      descricao: '',
      id_usuario: 0,
      id_corp: 0,
      ativo: true,
      id_grupo: 0,
      haveAcess: false,
      permissions: [
        {
          id: 0,
          nome: '',
          alias: '',
          rota: '',
          ver: false,
          editar: false,
          excluir: false,
          download: false,
          importar: false,
          exportar: false,
          id_acl_perfil: 0,
        },
      ],
    })

    store.dispatch('ACL_PROFILE_STORE_SET_BLANK', aclProfile.value)
    store.dispatch('SCHEDULING_ACCESS_STORE_SET_BLANK', schedulingAccessObject.value)

    onMounted(async () => {
      await store.dispatch('ACL_PROFILE_STORE_LOAD')
      await store.dispatch('PROVIDER_STORE_LOAD')

      store.getters.aclProfiles.forEach((i) => {
        let index = store.getters.schedulingAccessArray.findIndex((obj) => obj.id_usuario == i.id)
        if (index < 0) {
          i.haveAcess = false
        } else {
          i.haveAcess = true
        }

        profiles.value.push(i)
      })

      console.log(store.getters.aclProfiles)
      console.log(store.getters.aclProfile)
    })

    const permissionsCheckbox = ref({
      leitura: false,
      alteracao: false,
      gravacao: false,
      excluir: false,
      excluir_bloqueio: false,
      encaixe: false,
    })

    const selectPermission = (i: any) => {
      if (i.haveAcess == false) {
        schedulingAccessObject.value.id_usuario = i.id

        let select = document.getElementById('providers-select')
        let aux_id_medico = select.options[select.selectedIndex].value
        console.log(aux_id_medico)

        schedulingAccessObject.value.id_medico = parseInt(aux_id_medico)
        
        schedulingAccessObject.value.tela = 1
        schedulingAccessObject.value.leitura = permissionsCheckbox.value.leitura
        schedulingAccessObject.value.alteracao = permissionsCheckbox.value.alteracao
        schedulingAccessObject.value.encaixe = permissionsCheckbox.value.encaixe
        schedulingAccessObject.value.gravacao = permissionsCheckbox.value.gravacao
        schedulingAccessObject.value.excluir = permissionsCheckbox.value.excluir
        schedulingAccessObject.value.excluir_bloqueio = permissionsCheckbox.value.excluir_bloqueio

        console.log(schedulingAccessObject.value)
        console.log(i)

        const response = store.dispatch(
          'SCHEDULING_ACCESS_STORE_SAVE',
          schedulingAccessObject.value
        )
        console.log(response)

        console.log('inserido')
      } else {
        
        const response = store.dispatch('SCHEDULING_ACCESS_STORE_DELETE_BY_ID', i.id)
        console.log(response)
        console.log('removido')
      }
    }

    const changeTable = (i: any) => {
      if (i.haveAcess == false) {
        i.haveAcess = true
      } else {
        i.haveAcess = false
      }
    }

    return {
      selectPermission,
      profiles,
      permissionsCheckbox,
      changeTable,
    }
  },
})
</script>