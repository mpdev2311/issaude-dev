<template>
  <div>
    <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
      <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <div class="flex justify-center items-center">
          <img width="120" src="../../../../assets/logo-default-02.png" />
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
                    class="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                  >
                    Fechar
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center">
            <h1 class="text-lg">DIGITE SEU CPF</h1>
          </div>

          <div class="flex mt-4 justify-center items-center">
            <label class="inline-flex items-center">
              <input
                @change="onChangeCpf()"
                v-model="cpf"
                type="text"
                class="text-center w-80 rounded-md w-full text-black text-lg h-20 rounded-lg object-cover z-40"
              />
            </label>
          </div>

          <div class="flex justify-center items-center">
            <button
              @click="create()"
              type="button"
              class="text-center mt-2 bg-green-600 rounded-md w-full text-white text-lg hover:bg-indigo-500 h-20 rounded-lg bg-green-600 object-cover z-40"
            >
              ATENDIMENTO NORMAL
            </button>
          </div>

          <div class="flex justify-center items-center">
            <button
              @click="create()"
              type="button"
              class="text-center bg-indigo-600 rounded-md w-full text-white text-lg hover:bg-indigo-500 mt-2 h-20 rounded-lg bg-green-600 object-cover z-40"
            >
              ATENDIMENTO PRIORITÁRIO
            </button>
          </div>
        </div>
      </div>
      <NotificationAlert />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { key, store } from '@core/store/store'
import { PasswordAttendance } from '@core/domain/reception/password-attendance/password-attendance-domain'
import { mapState, mapGetters, useStore } from 'vuex'
import router from '../../../../router'
import NotificationAlert from '../../../../components/alerts/NotificationAlert.vue'
export default defineComponent({
  components: {
    NotificationAlert,
  },
  computed: {
    ...mapState(['passwordAttendance', 'passwordAttendances']),
    ...mapGetters(['passwordAttendance', 'passwordAttendances']),
  },
  beforeCreate: function () {
    this.store = useStore(key)
  },
  setup() {
    const cpf = ref<string>('')

    const passwordAttendance = ref<PasswordAttendance>({
      id: 0,
      ativo: true,
      id_user: 1,
      id_corp: 1,
      senha: '',
      sigla_servico: store.getters.passwordAttendance.sigla_servico,
      prioridade: false,
      senha_chamada: false,
      data_gravacao: '',
      id_paciente: 0,
      id_agenda: 0,
      id_agenda_marcacao: 0,
    })

    const notification = ref<boolean>(false)
    store.dispatch('PASSWORD_ATTENDANCE_STORE_SET_BLANK', passwordAttendance.value)
    onMounted(() => {
      store.dispatch('PASSWORD_ATTENDANCE_STORE_LOAD')
    })

    const onChangeCpf = () => {
      if (cpf.value.length >= 11) {
        cpf.value = formatCPF(cpf.value)
        store.dispatch('FIND_PATIENT_BY_CPF', cpf.value)
      }
    }

    const formatCPF = (cpf) => {
      cpf = cpf.replace(/[^\d]/g, '')
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }

    const create = async () => {
      passwordAttendance.value.senha_chamada = false

      if (cpf.value !== '' && passwordAttendance.value.id_paciente == 0) {
        if (cpf.value.length <= 11) {
          cpf.value = formatCPF(cpf.value)
          await store.dispatch('FIND_PATIENT_BY_CPF', cpf.value)
          return
        }
        await store.dispatch('FIND_PATIENT_BY_CPF', cpf.value)
      }

      await store.dispatch('PASSWORD_ATTENDANCE_STORE_SAVE', passwordAttendance.value)
    }
    const cancel = () => {
      router.push('/password_attendance')
    }

    return {
      create,
      cancel,
      notification,
      cpf,
      onChangeCpf,
    }
  },
})
</script>
