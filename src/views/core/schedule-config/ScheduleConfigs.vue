<template>
  <div>
    <form class="">
      <h3 class="text-gray-700 text-2xl font-semibold">Abrir Nova Agenda</h3>

      <div class="mt-4">
        <div class="mt-6 md:flex">
          <div
            class="mt-4 px-4 py-5 bg-white grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1"
          >
            <!--  -->

            <div class="sm:col-span-2">
              <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
                Prazo Validade da Agenda<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="date"
                  pattern="\d{4}-\d{1,2}-\d{1,2}"
                  v-model="scheduleConfig.data_inicio"
                  name="dataInicio"
                  id="dataInicio"
                  autocomplete="dataInicio"
                  class="w-40 ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                ></div>
                <span>a</span>
                <input
                  type="date"
                  pattern="\d{4}-\d{1,2}-\d{1,2}"
                  v-model="scheduleConfig.data_fim"
                  name="dataFim"
                  id="dataFim"
                  autocomplete="dataFim"
                  class="w-40 ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-l border border-gray-300 rounded-md"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                ></div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="id_publico" class="block text-sm font-medium text-gray-700">
                Selecionar Agenda<span class="text-red-700">* </span>
              </label>
              <div class="mt-0">
                <span class="relative z-0 inline-flex shadow-sm rounded-md">
                  <select
                    id="sexo"
                    name="sexo"
                    class="w-full mt-1 block xl:w-72 py-2 px-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="scheduleConfig.id_agenda_nome"
                  >
                    <option v-bind:value="0">Selecione</option>
                    <option v-for="i in scheduleNames" :key="i" :value="i.id">{{ i.nome }}</option>
                  </select>
                  <button
                    @click.prevent="
                      onOpenModal(
                        '/schedule_rooms/',
                        scheduleConfig.id_agenda_nome !== null ? scheduleConfig.id_agenda_nome : 0
                      )
                    "
                    type="button"
                    class="mt-1 -ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-green-500 text-sm font-medium text-white hover:bg-green-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <PlusIconSolid class="h-5 w-5" />
                  </button>
                </span>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="id_publico" class="block text-sm font-medium text-gray-700">
                Profissional<span class="text-red-700">* </span>
              </label>
              <div class="mt-0">
                <span class="relative z-0 inline-flex shadow-sm rounded-md">
                  <select
                    id="sexo"
                    name="sexo"
                    class="w-full mt-1 block xl:w-72 py-2 px-3 bg-gray-100 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="scheduleConfig.id_medico"
                  >
                    <option v-bind:value="0">Selecione</option>
                    <option v-for="i in healthProfessionals" :key="i" :value="i.id">
                      {{ i.nome }}
                    </option>
                  </select>
                  <button
                    @click.prevent="
                      onOpenModal(
                        '/health_professionals/',
                        scheduleConfig.id_medico !== null ? scheduleConfig.id_medico : 0
                      )
                    "
                    type="button"
                    class="mt-1 -ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-green-500 text-sm font-medium text-white hover:bg-green-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <PlusIconSolid class="h-5 w-5" />
                  </button>
                </span>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="id_publico" class="block text-sm font-medium text-gray-700">
                Local de Atendimento<span class="text-red-700">* </span>
              </label>
              <div class="mt-0">
                <span class="relative z-0 inline-flex shadow-sm rounded-md">
                  <select
                    id="sexo"
                    name="sexo"
                    class="w-full mt-1 block xl:w-72 py-2 px-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="scheduleConfig.id_local_atendimento"
                  >
                    <option v-bind:value="0">Selecione</option>
                    <option v-for="i in consultationPlaces" :key="i" :value="i.id">
                      {{ i.local }}
                    </option>
                  </select>
                  <button
                    @click.prevent="
                      onOpenModal(
                        '/consultation_places/',
                        scheduleConfig.id_local_atendimento !== null
                          ? scheduleConfig.id_local_atendimento
                          : 0
                      )
                    "
                    type="button"
                    class="mt-1 -ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-green-500 text-sm font-medium text-white hover:bg-green-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <PlusIconSolid class="h-5 w-5" />
                  </button>
                </span>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="nome" class="block text-sm font-medium text-gray-700">
                Dia da Semana<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <select
                  name="profissional"
                  id="profissional"
                  autocomplete="profissional"
                  class="w-full mt-1 xl:w-72 bg-gray-100 block py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  v-model="scheduleConfig.id_dia_semana"
                >
                  <option v-bind:value="0"></option>
                  <option v-bind:value="1">Segunda</option>
                  <option v-bind:value="2">Terça</option>
                  <option v-bind:value="3">Quarta</option>
                  <option v-bind:value="4">Quinta</option>
                  <option v-bind:value="5">Sexta</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
                Hora de Início<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="time"
                  pattern="\d{1,2}:\d{1,2}"
                  v-model="scheduleConfig.inicio"
                  name="inicio"
                  id="inicio"
                  autocomplete="inicio"
                  class="ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                ></div>
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
                Último Horário<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="time"
                  pattern="\d{1,2}:\d{1,2}"
                  v-model="scheduleConfig.fim"
                  name="fim"
                  id="fim"
                  autocomplete="fim"
                  class="ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                ></div>
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
                Duração da Consulta<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="time"
                  pattern="\d{1,2}:\d{1,2}"
                  @blur="onChangeTime(scheduleConfig.tempo_consulta)"
                  v-model="scheduleConfig.tempo_consulta"
                  name="dataInicio"
                  id="dataInicio"
                  autocomplete="dataInicio"
                  class="ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                ></div>
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="nome" class="mr-1 px-2 block text-sm font-medium text-gray-700">
                Capacidade de Consultas<span class="text-red-700">*</span>
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  disabled
                  v-model="qtdConsulta"
                  name="dataInicio"
                  id="dataInicio"
                  autocomplete="dataInicio"
                  class="w-full xl:w-40 ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-3 rounded-r border border-gray-300 rounded-md"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                ></div>
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="obs" class="ml-3 block text-sm font-medium text-gray-700"> Obs: </label>
              <div class="mt-2">
                <textarea
                  id="about"
                  v-model="scheduleConfig.obs"
                  name="about"
                  rows="1"
                  class="w-full xl:w-11/12 shadow-sm bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="nome" class="px-2 block text-sm font-medium text-gray-700">
                Primeira Consulta
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  v-model="scheduleConfig.p_consulta"
                  name="p_consulta"
                  id="p_consulta"
                  autocomplete="p_consulta"
                  class="w-full xl:w-40 ml-2 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                ></div>
              </div>
            </div>
            <div class="sm:col-span-1">
              <label for="nome" class="ml-1 px-2 block text-sm font-medium text-gray-700">
                Consulta Seguimento
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  v-model="scheduleConfig.seguimento"
                  name="seguimento"
                  id="seguimento"
                  autocomplete="seguimento"
                  class="w-full xl:w-40 ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                ></div>
              </div>
            </div>
            <div class="sm:col-span-1">
              <label for="nome" class="ml-1 px-2 block text-sm font-medium text-gray-700">
                Consulta Retorno
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  v-model="scheduleConfig.retorno"
                  name="retorno"
                  id="retorno"
                  autocomplete="retorno"
                  class="w-full xl:w-40 ml-1 mr-1 text-sm bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-r border border-gray-300 rounded-md"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                ></div>
              </div>
            </div>

            <div class="sm:col-span-6">
              <fieldset class="relative z-0 w-full p-px mb-5 ml-3">
                <div class="block pt-3 pb-2 space-x-4">
                  <label>
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="socio"
                      :value="scheduleConfig.agenda_unica"
                      v-model="scheduleConfig.agenda_unica"
                      class="mr-2 text-blue-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                    />
                    Agenda ùnica
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="do_corpo_clinico"
                      :value="scheduleConfig.bloquear_online"
                      v-model="scheduleConfig.bloquear_online"
                      class="mr-2 text-blue-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                    />
                    Não disponibilizar no App
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="checkbox"
                      :value="scheduleConfig.video"
                      v-model="scheduleConfig.video"
                      id="nao_atende"
                      class="mr-2 text-blue-600 border-2 border-gray-300 focus:border-gray-300 focus:ring-orange-600"
                    />
                    Telemedicina
                  </label>
                </div>
                <span class="text-sm text-blue-600 hidden" id="error"
                  >Option has to be selected</span
                >
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="flex justify-end px-4 py-3 rounded-b-lg text-right sm:px-6 bg-gray-900">
      <button
        @click="onCancel()"
        type="button"
        class="sm:space-x-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
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
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapState, useStore } from 'vuex'
import { key, store } from '@core/store/store'
import { ScheduleConfig } from '@core/domain/schedule-config/schedule-config-model'
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    PlusIconSolid,
  },

  computed: {
    ...mapState(['healthProfessionals', 'scheduleConfig', 'consultationPlaces', 'scheduleNames']),
    ...mapGetters(['healthProfessionals', 'scheduleConfig', 'consultationPlaces', 'scheduleNames']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup(props) {
    const router = useRouter()
    const qtdConsulta = ref('')
    const scheduleConfig = ref<ScheduleConfig>({
      id: 0,
      p_consulta: 0,
      seguimento: 0,
      retorno: 0,
      id_medico: 0,
      id_local_atendimento: 0,
      id_dia_semana: 0,
      id_agenda_nome: 0,
      data_inicio: '',
      data_fim: '',
      id_user: 0,
      id_corp: 0,
      data_gravacao: '',
      obs: '',
      inicio: '',
      fim: '',
      tempo_consulta: '',
      agenda_unica: false,
      primeira_consulta: 0,
      ativo: true,
      bloquear_online: false,
      video: false,
      procedimento_amb: '',
    })

    store.dispatch('SCHEDULE_CONFIGS_STORE_SET_BLANK', scheduleConfig.value)

    onMounted(async () => {
      const { id } = router.currentRoute.value.params

      await store.dispatch('HEALTH_PROFESSIONAL_STORE_LOAD')
      await store.dispatch('CONSULTATION_PLACE_STORE_LOAD')

      await store.dispatch('SCHEDULE_NAME_STORE_LOAD')

      if (id !== '0') {
        await store.dispatch('SCHEDULE_CONFIGS_STORE_LOAD_BY_ID', id)
      } else {
        await store.dispatch('SCHEDULE_CONFIGS_STORE_SET_BLANK', scheduleConfig.value)
      }
    })

    const onChangeTime = (duracao: any) => {
      let horaInicio = store.getters.scheduleConfig.inicio.split(':')
      let horaFim = store.getters.scheduleConfig.fim.split(':')
      //  setTimeout(()=>  , 2000)
      let tempoConsulta = duracao.split(':')
      let horaInicioMin = parseInt(horaInicio[0], 10) * 60 + parseInt(horaInicio[1], 10)
      let horaFimMin = parseInt(horaFim[0], 10) * 60 + parseInt(horaFim[1], 10)
      let horaTempoMin = parseInt(tempoConsulta[0], 10) * 60 + parseInt(tempoConsulta[1], 10)
      let teste = horaFimMin - horaInicioMin
      let teste1 = teste / horaTempoMin
      let teste2 = teste1 / 60

      qtdConsulta.value = (
        (store.getters.scheduleConfig.fim
          .split(':')
          .reverse()
          .reduce((prev, curr, i) => prev + curr * Math.pow(60, i), 0) -
          store.getters.scheduleConfig.inicio
            .split(':')
            .reverse()
            .reduce((prev, curr, i) => prev + curr * Math.pow(60, i), 0)) /
        duracao
          .split(':')
          .reverse()
          .reduce((prev, curr, i) => prev + curr * Math.pow(60, i), 0)
      ).toString()
    }

    const onOpenModal = async (router, id: number) => {
      window.open(router + id, '_blank', 'width=500,height=500, top=100, left=500')
    }

    const onCancel = async () => {
      router.push('/schedule_configs')
    }

    const onSave = async () => {
      await store.dispatch('SCHEDULE_CONFIGS_STORE_SAVE')
    }

    return {
      onSave,
      onCancel,
      onChangeTime,
      qtdConsulta,
      onOpenModal,
    }
  },
})
</script>
