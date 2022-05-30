<script lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { key, store } from '@core/store/store'
import PatientStep1 from './steps/PatientStep1.vue'
import PatientStep2 from './steps/PatientStep2.vue'
import PatientStep3 from './steps/PatientStep3.vue'
import PatientStep4 from './steps/PatientStep4.vue'
import PatientStep5 from './steps/PatientStep5.vue'
import PatientStep6 from './steps/PatientStep6.vue'
import NotificationAlert from '../../../components/alerts/NotificationAlert.vue'
import StepGroup from '../../../components/layouts/Step/StepGroup/StepGroup.vue'
import { Alert as iAlert } from '@core/domain/alert/alert-model'
import { cpf } from 'cpf-cnpj-validator'
import Alert from '@components/alerts/Alert.vue'
import { BasePaginator } from '@core/domain/pagination/Paginator'
import { Patient, Plan, RequestPatient } from '@core/domain/patient/patient'
import { OrganDocument } from '@core/domain/patient/organ-document'
import { Ethnicitie } from '@core/domain/patient/ethnicitie'
import { Race } from '@core/domain/patient/race'
import { Religion } from '@core/domain/patient/religion'
import { Schooling } from '@core/domain/patient/schooling'
import { MaritalStatus } from '@core/domain/patient/marital-status'
import { Uf } from '@core/domain/patient/uf'
import { Country } from '@core/domain/patient/country'
import { Cbo } from '@core/domain/patient/cbo'
import { PlanAggree } from '@core/domain/plan/plan-agreee-model'
import { PatientService } from '@services/patients/patient-service'
import { PlanAgreeEnum } from '@core/mapers/PlanAgreeMap'
import { IsSuccessfulStatusCode } from '@core/helpers/HttpResponseHelpers'
import moment from 'moment'
import { PAGINATION_SIZE } from '@core/constaints'
import { RequestHealthProfessional } from '@core/domain/heath-professional/health-professional-model'
import HealthProfessionalService from '@services/health-professional/health-professional-service'
import { HealthProfessional } from '@core/domain/heath-professional/health-professional-model'

