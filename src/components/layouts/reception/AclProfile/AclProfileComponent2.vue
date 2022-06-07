<template>
  <div>
    <div
      :class="`modal ${
        !modalIsOpen && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div
        class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <svg
            class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content py-4 text-left px-6 hover:bg-gray-200">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Permissões</p>
            <div class="modal-close cursor-pointer z-50" @click="onCloseModal()">
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>

          <!--Body-->

          <div>
            <div class="col-span-3 sm:col-span-3 bg-gray-200">
              <div class="px-3 py-2">
                <input
                  v-model="permission.criar"
                  type="checkbox"
                  class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                />
                <span class="px-0"> Criar</span>
              </div>
              <div class="px-3 py-1">
                <input
                  v-model="permission.editar"
                  type="checkbox"
                  class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                />
                <span class="px-0"> Editar</span>
              </div>
              <div class="px-3 py-1">
                <input
                  v-model="permission.excluir"
                  type="checkbox"
                  class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                />
                <span class="px-0"> Excluir</span>
              </div>
              <div class="px-3 py-1">
                <input
                  v-model="permission.ver"
                  type="checkbox"
                  class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                />
                <span class="px-0"> Ver</span>
              </div>
              <div class="px-3 py-1">
                <input
                  v-model="permission.download"
                  type="checkbox"
                  class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                />
                <span class="px-0"> Download</span>
              </div>
              <div class="px-3 py-1">
                <input
                  v-model="permission.copiar"
                  type="checkbox"
                  class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                />
                <span class="px-0"> Copiar</span>
              </div>
              <div class="px-3 py-1">
                <input
                  v-model="permission.importar"
                  type="checkbox"
                  class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                />
                <span class="px-0"> Importar</span>
              </div>
              <div class="px-3 py-1">
                <input
                  v-model="permission.exportar"
                  type="checkbox"
                  class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                />
                <span class="px-0"> Exportar</span>
              </div>
            </div>
          </div>

          <!--Footer-->
          <div class="flex justify-end pt-3">
            <button
              @click="onCloseModal()"
              type="button"
              class="space-x-4 inline-flex justify-center px-2 py-3 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
            >
              Fechar
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
          </div>
        </div>
      </div>
    </div>
    <!-- FIM DO MODAL -->

    <div class="mt-10 sm:mt-0">
      <NotificationAlert />
      <div class="md:grid md:grid-cols-4 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Informação do Perfil</h3>

            <p class="mt-1 text-sm text-gray-600">Informações do perfil</p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="contracts" class="block text-sm font-medium text-gray-700"
                      >Nome Perfil</label
                    >
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      autocomplete="nome"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 cursor-not-allowed rounded-md"
                      disabled
                      v-model="aclProfile.nome"
                    />
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label for="email_address" class="block text-sm font-medium text-gray-700"
                      >Descrição</label
                    >
                    <input
                      type="text"
                      name="descricao"
                      id="descricao"
                      autocomplete="descricao"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 cursor-not-allowed rounded-md"
                      disabled
                      v-model="aclProfile.descricao"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-4 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Acessos</h3>
            <p class="mt-1 text-sm text-gray-600">Informe os acessos do perfil</p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-2 mt-1">
                    <label for="contracts" class="block text-sm font-medium text-gray-700"
                      >Modúlo</label
                    >
                    <select
                      v-model="aclModuleSelected"
                      @change="onSelectChange"
                      id="select-modulo"
                      name="select-modulo"
                      autocomplete="user"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    >
                      <option value=""></option>
                      <option
                        v-for="item in aclModuleRoutes"
                        :key="item"
                        v-bind:value="{ ...item }"
                      >
                        {{ item.nome }}
                      </option>
                    </select>
                  </div>

                  <div class="col-span-3 sm:col-span-2">
                    <label for="email_address" class="block text-sm font-medium text-gray-700"
                      >Rota</label
                    >
                    <Multiselect :selectedItems="onSelectedItens" :data="aclModuleSelected.rotas" />
                  </div>
                  <div class="col-span-3 sm:col-span-1 py-7">
                    <button
                      @click="onOpenModal({})"
                      type="button"
                      class="space-x-4 inline-flex justify-center py-1 px-3 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Permissão
                    </button>
                  </div>
                  <div class="col-span-3 sm:col-span-1 py-7">
                    <button
                      @click="onSavePermission()"
                      type="button"
                      class="space-x-4 inline-flex justify-center py-1 px-3 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="mt-2 mb-2 flex flex-col sm:flex-row">
                  <div class="flex">
                    <div class="block relative mt-4 sm:mt-0">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                          <path
                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                          ></path>
                        </svg>
                      </span>
                      <input
                        @change="onFilter"
                        placeholder=""
                        v-model="search"
                        class="appearance-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                      />
                    </div>
                    <div class="">
                      <select
                        class="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      >
                        <option>Mosrar 5 resultados</option>
                        <option>Mostrar 10 resultados</option>
                        <option>Mostrar 20 resultados</option>
                      </select>
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                      ></div>
                    </div>
                  </div>
                  <button
                    class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-5"
                  >
                    <span class="flex justify-end px-4 py-0">
                      <svg
                        class="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      PDF
                    </span>
                  </button>
                  <button
                    class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-5 rounded-r"
                  >
                    <span class="flex justify-end px-4 py-0">
                      <svg
                        class="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Excel
                    </span>
                  </button>
                </div>
                <table class="text-left w-full border-collapse">
                  <thead class="border-b">
                    <tr>
                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Id Módulo
                      </th>
                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Rota
                      </th>

                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Permissões
                      </th>
                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Deletar
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    v-for="i in aclProfile.permissions"
                    :key="i"
                    class="text-left w-full border-collapse"
                  >
                    <tr class="hover:bg-gray-200">
                      <td class="py-4 px-6 border-b text-gray-700 text-lg">
                        {{ i.rota?.id_acl_modulo }}
                      </td>
                      <td class="py-4 px-6 border-b text-gray-700 text-lg">{{ i.rota?.nome }}</td>
                      <td class="py-4 px-8 border-b text-gray-700 text-lg">
                        <button
                          @click="onOpenModal(i)"
                          type="button"
                          class="space-x-4 inline-flex justify-center py-1 px-3 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Permissão
                        </button>
                      </td>
                      <td class="py-4 px-8 border-b text-gray-700 text-lg">
                        <button
                          @click="deletePermission(i)"
                          type="button"
                          class="space-x-4 inline-flex justify-center py-1 px-3 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
                        >
                          <svg
                            class="h-4 w-4"
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
              >
                <span class="text-xs xs:text-sm text-gray-900"></span>
                <div class="inline-flex mt-2 xs:mt-0">
                  <button
                    @click="previusPage"
                    class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-4 rounded-l"
                  >
                    Anterior
                  </button>
                  <button
                    @click="nextPage"
                    class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-4 rounded-r"
                  >
                    Proxima
                  </button>
                </div>
              </div>

              <div class="px-6 py-1"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store'
