import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import messageStore from './messages/message-store'
import viaStore from './via/via-store'
import accountInfoStore from './account-info/account-info-store'
import consultationPlaceStore from './consultation-places/consultation-place-store'
import dosageStore from './dosages/dosages-store'
import unitMeasureStore from './unit-measure/unit-measure-store'
import HealthProfessionalStore from './heath-professional/heath-professional-store'
import ApproachStore from './approach/approach-store'
import SpecialtyStore from './specialties/specialty-store'
import TargetAudienceStore from './target-audience/target-audience-store'
import stockNameStore from './stock/stock-name-store'
import stockTypeStore from './stock/stock-type-store'
import presentationStore from './presentation/presentation-store'
import companyStore from './company/company-store'
import procedureTypeStore from './procedure-types/procedure-types-store'
import scheduleNameStore from './schedule-name/schedule-name-store'
import serviceTypeStore from './service-type/service-type-store'
import receiptTypeStore from './receipt-types/receipt-types-store'
import userStore from './user/user-store'
import productClassificationStore from './product-classification/product-classification-store'
import protocolNameStore from './protocol-names/protocol-names-store'
import healthPlanStore from './health-plans/health-plan-store'
import tableNamesStore from './table-names/table-name-store'
import typeGuideStore from './type-guides/type-guide-store'
import providerStore from './providers/provider-store'
import scheduleConfigsStore from './schedule-configs/schedule-configs-store'
import healthInsuranceStore from './health-insurances/health-insurances-store'
import manufacturersStore from './manufacturers/manufacturers-store'
import aclProfileStore from './acl/acl-profile/acl-profile-store'
import schedulingAccessStore from './management-and-permission/scheduling_acces/scheduling-access-store'
import printerConfigurationStore from './printer-configuration/printer-configuration-store'
import passwordAttendanceStore from './reception/password-attendance/password-attendance-store'
import AclModuleRouteStore from './acl/acl-module/acl-module-store'
import aclGroupStore from './acl/acl-group/acl-group-store'
import aclProfileCorporationStore from './acl/acl-profile-corporation/acl-profile-corporation-store'
import localAcess from './local-access/local-access-store'
import schedulingStatusStore from './scheduling-status/scheduling-status-store'
import schedulingStore from './scheduling/scheduling-store'
import patientStore from './patient/patient-store'
import guideManagementStore from './guide-management/guide-management-store'
import billsSadtStore from './guide-sadt/bills-sadt-store'
import guidesTypeStore from './guides-type/guides-type-store'
import managementServiceStore from './management-store/management'
import localAttendaceStore from './local-attendance/local-attendance-store'

const key: InjectionKey<Store<any>> = Symbol()

const store = createStore({
  modules: {
    messages: messageStore,
    via: viaStore,
    schedulingStore: schedulingStore,
    schedulingStatus: schedulingStatusStore,
    localAcess: localAcess,
    printerConfigurationStore: printerConfigurationStore,
    accountInfo: accountInfoStore,
    consultationPlace: consultationPlaceStore,
    dosage: dosageStore,
    unitMeasure: unitMeasureStore,
    healthProfessional: HealthProfessionalStore,
    approach: ApproachStore,
    specialty: SpecialtyStore,
    targetAudience: TargetAudienceStore,
    stockName: stockNameStore,
    stockType: stockTypeStore,
    presentation: presentationStore,
    company: companyStore,
    procedureType: procedureTypeStore,
    scheduleName: scheduleNameStore,
    serviceType: serviceTypeStore,
    receiptType: receiptTypeStore,
    user: userStore,
    productClassification: productClassificationStore,
    protocolName: protocolNameStore,
    healthPlan: healthPlanStore,
    tableNames: tableNamesStore,
    typeGuide: typeGuideStore,
    provider: providerStore,
    scheduleConfig: scheduleConfigsStore,
    healthInsurance: healthInsuranceStore,
    manufacturer: manufacturersStore,
    passwordAttendance: passwordAttendanceStore,
    aclProfile: aclProfileStore,
    schedulingAccess: schedulingAccessStore,
    AclModuleRoute: AclModuleRouteStore,
    aclGroup: aclGroupStore,
    aclProfileCorporation: aclProfileCorporationStore,
    patient: patientStore,
    guideManagement: guideManagementStore,
    billsSadt: billsSadtStore,
    guidesType: guidesTypeStore,
    managementService: managementServiceStore,
    localAttendance: localAttendaceStore,
  },
})

export { store, key }
