<template>
  <div>
  <div>
    <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
      <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <img width="120" src='../../../../assets/logo-default-02.png' />
      </div>
        <div class="mt-6">
          <div class="flex justify-between items-center mt-4">
          <div v-if="false" class="ml-3">
            <h3 class="text-sm font-medium text-green-800">Painel de chamada</h3>
            <div class="mt-2 text-sm text-green-700">
              <div>Serviço - {{ passwordAttendance.sigla_servico }}</div>
              <div>Senha - {{ passwordAttendance.senha_chamada }}</div>
              <div>Prioridade - {{ passwordAttendance.prioridade }}</div>
              <div></div>
            </div>
            <div class="mt-4">
              <div class="-mx-2 -my-1.5 flex">
                <label
                  @click.prevent="notification = false"
                  type="button"
                  class="
                    ml-3
                    bg-green-50
                    px-2
                    py-1.5
                    rounded-md
                    text-sm
                    font-medium
                    text-green-800
                    hover:bg-green-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-offset-green-50
                    focus:ring-green-600
                  ">
                  Fechar
                </label>
              </div>
            </div>
          </div>
          </div>
            <button
              @click="onGoToService('CONSULTA')"
              type="button"
              class="text-center bg-green-600 rounded-md w-full text-white text-lg hover:bg-green-500 h-20 rounded-lg bg-green-600 object-cover z-40">
              CONSULTA
            </button>
            <button
              @click="onGoToService('EXAMES')"
              type="button"
              class="text-center bg-green-600 rounded-md w-full text-white text-lg hover:bg-green-500 mt-2 h-20 rounded-lg bg-green-600 object-cover z-40"
            >
              EXAMES
            </button>
            <!-- <button
              @click="onGoToService('LABORATÓRIO')"
              type="button"
              class="text-center bg-green-600 rounded-md w-full text-white text-lg hover:bg-green-500 mt-2 h-20 rounded-lg bg-green-600 object-cover z-40"
            >
              LABORATÓRIO
            </button> -->
        </div>
      </div>
    <NotificationAlert />
  </div>
</div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { key, store } from '../../../../core/store/store'
import { PasswordAttendance } from '../../../../core/domain/reception/password-attendance/password-attendance-domain'
import { mapGetters, mapState, useStore } from 'vuex'
import router from '../../../../router'
import NotificationAlert from '../../../../components/alerts/NotificationAlert.vue'
export default defineComponent({
  components: { 
      NotificationAlert
  },
  computed: {
    ...mapState(['passwordAttendance', 'passwordAttendances']),
    ...mapGetters(['passwordAttendance', 'passwordAttendances']),
  },
  beforeCreate: function () {
    this.store = useStore(key)
  },
  setup() {
  const passwordAttendance = ref<PasswordAttendance>({
      id: 0,
      ativo: true,
      id_user: 1,
      id_corp: 1,
      senha: '',
      sigla_servico: '',
      prioridade: false,
      senha_chamada: false,
      data_gravacao: '',
      id_paciente: 1,
      id_agenda: 1,
      id_agenda_marcacao: 1,
    })
    store.dispatch('PASSWORD_ATTENDANCE_STORE_SET_BLANK', passwordAttendance.value)
    onMounted(() => {
    
    })
    const onGoToService = (i: string) => {
      router.push(`/password_attendance/${i}`)
    }
    return {
      onGoToService,
    }
  },
})
</script>