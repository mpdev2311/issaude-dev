<template>
  <div>
    <div id="schedule-mark-by-cpf">
      <div class="px-4 py-5 sm:p-6">
        <div class="px-4 py-1 flex-auto">
          <div class="pt-1">
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
              <div class="sm:col-span-2"></div>

              <div class="sm:col-span-2">
                <div v-show="notification === true">
                  <div class="rounded-md bg-green-50 p-4 text-center">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/check-circle -->
                        <svg
                          class="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-green-800">Painel de chamada</h3>
                        <div class="mt-2 text-sm text-green-700">
                          <div>Serviço - {{ passwordAttendance.sigla_servico }}</div>
                          <div>Senha - {{ passwordAttendance.senha_chamada }}</div>
                          <div>Prioridade - {{ passwordAttendance.prioridade }}</div>
                          <div></div>
                        </div>
                        <div class="mt-4">
                          <div class="-mx-2 -my-1.5 flex">
                            <button
                              @click.prevent="notification = false"
                              type="button"
                              class="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                            >
                              Fechar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul>
                  <li>
                    <fieldset>
                      <div class="flex justify-center">
                        <button
                          class="mt-20 ml-8 w-90 h-60 bg-blue-600 object-cover rounded-lg border-2 border-black z-40"
                          :id="'field-button-' + `${'1'}`"
                        >
                          <label class="font-mono text-3xl text-white"
                            >Informe o CPF do paciente</label
                          >
                          <input
                            type="text"
                            class="font-mono text-3xl text-center rounded-3xl mt-5"
                          />
                          <input
                            type="button"
                            class="font-mono text-3xl text-center rounded-3xl mt-5 text-white bg-blue-600"
                            value="Retirar senha"
                            @click.prevent="create()"
                          />
                        </button>
                      </div>
                    </fieldset>
                  </li>
                  <li>
                    <fieldset>
                      <div class="flex justify-center">
                        <button
                          class="mt-20 ml-8 w-75 h-55 bg-blue-600 object-cover rounded-lg border-2 border-black z-40"
                          @mouseleave="turnOffAnimations('animate-pulse', '2')"
                          @mouseenter="turnOnAnimations('animate-pulse', '2')"
                          @click.prevent="turnOnAnimations('animate-ping', '2'), create()"
                          :id="'field-button-' + `${'2'}`"
                        >
                          <label class="font-mono text-3xl text-white">Outros</label>
                        </button>
                      </div>
                    </fieldset>
                  </li>
                </ul>
              </div>

              <div class="sm:col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 360px) {
  #schedule-mark-by-cpf {
    background-image: url('../../../../assets/img-called-panel.png');
    background-repeat: no-repeat;
    bottom: 0;
    color: black;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
@media (min-width: 640px) {
  #schedule-mark-by-cpf {
    background-image: url('../../../../assets/img-called-panel.png');
    background-repeat: no-repeat;
    bottom: 0;
    color: black;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
@media (min-width: 768px) {
  #schedule-mark-by-cpf {
    background-image: url('../../../../assets/img-called-panel.png');
    background-repeat: no-repeat;
    bottom: 0;
    color: black;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}

@media (min-width: 992px) {
  #schedule-mark-by-cpf {
    background-image: url('../../../../assets/img-called-panel.png');
    background-repeat: no-repeat;
    bottom: 0;
    color: black;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
@media (min-width: 1200px) {
  #schedule-mark-by-cpf {
    background-image: url('../../../../assets/img-called-panel.png');
    background-repeat: no-repeat;
    bottom: 0;
    color: black;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { key, store } from '@core/store/store'
import { PasswordAttendance } from '@core/domain/reception/password-attendance/password-attendance-domain'
import { mapState, mapGetters, useStore } from 'vuex'
import router from '../../../../router'

export default defineComponent({
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
      sigla_servico: store.getters.passwordAttendance.sigla_servico,
      prioridade: '',
      senha_chamada: '',
      data_gravacao: '',
      id_paciente: 1,
      id_agenda: 1,
      id_agenda_marcacao: 1,
    })

    const notification = ref<boolean>(false)

    store.dispatch('PASSWORD_ATTENDANCE_STORE_SET_BLANK', passwordAttendance.value)

    onMounted(() => {
      store.dispatch('PASSWORD_ATTENDANCE_STORE_LOAD')
    })

    const openNotification = () => {
      notification.value = true

      setTimeout(() => {
        notification.value = false
      }, 3000)
    }

    const create = () => {
      openNotification()
      passwordAttendance.value.id_paciente = 0
      passwordAttendance.value.senha_chamada = ''

      store.dispatch('PASSWORD_ATTENDANCE_STORE_SAVE', passwordAttendance.value)
    }

    const turnOnAnimations = (animation: string, btnId: string) => {
      document.getElementById(`field-button-${btnId}`).classList.add(animation)
      if (animation === 'animate-ping') {
        setTimeout(() => {
          turnOffAnimations(animation, `${btnId}`)
        }, 1000)
      }
    }
    const turnOffAnimations = (animation: string, btnId: string) => {
      document.getElementById(`field-button-${btnId}`).classList.remove(animation)
    }
    return {
      turnOnAnimations,
      turnOffAnimations,
      create,
      notification,
    }
  },
})
</script>