export default {
  components: {
    NotificationAlert,
    StepGroup,
    Alert,
  },

  setup(_) {
    const patientService = new PatientService()
    let state = reactive({
      patients: [] as Patient[],
      patient: { planos: [] as Plan[] } as Patient,
      etinias: [] as Ethnicitie[],
      racas: [] as Race[],
      religioes: [] as Religion[],
      escolaridades: [] as Schooling[],
      estadosCivis: [] as MaritalStatus[],
      organizacoesDocumentos: [] as OrganDocument[],
      estados: [] as Uf[],
      countries: [] as Country[],
      cbos: {} as BasePaginator<Cbo>,
      planAgree: [] as PlanAggree[],
      healthProfessionals: [] as HealthProfessional[],
    })

    onMounted(async () => {
      await loadTypes()
      const { id } = router.currentRoute.value.params
      state.patient =
        id !== '0'
          ? ((await patientService.getById(Number.parseInt(id.toString()))) as Patient)
          : createPatient()
      formatPatientDateFields(state.patient)
    })

    const loadTypes = async () => {
      const promisses = await Promise.all([
        patientService.findPlanAgree(),
        patientService.findMaritalCbos(),
        patientService.findEthnicities(),
        patientService.findRace(),
        patientService.findSchooling(),
        patientService.findReligion(),
        patientService.findMaritalStatus(),
        patientService.findorganizacoesDocumentos(),
        patientService.findEstados(),
        patientService.findCountries(),
      ])
      state.patients = new Array<Patient>()
      state.planAgree = promisses[0]
      state.cbos = promisses[1]
      state.etinias = promisses[2]
      state.racas = promisses[3]
      state.escolaridades = promisses[4]
      state.religioes = promisses[5]
      state.estadosCivis = promisses[6]
      state.organizacoesDocumentos = promisses[7]
      state.estados = promisses[8]
      state.countries = promisses[9]
    }

    const router = useRouter()
    const refAlert = ref()

    const formatPatientDateFields = (patient: Patient) => {
      patient.data_nasc = formatDate(patient.data_nasc)
      patient.data_documento = formatDate(patient.data_documento)
      patient.emissao_certidao = formatDate(patient.emissao_certidao)
      patient.data_obito = formatDate(patient.data_obito)
      patient.data_entrada_brasil = formatDate(patient.data_entrada_brasil)
      patient.emissao_ctps = formatDate(patient.emissao_ctps)
      patient.planos?.forEach((plano) => {
        plano.validade = formatDate(plano.validade)
      })
    }

    const formatDate = (date: string | any): any => moment(date).format('YYYY-MM-DD')

    const onSearchPatient = async (name: string) => {
      let requestPatient = new RequestPatient(0, PAGINATION_SIZE, name, store.getters.user.id_corp)
      const patientResults = await patientService.searchPatient(requestPatient)
      state.patients = patientResults.content
    }

    const onUpdatePatient = (patientParam: Patient) => {
      state.patient = patientParam
    }

    const createPatient = (): Patient => {
      const patient = new Patient()
      patient.id_corp = store.getters.user.id_corp
      patient.id_user = store.getters.user.id
      patient.planos = createDefaultPlan()
      return patient
    }

    const createDefaultPlan = (): Plan[] => {
      let defaultPlan = new Plan()
      defaultPlan.id_plano = PlanAgreeEnum.SUS
      let planos = new Array<Plan>()
      planos.push(defaultPlan)
      return planos
    }

    const onSearchHealthProfessional = async (name: string) => {
      const requestHealthProfessional = new RequestHealthProfessional(
        0,
        PAGINATION_SIZE,
        name,
        store.getters.user.id_corp,
        false,
        1,
        true
      )
      state.healthProfessionals = await HealthProfessionalService.getAll(requestHealthProfessional)
    }

    const steps = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }])
    const currentStep = ref(1)
    function onChangeCurrentStep(value: number) {
      currentStep.value = value
    }

    const onCancel = async () => {
      router.push('/patients')
    }
    const onSave = async () => {
      if (!cpf.isValid(state.patient.cpf)) {
        refAlert.value.showAlert({
          title: 'Cadastro Paciente',
          message: 'Informe um CPF válido',
          fixed: false,
          success: false,
          show: true,
          time: 5000,
        } as iAlert)
        return false
      }
      state.patient.id === 0
        ? patientService.create(state.patient)
        : patientService.update(state.patient)
      router.push('/patients')
    }

    const patientStepsMap = new Map<number, Object>([
      [1, PatientStep1],
      [2, PatientStep2],
      [3, PatientStep3],
      [4, PatientStep4],
      [5, PatientStep5],
      [6, PatientStep6],
    ])

    return {
      state,

      patientStepsMap,
      steps,
      currentStep,
      refAlert,

      onSave,
      onCancel,
      onChangeCurrentStep,
      onSearchPatient,
      onUpdatePatient,
      onSearchHealthProfessional,
    }
  },
}
</script>

<template>
  <StepGroup
    class="min-h-full test"
    :current="currentStep"
    :steps="steps"
    @update-current="onChangeCurrentStep"
    @on-save="onSave"
    @on-cancel="onCancel"
  >
    <component
      :patient="state.patient"
      :patients="state.patients"
      :racas="state.racas"
      :etinias="state.etinias"
      :religioes="state.religioes"
      :escolaridades="state.escolaridades"
      :estadosCivis="state.estadosCivis"
      :organizacoes-documentos="state.organizacoesDocumentos"
      :estados="state.estados"
      :countries="state.countries"
      :cbos="state.cbos"
      :planAgree="state.planAgree"
      :healthProfessionals="state.healthProfessionals"
      @on-search-patient="onSearchPatient"
      @on-update-patient="onUpdatePatient"
      @on-search-health-professional="onSearchHealthProfessional"
      :is="patientStepsMap.get(currentStep)"
    />
  </StepGroup>
  <Alert ref="refAlert" />
</template>
