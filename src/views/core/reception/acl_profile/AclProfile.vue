<template>
  <div class="h-screen">
    <div>
      <div
        class="mt-19 bg-gray-300 hover:bg-gray-200 py-5 px-5 border-b-4 border-gray-400 hover:border-gray-500 rounded"
      >
        <!-- animation transform translate-x-4 translate-y-15 scale-10 rotate-5 -->
        <div class="bg-white rounded-t-md shadow-md rounded-b-lg">
          <div class="w-full">
            <!-- inicio step -->
            <div v-show="step === 'complete'"></div>
            <div class="" v-show="step != 'complete'">
              <!-- Top Navigation -->
              <div class="border-b-2 px-4 py-2 text-white bg-gray-900 rounded-t-lg">
                <!-- <div class="uppercase tracking-wide text-xs font-bold text-white bg-gray-900 mb-1 leading-tight" v-text="`Página: ${step} - 6`"></div> -->
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div v-if="true">
                    <a href="#" class="flex-shrink-0 w-full group block">
                      <div class="flex items-center">
                        <div class="ml-3">
                          <p class="text-lg font-medium text-white group-hover:text-gray-300">
                            {{}}
                          </p>
                          <p class="text-sm font-medium text-white-500 group-hover:text-gray-300">
                            Registro: {{ aclProfile.id_perfil }}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="">
                    <div class="mt-0 align-text-top text-lg text-gray-400 font-semibold"></div>
                    <div class="mt-8">
                      <div v-show="step === 1">
                        <div
                          class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight"
                        >
                          Perfil
                        </div>
                      </div>

                      <div v-show="step === 2">
                        <div
                          class="text-2xl font-bold text-center text-white bg-gray-900 leading-tight"
                        >
                          Rotas
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <div class="align-text-top m-2 text-right right-8">
                      <div
                        class="uppercase tracking-wide text-xs font-bold text-white bg-gray-900 leading-tight text-right"
                        v-text="`Página: ${step} - 1`"
                      ></div>
                    </div>
                    <div class="flex items-center md:w-64 mt-10">
                      <div class="w-full bg-white rounded-full mr-2">
                        <div
                          class="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white"
                          :style="'width: ' + parseInt((step / 2) * 100) + '%'"
                        ></div>
                      </div>
                      <div
                        class="text-xs w-10 text-white"
                        v-text="parseInt((step / 2) * 100) + '%'"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Top Navigation -->

              <!-- Step Content -->
              <div class="py-2">
                <div class="px-5 py-1" v-show="step === 1">
                  <AclProfileComponent />
                  <!-- <Template /> -->
                </div>
                <div class="px-5 py-1" v-show="step === 2">
                  <AclProfileComponent2 />
                  <!-- <Template /> -->
                </div>
              </div>

              <div class="border-b-2 px-3 py-4 text-white bg-gray-900 rounded-b-lg">
                <div class="flex flex-wrap md:items-center md:justify-between">
                  <div class="w-4/6 text-right"></div>

                  <div class="w-2/2 text-right">
                    <button
                      v-show="step > 1"
                      @click="step--"
                      class="ml-2 mr-2 sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center font-medium text-gray-600 bg-white hover:bg-gray-100"
                    >
                      Anterior
                    </button>

                    <button
                      v-show="step != 2"
                      @click="step++"
                      class="ml-2 mr-2 first-letter: sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-green-600 hover:bg-green-500 font-medium"
                    >
                      Próximo
                    </button>

                    <button
                      v-show="step === 2"
                      @click="onSave()"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-green-600 hover:bg-green-500 font-medium"
                    >
                      Salvar
                      <!-- @click="step = 'complete'" -->
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

                  <div v-show="step < 2" class="w-2/2 text-right"></div>

                  <div class="w-2/2 text-right">
                    <button
                      @click="onCancel()"
                      type="button"
                      class="sm:space-x-0 sm:inline-flex sm:justify-items-center space-x-2 inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-md text-center text-white bg-red-600 hover:bg-red-500 font-medium"
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

            <!-- fim -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUpdate, toRef } from 'vue'
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'
import { useRouter } from 'vue-router'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store/store'
import AclProfileComponent from '../../../../components/layouts/reception/AclProfile/AclProfileComponent.vue'
import AclProfileComponent2 from '../../../../components/layouts/reception/AclProfile/AclProfileComponent2.vue'
import AclProfile from '@core/domain/acl/acl-profile/acl-profile-model'

export default defineComponent({
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
    AclProfileComponent2,
    AclProfileComponent,
  },

  computed: {
    ...mapState(['aclProfile']),
    ...mapGetters(['aclProfile']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()
    const open = ref<boolean>(false)
    const step = ref<number>(1)
    const routeParam = ref<any>(0)

    onMounted(async () => {
      store.dispatch('ACL_PROFILE_STORE_LOAD')
      const { id } = router.currentRoute.value.params
      routeParam.value = id
    })

    const onSave = async () => {
      await store.dispatch('ACL_PROFILE_STORE_SAVE', store.getters.aclProfile)
    }
    const onSelectChange = async (i: any) => {
      await store.dispatch('SELECTED_ITEM_LOAD', i)
    }

    const onCancel = async () => {
      router.push('/acl_profiles')
    }

    return {
      onCancel,
      onSave,
      onSelectChange,
      step,
      open,
      routeParam,
    }
  },
})
</script>
