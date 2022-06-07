import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@domain/login/Login.vue'
import SSO from '@domain/sso/SSO.vue'
import Dashboard from '@domain/dashboard/Dashboard.vue'
import UIElements from '@domain/tests/ui/UIElements.vue'
import TablesEdit from '@domain/tests/tables/TablesEdit.vue'
import Forms from '@domain/tests/forms/Forms.vue'
import Modal from '@domain/tests/modals/Modal.vue'
import Cards from '@domain/tests/cards/Cards.vue'
import Blanks from '@domain/tests/blanks/Blanks.vue'
import ChooseCompany from '@domain/choose-company/ChooseCompany.vue'
import Presentation from '@domain/presentation/Presentation.vue'
import PresentationList from '@domain/presentation/PresentationList.vue'
import UnitMeasure from '@domain/unit-measure/UnitMeasure.vue'
import UnitMeasureList from '@domain/unit-measure/UnitMeasureList.vue'
import Via from '@domain/via/Via.vue'
import ViaList from '@domain/via/ViaList.vue'
import StockName from '@domain/stock/stock-name/StockName.vue'
import StockNameList from '@domain/stock/stock-name/StockNameList.vue'
import Specialty from '@domain/specialty/Specialty.vue'
import SpecialtyList from '@domain/specialty/SpecialtyList.vue'
import Dosage from '@domain/dosage/Dosage.vue'
import DosageList from '@domain/dosage/DosageList.vue'
import ConsultationPlace from '@domain/consultation-place/ConsultationPlace.vue'
import ConsultationPlaceList from '@domain/consultation-place/ConsultationPlaceList.vue'
import Company from '@domain/company/Company.vue'
import CompanyList from '@domain/company/CompanyList.vue'
import AccountInfo from '@domain/account-info/AccountInfo.vue'
import AccountInfoList from '@domain/account-info/AccountInfoList.vue'
import ProcedureType from '@domain/procedure-type/ProcedureType.vue'
import ProcedureTypesList from '@domain/procedure-type/ProcedureTypeList.vue'
import ReceiptType from '@domain/receipt-type/ReceiptType.vue'
import ReceiptTypeList from '@domain/receipt-type/ReceiptTypeList.vue'
import TargetAudience from '@domain/target-audience/TargetAudience.vue'
import TargetAudienceList from '@domain/target-audience/TargetAudienceList.vue'
import ScheduleRooms from '@domain/schedule-room/ScheduleRoom.vue'
import ScheduleRoomsList from '@domain/schedule-room/ScheduleRoomList.vue'
import HealthProfessional from '@domain/health-professional/HealthProfessional.vue'
import HealthProfessionalList from '@domain/health-professional/HealthProfessionalList.vue'
import Languages from '@domain/language/Language.vue'
import LanguagesList from '@domain/language/LanguageList.vue'
import ProductClassification from '@domain/product-classification/ProductClassification.vue'
import ProductClassificationList from '@domain/product-classification/ProductClassificationList.vue'
import Approaches from '@domain/approach/Approache.vue'
import ApproachesList from '@domain/approach/ApproacheList.vue'
import ProtocolNames from '@domain/protocol-name/ProtocolName.vue'
import ProtocolNamesList from '@domain/protocol-name/ProtocolNameList.vue'
import Plan from '@domain/plan/Plan.vue'
import PlanList from '@domain/plan/PlanList.vue'
import ScheduleConfigs from '@domain/schedule-config/ScheduleConfig.vue'
import ScheduleConfigsList from '@domain/schedule-config/ScheduleConfigList.vue'
import HealthInsurance from '@domain/health-insurance/HealthInsurance.vue'
import HealthInsuranceList from '@domain/health-insurance/HealthInsuranceList.vue'
import Provider from '@domain/provider/Provider.vue'
import ProviderList from '@domain/provider/ProviderList.vue'
import Manufacturers from '@domain/manufacturer/Manufacturer.vue'
import ManufacturersList from '@domain/manufacturer/ManufacturerList.vue'
import PrinterConfiguration from '@domain/printer-configuration/PrinterConfiguration.vue'
import PasswordAttendance from '@domain/reception/password-attendance/PasswordAttendance.vue'
import PasswordAttendanceGenerate from '@domain/reception/PasswordAttendanceGenerate/PasswordAttendanceGenerate.vue'
import SchedulePermission from '@domain/management-and-permission/schedule-permissions/SchedulePermission.vue'
import AclModuleRoutes from '@domain/management-and-permission/acl-module-route/AclModuleRoute.vue'
import User from '@domain/reception/User/User.vue'
import UserList from '@domain/reception/User/UserList.vue'
import AclProfile from '@domain/reception/acl-profile/AclProfile.vue'
import AclProfileList from '@domain/reception/acl-profile/AclProfileList.vue'
import AclProfileCorporation from '@domain/reception/acl-profile-corporation/AclProfileCorporation.vue'
import Scheduling from '@domain/scheduling/Scheduling.vue'
import PatientList from '@domain/patient/PatientList.vue'
import Patient from '@domain/patient/Patient.vue'
import GuideManagement from '@domain/guide-management/GuideManagement.vue'
import GuideManagementList from '@domain/guide-management/GuideManagementList.vue'
import GuideSadt from '@domain/guide-sadt/GuideSadt.vue'
import LocalAttendanceList from '@domain/local-attendance/LocalAttendanceList.vue'
import LocalAttendance from '@domain/local-attendance/LocalAttendance.vue'
import GuideHonorarios from '@domain/guide-honorario/GuideHonorario.vue'
import GuideHospitalization from '@domain/guide-hospitalization/GuideHospitalization.vue'
import AmbProcedureList from '@domain/amb-procedure/AmbProcedureList.vue'
import AmbProcedure from '@domain/amb-procedure/AmbProcedure.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' },
  },
  {
    path: '/print-configuration',
    name: 'PrinterConfiguration',
    component: PrinterConfiguration,
    meta: { layout: 'empty' },
  },
  {
    path: '/sso',
    name: 'SSO',
    component: SSO,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/chooseCompany',
    name: 'ChooseCompany',
    component: ChooseCompany,
    meta: { layout: 'empty' },
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: UIElements,
  },
  {
    path: '/presentation',
    name: 'PresentationList',
    component: PresentationList,
  },
  {
    path: '/presentation/:id',
    name: 'Presentation',
    component: Presentation,
  },
  {
    path: '/unitmeasure',
    name: 'UnitMeasureList',
    component: UnitMeasureList,
  },
  {
    path: '/unitmeasure/:id',
    name: 'UnitMeasure',
    component: UnitMeasure,
  },
  {
    path: '/via',
    name: 'ViaList',
    component: ViaList,
  },
  {
    path: '/via/:id',
    name: 'Via',
    component: Via,
  },
  {
    path: '/stock_names',
    name: 'StockNameList',
    component: StockNameList,
  },
  {
    path: '/stock_names/:id',
    name: 'StockName',
    component: StockName,
  },
  {
    path: '/specialties',
    name: 'SpecialtyList',
    component: SpecialtyList,
  },
  {
    path: '/specialties/:id',
    name: 'Specialty',
    component: Specialty,
  },
  {
    path: '/amb_procedures',
    name: 'AmbProceduresList',
    component: AmbProcedureList,
  },
  {
    path: '/amb_procedures/:id',
    name: 'AmbProcedures',
    component: AmbProcedure,
  },
  {
    path: '/dosages',
    name: 'DosageList',
    component: DosageList,
  },
  {
    path: '/dosages/:id',
    name: 'Dosage',
    component: Dosage,
  },
  {
    path: '/consultation_places',
    name: 'ConsultationPlaceList',
    component: ConsultationPlaceList,
  },
  {
    path: '/consultation_places/:id',
    name: 'ConsultationPlace',
    component: ConsultationPlace,
  },
  {
    path: '/companies',
    name: 'CompanyList',
    component: CompanyList,
  },
  {
    path: '/companies/:id',
    name: 'Company',
    component: Company,
  },
  {
    path: '/accountinfo',
    name: 'AccountInfoList',
    component: AccountInfoList,
  },
  {
    path: '/accountinfo/:id',
    name: 'AccountInfo',
    component: AccountInfo,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: TablesEdit,
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms,
  },
  {
    path: '/cards',
    name: 'Cars',
    component: Cards,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
  },
  {
    path: '/blank',
    name: 'Blanks',
    component: Blanks,
  },
  {
    path: '/procedure_types',
    name: 'ProcedureTypeList',
    component: ProcedureTypesList,
  },
  {
    path: '/procedure_types/:id',
    name: 'ProcedureType',
    component: ProcedureType,
  },
  {
    path: '/receipt_types',
    name: 'ReceiptTypesList',
    component: ReceiptTypeList,
  },
  {
    path: '/receipt_types/:id',
    name: 'ReceiptTypes',
    component: ReceiptType,
  },
  {
    path: '/target-audience',
    name: 'TargetAudienceList',
    component: TargetAudienceList,
  },
  {
    path: '/target-audience/:id',
    name: 'TargetAudience',
    component: TargetAudience,
  },
  {
    path: '/product-classification',
    name: 'ProductClassificationList',
    component: ProductClassificationList,
  },
  {
    path: '/product-classification/:id',
    name: 'ProductClassification',
    component: ProductClassification,
  },
  {
    path: '/schedule_rooms',
    name: 'ScheduleRoomsList',
    component: ScheduleRoomsList,
  },
  {
    path: '/schedule_rooms/:id',
    name: 'ScheduleRooms',
    component: ScheduleRooms,
  },

  {
    path: '/languages',
    name: 'LanguagesList',
    component: LanguagesList,
  },
  {
    path: '/languages/:id',
    name: 'Languages',
    component: Languages,
  },

  {
    path: '/approaches',
    name: 'ApproachesList',
    component: ApproachesList,
  },
  {
    path: '/approaches/:id',
    name: 'Approaches',
    component: Approaches,
  },

  {
    path: '/protocol_names',
    name: 'ProtocolNamesList',
    component: ProtocolNamesList,
  },
  {
    path: '/protocol_names/:id',
    name: 'ProtocolNames',
    component: ProtocolNames,
  },

  {
    path: '/plans',
    name: 'PlanList',
    component: PlanList,
  },
  {
    path: '/plans/:id',
    name: 'Plan',
    component: Plan,
  },
  {
    path: '/health_professionals',
    name: 'HealthProfessionalList',
    component: HealthProfessionalList,
  },
  {
    path: '/health_professionals/:id',
    name: 'HealthProfessional',
    component: HealthProfessional,
  },

  {
    path: '/health_insurances',
    name: 'HealthInsuranceList',
    component: HealthInsuranceList,
  },
  {
    path: '/health_insurances/:id',
    name: 'HealthInsurance',
    component: HealthInsurance,
  },

  {
    path: '/providers',
    name: 'ProvidersList',
    component: ProviderList,
  },
  {
    path: '/providers/:id',
    name: 'Providers',
    component: Provider,
  },
  {
    path: '/manufacturers',
    name: 'ManufacturersList',
    component: ManufacturersList,
  },
  {
    path: '/manufacturers/:id',
    name: 'Manufacturers',
    component: Manufacturers,
  },
  {
    path: '/schedule_configs',
    name: 'ScheduleConfigsList',
    component: ScheduleConfigsList,
  },
  {
    path: '/schedule_configs/:id',
    name: 'ScheduleConfigs',
    component: ScheduleConfigs,
  },
  {
    path: '/schedule_permission/',
    name: 'ScheduleCPermission',
    component: SchedulePermission,
  },
  {
    path: '/acl_modules_routes/',
    name: 'AclModulesRoute',
    component: AclModuleRoutes,
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User,
  },
  {
    path: '/profile_corporation/:id',
    name: 'AclProfileCorporation',
    component: AclProfileCorporation,
  },
  {
    path: '/password_attendance',
    name: 'PasswordAttendance',
    component: PasswordAttendance,
    meta: { layout: 'empty' },
  },
  {
    path: '/password_attendance/:service',
    name: 'PasswordAttendanceGenerate',
    component: PasswordAttendanceGenerate,
    meta: { layout: 'empty' },
  },
  {
    path: '/schedule_permission',
    name: 'SchedulePermission',
    component: SchedulePermission,
  },
  {
    path: '/acl_profiles/:id',
    name: 'AclProfile',
    component: AclProfile,
  },
  {
    path: '/acl_profiles',
    name: 'AclProfileList',
    component: AclProfileList,
  },
  {
    path: '/semrota',
    name: 'Sem Rota',
    component: Blanks,
  },
  {
    path: '/scheduling',
    name: 'Scheduling',
    component: Scheduling,
  },
  {
    path: '/patients',
    name: 'PatientList',
    component: PatientList,
  },
  {
    path: '/patients/:id',
    name: 'Patient',
    component: Patient,
  },
  {
    path: '/guide-managements',
    name: 'GuideManagementList',
    component: GuideManagementList,
  },
  {
    path: '/guide-management/:id',
    name: 'GuideManagement',
    component: GuideManagement,
  },
  {
    path: '/guide-sadt/:id',
    name: 'GuideSadt',
    component: GuideSadt,
  },
  {
    path: '/local_attendances',
    name: 'LocalAttendanceList',
    component: LocalAttendanceList,
  },
  {
    path: '/local-attendance/:id',
    name: 'LocalAttendance',
    component: LocalAttendance,
  },
  {
    path: '/guide-honorarios/:id',
    name: 'GuideHonorarios',
    component: GuideHonorarios,
  },
  {
    path: '/guide-hospitalization/:id',
    name: 'GuideHospitalization',
    component: GuideHospitalization,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach((to, from, next) => {
  const isLogged = !localStorage.getItem('token')

  if (to.name !== 'Login' && top.name !== 'ChooseCompany' && isLogged) next({ name: 'Login' })

  next()
})

export default router