import AclProfile from '@domain/acl/acl-profile/acl-profile-model'
import AclProfilePermission from '@domain/acl/acl-profile/acl-permission-model'
import { AclModuleRoute } from '@domain/acl/acl-modules/routes/acl-module-route'
import { AclModule } from '@domain/acl/acl-modules/acl-module'
import NotificationAlert from '@components/alerts/NotificationAlert.vue'
import Multiselect from '@components/selects/Multiselect.vue'

export default defineComponent({
  components: { NotificationAlert, Multiselect },

  beforeCreate: function () {
    this.store = useStore(key)
  },
  computed: {
    ...mapState([
      'aclModuleRoute',
      'aclModuleRoutes',
      'aclProfiles',
      'aclProfile',
      'auxiliaryPermissions',
    ]),
    ...mapGetters([
      'aclModuleRoute',
      'aclModuleRoutes',
      'aclProfiles',
      'aclProfile',
      'auxiliaryPermissions',
    ]),
  },
  setup() {
    const router = useRouter()
    const modalIsOpen = ref<boolean>(false)
    const itemModule = ref()
    const showMessage = ref<boolean>(false)
    const aclModuleSelected = ref<AclModule>({
      id_modulo: 0,
      nome: '',
      rotas: [],
    })

    const aclRouteSelected = ref<AclModuleRoute>({
      id_rota: 0,
      id_acl_modulo: 0,
      nome: '',
      alias: '',
      rota: '',
      selected: false,
    })

    const rotas = ref<Array<object>>([{}])

    const permission = ref({
      id: 0,
      editar: false,
      criar: false,
      excluir: false,
      ver: false,
      download: false,
      copiar: false,
      importar: false,
      exportar: false,
      id_acl_perfil: 0,
      id_rota: 0,
      rota: new AclModuleRoute(),
    })
    const search = ref<String>('')
    const moduleSelected = ref<Boolean>(false)
    const routesFromMultiselect = ref<Array<any>>([])
    const permissions = ref<Array<object>>([{}])

    const aclProfile = ref<AclProfile>({
      id_perfil: 0,
      nome: '',
      descricao: '',
      id_usuario: 1,
      id_corp: 1,
      ativo: true,
      id_grupo: 0,
      selected: false,
      permissions: [new AclProfilePermission()],
    })

    const onSelectChange = (i: any) => {
      moduleSelected.value = true
      permission.value.id_acl_perfil = store.getters.aclProfile.id_perfil
      permission.value.id_rota = aclRouteSelected.value.id_rota
      permission.value.rota = aclRouteSelected.value
    }

    onMounted(async () => {
      const { id } = router.currentRoute.value.params

      if (id === '0') {
        store.dispatch('ACL_PROFILE_STORE_SET_BLANK', aclProfile.value)
        store.getters.aclProfile.permissions = []
        store.dispatch('ACL_MODULE_ROUTE_STORE_LOAD')
        store.dispatch('ACL_PROFILE_STORE_LOAD')
      } else {
        store.dispatch('ACL_PROFILE_STORE_LOAD_BY_ID', id)
        store.dispatch('ACL_MODULE_ROUTE_STORE_LOAD')
        store.dispatch('ACL_PROFILE_STORE_LOAD')
      }
    })
    const selectRotasChance = async (i) => {}
    const onCreate = () => {
      router.push('/aclprofile/0')
    }

    const onSelectedItens = (i) => {
      routesFromMultiselect.value = i
    }

    const onOpenModal = (i) => {
      if (i.id != null && i.id > 0) permission.value = i

      modalIsOpen.value = !modalIsOpen.value
    }

    const onCloseModal = async () => {
      if (permission.value.id !== null && permission.value.id > 0)
        await store.dispatch('PROFILES_ACL_CHANGE_PERMISSION', permission.value)

      modalIsOpen.value = !modalIsOpen.value
    }

    const onFilter = () => {
      const found = store.getters.aclProfile.permissions.filter(
        (element) => search.value === element.rota.nome
      )
    }

    const onSavePermission = () => {
      const { value } = routesFromMultiselect

      if (
        permission.value.editar === true ||
        permission.value.criar === true ||
        permission.value.excluir === true ||
        permission.value.ver === true ||
        permission.value.copiar === true ||
        permission.value.importar === true ||
        permission.value.exportar === true
      ) {
        if (Array.isArray(value as Array<any>) && (value as Array<any>).length > 0) {
          for (let i of value) {
            permission.value.rota = i
            store.dispatch('ACL_PROFILE_APPLY_ROUTE', {
              ...permission.value,
            })
          }
        } else {
          store.dispatch('MESSAGE_STORE_ERROR_PUSH', `Nenhuma rota foi selecionada!`)
        }
      } else {
        store.dispatch('MESSAGE_STORE_ERROR_PUSH', `Nenhuma permissão foi selecionada!`)
      }
    }

    const deletePermission = (perm) => {
      store.dispatch('ACL_PROFILE_REMOVE_ROUTE', perm)
    }

    return {
      permission,
      permissions,
      modalIsOpen,
      showMessage,
      itemModule,
      aclRouteSelected,
      rotas,
      aclModuleSelected,
      moduleSelected,
      search,
      onSelectedItens,
      onCloseModal,
      onOpenModal,
      onCreate,
      selectRotasChance,
      onSavePermission,
      deletePermission,
      onSelectChange,
      onFilter,
    }
  },
})
</script>
<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
