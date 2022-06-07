import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import messageStore from './domain/message/message-store'
import viaStore from './domain/via/via-store'
import accountInfoStore from './domain/account-info/account-info-store'
import consultationPlaceStore from './domain/consultation-place/consultation-place-store'
import dosageStore from './domain/dosage/dosage-store'
import unitMeasureStore from './domain/unit-measure/unit-measure-store'
import HealthProfessionalStore from './domain/health-professional/health-professional-store'
import ApproachStore from './domain/approach/approach-store'
import SpecialtyStore from './domain/specialty/specialty-store'
import TargetAudienceStore from './domain/target-audience/target-audience-store'
import stockNameStore from './domain/stock/stock-name/stock-name-store'
import stockTypeStore from './domain/stock/stock-type/stock-type-store'
import presentationStore from './domain/presentation/presentation-store'
import companyStore from './domain/company/company-store'
import scheduleNameStore from './domain/schedule-name/schedule-name-store'
import serviceTypeStore from './domain/service-type/service-type-store'
import receiptTypeStore from './domain/receipt-type/receipt-type-store'
import userStore from './domain/user/user-store'
import productClassificationStore from './domain/product-classification/product-classification-store'
import protocolNameStore from './domain/protocol-name/protocol-name-store'
import healthPlanStore from './domain/health-plan/health-plan-store'
import tableNamesStore from './domain/table-name/table-name-store'
import typeGuideStore from './domain/type-guide/type-guide-store'
import providerStore from './domain/provider/provider-store'
import scheduleConfigsStore from './domain/schedule-config/schedule-config-store'
import healthInsuranceStore from './domain/health-insurance/health-insurance-store'
import manufacturersStore from './domain/manufacturer/manufacturer-store'
import aclProfileStore from './domain/acl/acl-profile/acl-profile-store'
import schedulingAccessStore from './domain/management-and-permission/scheduling_access/scheduling-access-store'
import printerConfigurationStore from './domain/printer-configuration/printer-configuration-store'
import passwordAttendanceStore from './domain/reception/password-attendance/password-attendance-store'
import AclModuleRouteStore from './domain/acl/acl-module/acl-module-store'
import aclGroupStore from './domain/acl/acl-group/acl-group-store'
import aclProfileCorporationStore from './domain/acl/acl-profile-corporation/acl-profile-corporation-store'
import localAcess from './domain/local-access/local-access-store'
import schedulingStatusStore from './domain/scheduling-status/scheduling-status-store'
import schedulingStore from './domain/scheduling/scheduling-store'
import patientStore from './domain/patient/patient-store'
import guideManagementStore from './domain/guide-management/guide-management-store'
import billsSadtStore from './domain/guide-sadt/bill/bill-store'
import guidesTypeStore from './domain/guide-type/guide-type-store'
import managementServiceStore from './domain/management/management-store'
import localAttendaceStore from './domain/local-attendance/local-attendance-store'

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
