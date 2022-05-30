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
            <h3 class="text-lg font-medium leading-6 text-gray-900">Informação do usuário</h3>

            <p class="mt-1 text-sm text-gray-600">Informações do usuário</p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="contracts" class="block text-sm font-medium text-gray-700"
                      >Nome</label
                    >
                    <input
                      v-model="user.nome"
                      type="text"
                      name="nome"
                      id="nome"
                      autocomplete="nome"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 cursor-not-allowed rounded-md"
                      disabled
                    />
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label for="email_address" class="block text-sm font-medium text-gray-700"
                      >CPF</label
                    >
                    <input
                      v-model="user.cpf"
                      type="text"
                      name="descricao"
                      id="descricao"
                      autocomplete="descricao"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 cursor-not-allowed rounded-md"
                      disabled
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
            <h3 class="text-lg font-medium leading-6 text-gray-900">Perfis de acesso</h3>
            <p class="mt-1 text-sm text-gray-600">Informe os perfis do usuário</p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-2 mt-1">
                    <label for="contracts" class="block text-sm font-medium text-gray-700"
                      >Perfil
                    </label>
                    <select
                      v-model="selectedProfile"
                      id="select-modulo"
                      name="select-modulo"
                      autocomplete="user"
                      class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    >
                      <option value=""></option>
                      <option v-for="item in aclProfiles" :key="item" v-bind:value="{ ...item }">
                        {{ item.nome }}
                      </option>
                    </select>
                  </div>

                  <div class="col-span-3 sm:col-span-1 py-7">
                    <button
                      @click="onSavePermission()"
                      type="button"
                      class="space-x-4 inline-flex justify-center py-1 px-3 border border-transparent shadow-xs text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <div>Adicionar</div>
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
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="">
                <table class="text-left w-full border-collapse">
                  <thead class="border-b">
                    <tr>
                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Perfil
                      </th>
                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Descrição
                      </th>

                      <th class="py-3 px-5 bg-gray-900 font-medium uppercase text-sm text-gray-100">
                        Deletar
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    v-for="i in aclProfileCorporationSelected"
                    :key="i"
                    class="text-left w-full border-collapse"
                  >
                    <tr class="hover:bg-gray-200">
                      <td class="py-4 px-6 border-b text-gray-700 text-lg">{{ i.perfil?.nome }}</td>
                      <td class="py-4 px-6 border-b text-gray-700 text-lg">
                        {{ i.perfil?.descricao }}
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
import { key, store } from '@core/store/store'
import NotificationAlert from '../../../../components/alerts/NotificationAlert.vue'
import Multiselect from '../../../selects/Multiselect.vue'
import AclProfile from '@core/domain/acl/acl-profile/acl-profile-model'
import AclProfilePermission from '@core/domain/acl/acl-profile/acl-permission-model'

export default defineComponent({
  components: { NotificationAlert, Multiselect },

  beforeCreate: function () {
    this.store = useStore(key)
  },
  computed: {
    ...mapState([
      'user',
      'users',
      'aclProfiles',
      'aclProfileCorporations',
      'profileSelected',
      'aclProfileCorporationSelected',
    ]),
    ...mapGetters([
      'user',
      'users',
      'aclProfiles',
      'aclProfileCorporations',
      'profileSelected',
      'aclProfileCorporationSelected',
    ]),
  },
  setup() {
    const router = useRouter()
    const modalIsOpen = ref<boolean>(false)
    const itemModule = ref()
    const showMessage = ref<boolean>(false)
    const selectedProfile = ref<AclProfile>({
      id_perfil: 0,
      nome: '',
      descricao: '',
      id_usuario: 0,
      selected: false,
      id_corp: 0,
      ativo: true,
      id_grupo: 0,
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
          criar: false,
          copiar: false,
          id_rota: 0,
          id_acl_perfil: 0,
        },
      ],
    })

    const search = ref<String>('')
    const moduleSelected = ref<Boolean>(false)
    const arraySelected = ref<Array<object>>([])

    const onSelectChange = (i: any) => {}
    const { id } = router.currentRoute.value.params
    const user = JSON.parse(localStorage.getItem('user')) || {}
    const corp = JSON.parse(localStorage.getItem('corp')) || {}

    const params = {
      id_usuario: parseInt(id.toString()),
      id_corp: parseInt(corp.id),
    }

    onMounted(() => {
      store.dispatch('ACL_PROFILE_STORE_LOAD')
      store.dispatch('USER_STORE_LOAD_BY_ID', id)
      store.dispatch('ACL_PROFILE_CORPORATION_STORE_LOAD')
      setTimeout(() => {
        store.dispatch('ACL_PROFILE_CORPORATION_STORE_LOAD_SELECTED', params)
      }, 500)
    })

    const formatDate = (date) => {
      return dayjs(date).format(`DD/MM/YYYY`).toString()
    }
    const selectRotasChance = async (i) => {}
    const onCreate = () => {
      router.push('/users/0')
    }

    const onFilter = () => {
      const found = store.getters.aclProfile.permissions.filter(
        (element) => search.value === element.rota.nome
      )
    }

    const onSavePermission = () => {
      const array = ref<Array<any>>([])
      const object = {
        id_corp: corp.id,
        id_acl_perfil: selectedProfile.value.id_perfil,
        id_usuario: parseInt(id.toString()),
      }

      array.value = store.getters.aclProfileCorporationSelected
      array.value.push(object)
      store.dispatch('ACL_PROFILE_CORPORATION_STORE_SAVE', array.value)

      setTimeout(() => {
        store.dispatch('ACL_PROFILE_CORPORATION_STORE_LOAD_SELECTED', params)
      }, 500)
    }

    const deletePermission = (i) => {
      const list = ref<Array<object>>([])

      store.getters.aclProfileCorporationSelected.forEach((c) => {
        if (c.id_acl_perfil !== i.id_acl_perfil) {
          const object = {
            id_corp: corp.id,
            id_acl_perfil: c.id_acl_perfil,
            id_usuario: parseInt(id.toString()),
          }
          list.value.push(object)
        }
      })

      store.dispatch('ACL_PROFILE_CORPORATION_STORE_SAVE', list.value)

      setTimeout(() => {
        store.dispatch('ACL_PROFILE_CORPORATION_STORE_LOAD_SELECTED', params)
      }, 500)
    }

    return {
      modalIsOpen,
      showMessage,
      itemModule,
      moduleSelected,
      search,
      selectedProfile,
      arraySelected,
      formatDate,
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
