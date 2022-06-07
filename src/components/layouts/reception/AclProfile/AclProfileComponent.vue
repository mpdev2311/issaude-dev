<template>
  <div>
    <form action="">
      <div class="py-1 flex-auto">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-2 flex-auto">
            <div class="pt-1">
              <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
                <div class="sm:col-span-4">
                  <label for="nome" class="block text-sm font-medium text-gray-700"> Grupo </label>
                  <div class="mt-2">
                    <select
                      class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                      v-model="aclProfile.id_grupo"
                    >
                      <option></option>
                      <option v-for="i in aclGroups" :key="i" :value="i.id">{{ i.nome }}</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2"></div>

                <div class="sm:col-span-1">
                  <label for="nome" class="block text-sm font-medium text-gray-700">
                    Registro
                  </label>
                  <div class="mt-2">
                    <input
                      disabled
                      type="text"
                      name="nome"
                      id="nome"
                      v-model="aclProfile.id_perfil"
                      autocomplete="given-name"
                      class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="nome" class="block text-sm font-medium text-gray-700"> Nome </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      v-model="aclProfile.nome"
                      autocomplete="given-name"
                      class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="nome" class="block text-sm font-medium text-gray-700">
                    Descrição
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      v-model="aclProfile.descricao"
                      autocomplete="given-name"
                      class="shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md mb-6"
                    />
                  </div>
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
import { defineComponent, onMounted, ref } from 'vue'
import Multiselect from '@components/selects/Multiselect.vue'
import AclProfile from '@domain/acl/acl-profile/acl-profile-model'
import { key, store } from '@core/store'
import { mapState, mapGetters, useStore } from 'vuex'
import AclGroup from '@domain/acl/acl-group/acl-group-model'
import router from '@src/router'

export default defineComponent({
  computed: {
    ...mapState(['aclProfile', 'aclProfiles', 'aclGroup', 'aclGroups']),
    ...mapGetters(['aclProfile', 'aclProfiles', 'aclGroup', 'aclGroups']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },
  components: {
    Multiselect,
  },
  setup() {
    const aclGroup = ref<AclGroup>({
      id: 0,
      nome: '',
    })

    const aclProfile = ref<AclProfile>({
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

    store.dispatch('ACL_PROFILE_STORE_SET_BLANK', aclProfile.value)
    store.dispatch('ACL_GROUP_STORE_SET_BLANK', aclGroup.value)

    onMounted(async () => {
      if (router.currentRoute.value.params.id !== '0') {
        store.dispatch('ACL_GROUP_STORE_LOAD')
        store.dispatch('ACL_PROFILE_STORE_LOAD_BY_ID', router.currentRoute.value.params.id)
      } else {
        await store.dispatch('ACL_GROUP_STORE_LOAD')
      }
    })

    return {}
  },
})
</script>
