import { Alert as iAlert } from '@domain/alert/alert-model'
import useEventBus from '@core/useEventBus'

const ALERT_DEFAULT_TIMER = 5000

const generateSuccessAlert = (
  title: string,
  message: string = '',
  timer: number = ALERT_DEFAULT_TIMER,
  fixed: boolean = false
) => {
  const { emitEvent } = useEventBus()
  emitEvent('add-alert', {
    title: `${title}`,
    message: `${message}`,
    fixed: fixed,
    success: true,
    show: true,
    time: timer,
  } as iAlert)
}

const generateErrorAlert = (
  title: string,
  message: string = '',
  timer: number = ALERT_DEFAULT_TIMER,
  fixed: boolean = false
) => {
  const { emitEvent } = useEventBus()
  emitEvent('add-alert', {
    title: `${title}`,
    message: `${message}`,
    fixed: fixed,
    success: false,
    show: true,
    time: timer,
  } as iAlert)
}

export { generateErrorAlert, generateSuccessAlert }
