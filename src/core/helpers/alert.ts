import { Ref } from 'vue'
import { Alert as iAlert } from '@core/domain/alert/alert-model'

const ALERT_DEFAULT_TIMER = 5000

const generateSuccessAlert = (refAlert: Ref<any>, title: string, message: string) => {
  refAlert.showAlert({
    title: `${title}`,
    message: `${message}`,
    fixed: false,
    success: true,
    show: true,
    time: ALERT_DEFAULT_TIMER,
  } as iAlert)
}

const generateErrorAlert = (refAlert: Ref<any>, title: string, message: string) => {
  refAlert.showAlert({
    title: `${title}`,
    message: `${message}`,
    fixed: false,
    success: false,
    show: true,
    time: ALERT_DEFAULT_TIMER,
  } as iAlert)
}

export { generateErrorAlert, generateSuccessAlert }
