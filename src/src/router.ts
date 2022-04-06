import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from './views/core/login/Login.vue'
import SSO from './views/core/sso/SSO.vue'
import Dashboard from './views/core/dashboard/Dashboard.vue'
import UIElements from './views/core/tests/ui/UIElements.vue'
import TablesEdit from './views/core/tests/tables/TablesEdit.vue'
import Forms from './views/core/tests/forms/Forms.vue'
import Modal from './views/core/tests/modals/Modal.vue'
import Cards from './views/core/tests/cards/Cards.vue'
import Blanks from './views/core/tests/blanks/Blanks.vue'
import ChooseCompany from './views/core/chooseCompany/ChooseCompany.vue'
import Presentation from './views/core/presentation/Presentation.vue'
import PresentationList from './views/core/presentation/PresentationList.vue'
import UnitMeasure from './views/core/unitmeasure/UnitMeasure.vue'
import UnitMeasureList from './views/core/unitmeasure/UnitMeasureList.vue'
import Via from './views/core/via/Via.vue'
import ViaList from './views/core/via/ViaList.vue'
import StockName from './views/core/stock_names/StockName.vue'
import StockNameList from './views/core/stock_names/StockNameList.vue'
import Specialty from './views/core/specialty/Specialty.vue'
import SpecialtyList from './views/core/specialty/SpecialtyList.vue'
import Dosage from './views/core/dosage/Dosage.vue'
import DosageList from './views/core/dosage/DosageList.vue'
import ConsultationPlace from './views/core/consultation-place/ConsultationPlace.vue'
import ConsultationPlaceList from './views/core/consultation-place/ConsultationPlaceList.vue'
import Company from './views/core/company/Company.vue'
import CompanyList from './views/core/company/CompanyList.vue'
import AccountInfo from './views/core/accountinfo/AccountInfo.vue'
import AccountInfoList from './views/core/accountinfo/AccountInfoList.vue'
import ProcedureType from './views/core/procedure_types/ProcedureTypes.vue'
import ProcedureTypesList from './views/core/procedure_types/ProcedureTypesList.vue'
import ReceiptType from './views/core/receipt_types/ReceiptTypes.vue'
import ReceiptTypeList from './views/core/receipt_types/ReceiptTypesList.vue'
import TargetAudience from './views/core/target-audience/TargetAudience.vue'
import TargetAudienceList from './views/core/target-audience/TargetAudienceList.vue'
import ScheduleRooms from './views/core/schedule_rooms/ScheduleRooms.vue'
import ScheduleRoomsList from './views/core/schedule_rooms/ScheduleRoomsList.vue'
import HealthProfessional from './views/core/health-professionals/HealthProfessional.vue'
import HealthProfessionalList from './views/core/health-professionals/HealthProfessionalList.vue'
import Languages from './views/core/language/Language.vue'
import LanguagesList from './views/core/language/LanguageList.vue'
import ProductClassification from './views/core/product-classification/ProductClassification.vue'
import ProductClassificationList from './views/core/product-classification/ProductClassificationList.vue'
import Approaches from './views/core/approach/Approache.vue'
import ApproachesList from './views/core/approach/ApproacheList.vue'
import ProtocolNames from './views/core/protocol_names/ProtocolNames.vue'
import ProtocolNamesList from './views/core/protocol_names/ProtocolNamesList.vue'
import Plan from './views/core/plans/Plan.vue'
import PlanList from './views/core/plans/PlanList.vue'
import ScheduleConfigs from './views/core/schedule-config/ScheduleConfigs.vue'
import ScheduleConfigsList from './views/core/schedule-config/ScheduleConfigsList.vue'
import HealthInsurances from './views/core/health-insurances/HealthInsurances.vue'
import HealthInsurancesList from './views/core/health-insurances/HealthInsurancesList.vue'
import Providers from './views/core/providers/Providers.vue'
import ProvidersList from './views/core/providers/ProvidersList.vue'
import Manufacturers from './views/core/manufacturers/Manufacturers.vue'
import ManufacturersList from './views/core/manufacturers/ManufacturersList.vue'
import PrinterConfiguration from './views/core/printerConfiguration/PrinterConfiguration.vue'
import PasswordAttendance from './views/core/reception/PasswordAttendance/PasswordAttendance.vue'
import PasswordAttendanceGenerate from './views/core/reception/PasswordAttendanceGenerate/PasswordAttendanceGenerate.vue'
import SchedulePermission from './views/core/management-and-permission/schedule-permissions/SchedulePermission.vue'
import SchedulePermissionList from './views/core/management-and-permission/schedule-permissions/SchedulePermissionList.vue'
import AclModuleRoutesList from './views/core/management-and-permission/acl-module-routes/AclModuleRoutesList.vue'
import AclModuleRoutes from './views/core/management-and-permission/acl-module-routes/AclModuleRoutes.vue'
import User from './views/core/reception/User/User.vue'
import UserList from './views/core/reception/User/UserList.vue'
import AclProfile from './views/core/reception/acl_profile/AclProfile.vue'
import AclProfileList from './views/core/reception/acl_profile/AclProfileList.vue'
import AclProfileCorporation from './views/core/reception/AclProfileCorporation/AclProfileCorporation.vue'
import Scheduling from './views/core/schedule/Scheduling.vue'
import PatientList from './views/core/patients/PatientList.vue'
import Patient from './views/core/patients/Patient.vue'
import GuideManagement from './views/core/guide-management/GuideManagement.vue'
import GuideManagementList from './views/core/guide-management/GuideManagementList.vue'
import GuideSadt from './views/core/guide-sadt/GuideSadt.vue'

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
    name: 'ProcedureTypesList',
    component: ProcedureTypesList,
  },
  {
    path: '/procedure_types/:id',
    name: 'ProcedureTypes',
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
    name: 'HealthInsurancesList',
    component: HealthInsurancesList,
  },
  {
    path: '/health_insurances/:id',
    name: 'HealthInsurances',
    component: HealthInsurances,
  },

  {
    path: '/providers',
    name: 'ProvidersList',
    component: ProvidersList,
  },
  {
    path: '/providers/:id',
    name: 'Providers',
    component: Providers,
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
  },{
    path:"/scheduling",
    name: "Scheduling",
    component: Scheduling
  },
  {
    path: "/patients",
    name: "PatientList",
    component: PatientList,
  },
  {
    path:"/patients/:id",
    name: "Patient",
    component: Patient
  },{
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
