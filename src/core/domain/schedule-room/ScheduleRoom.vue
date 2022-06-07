<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ScheduleName } from '@domain/schedule-name/schedule-name-model'
import StepGroup from '@components/layouts/Step/StepGroup/StepGroup.vue'
import ScheduleNameService from '@domain/schedule-name/schedule-name-service'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import { AxiosResponse } from 'axios'
import { LocalAttendance } from '@domain/local-attendance/local-attendance-model'
import { RoomType } from '@domain/room-type/room-type-model'
import { AttendanceType } from '@domain/local-attendance/attendance-type/attendance-type-model'
import RoomTypeService from '@domain/room-type/room-type-service'
import AttendanceTypeService from '@domain/local-attendance/attendance-type/attendance-type-service'
import LocalAccessService from '@domain/local-access/local-access-service'
import { store } from '@core/store'
import { BasePaginator } from '@domain/pagination/Paginator'
import { LocalAccess } from '@domain/local-access/local-access-model'
import { Param } from '@domain/param/param-model'
import { createParameter } from '@core/helpers/param'

export default defineComponent({
  components: { StepGroup },

  setup(props, { emit }) {
    const router = useRouter()
    const steps = ref([{ id: 1, description: 'Cadastro' }])
    const scheduleNameService: ScheduleNameService = new ScheduleNameService()
    const state = reactive({
      scheduleName: {} as ScheduleName,
      localAccesses: [] as LocalAttendance[],
      attendanceTypes: [] as AttendanceType[],
      localAttendances: [] as LocalAttendance[],
      roomTypes: [] as RoomType[],
    })

    onMounted(async () => {
      const { id } = router.currentRoute.value.params
      if (id != '0') {
        state.scheduleName = await scheduleNameService.getById(id)
      } else {
        new ScheduleName()
        state.scheduleName.desativado = false
      }

      const attendanceTypeParams = new Array<Param>()
      attendanceTypeParams.push(createParameter('tipo', '5'))
      const attendanceTypePaginator = new BasePaginator<AttendanceType>()
      attendanceTypePaginator.pageable.pageSize = 100

      const localAccessPaginator = new BasePaginator<LocalAccess>()
      localAccessPaginator.pageable.pageSize = 100

      const promisses = await Promise.all([
        RoomTypeService.getAll(),
        new AttendanceTypeService().getAll(attendanceTypeParams, attendanceTypePaginator),
        new LocalAccessService().getAll(localAccessPaginator),
      ])
      state.roomTypes = promisses[0]
      state.attendanceTypes = promisses[1].content
      const localAccesses = promisses[2].content
      state.localAttendances = localAccesses.map(
        (la) => la.localAttendance
      ) as unknown as LocalAttendance[]
    })

    const onCancel = async () => router.push('/schedule_rooms')

    const onSave = async () => {
      let response = {} as AxiosResponse<any>
      setScheduleDefaultData(state.scheduleName)

      state.scheduleName.id
        ? await scheduleNameService.update(state.scheduleName)
        : await scheduleNameService.create(state.scheduleName)
      if (IsSuccessfulStatusCode(response.status)) {
        router.push('/schedule_rooms')
      }
    }

    const setScheduleDefaultData = (scheduleName: ScheduleName) => {
      const user = store.getters.user
      scheduleName.id_user = user.id
      scheduleName.id_corp = user.id_corp
      scheduleName.ativo = true
    }

    return {
      onSave,
      onCancel,
      steps,
      state,
    }
  },
})
</script>

<template>
  <StepGroup
    class="min-h-full test"
    :current="1"
    :steps="steps"
    @on-save="onSave"
    @on-cancel="onCancel"
  >
    <div class="px-4 py-2 flex-auto">
      <form class="space-y-4 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <div class="pt-1">
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div v-if="state.scheduleName.id" class="sm:col-span-1">
                <label for="first_name" class="block text-sm font-medium text-gray-700">
                  Registro
                </label>
                <div class="mt-1">
                  <input
                    disabled
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.scheduleName.id"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.scheduleName.nome"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="leito" class="block text-sm font-medium text-gray-700"> Leito </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="leito"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.scheduleName.leito"
                  />
                </div>
              </div>
              <div v-if="state.scheduleName.id" class="sm:col-span-1">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Desativar Agenda
                </label>
                <div class="mt-1">
                  <input
                    type="checkbox"
                    name="last_name"
                    id="desativar-agenda"
                    class="form-checkbox"
                    v-model="state.scheduleName.desativado"
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="sigla" class="block text-sm font-medium text-gray-700"> Sigla </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="sigla"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.scheduleName.sigla"
                  />
                </div>
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label for="local" class="block text-sm font-medium text-gray-700"> Local </label>
                <div>
                  <select
                    v-model="state.scheduleName.id_local"
                    id="select-local-atendimento"
                    name="local"
                    autocomplete="local"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option
                      v-for="localAttendance in state.localAttendances"
                      :key="localAttendance.id"
                      :value="localAttendance.id"
                    >
                      {{ localAttendance.local }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-span-6 sm:col-span-2">
                <label for="local" class="block text-sm font-medium text-gray-700">
                  Tipo de Atendimento
                </label>
                <div>
                  <select
                    id="select-tipo-atendimento"
                    name="local"
                    autocomplete="local"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="state.scheduleName.id_tipo_atendimento"
                  >
                    <option
                      v-for="attendanceType in state.attendanceTypes"
                      :key="attendanceType.id"
                      :value="attendanceType.id"
                    >
                      {{ attendanceType.nome }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-span-6 sm:col-span-1">
                <label for="local" class="block text-sm font-medium text-gray-700">
                  Tipo de Sala
                </label>
                <div>
                  <select
                    id="select-local-atendimento"
                    name="local"
                    autocomplete="local"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="state.scheduleName.id_tipo_sala"
                  >
                    <option
                      v-for="roomType in state.roomTypes"
                      :key="roomType.id"
                      :value="roomType.id"
                    >
                      {{ roomType.nome }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Idade Mínima
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.scheduleName.idade_min"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">
                  Idade Máxima
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    autocomplete="family-name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                    v-model="state.scheduleName.idade_max"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </StepGroup>
</template>
