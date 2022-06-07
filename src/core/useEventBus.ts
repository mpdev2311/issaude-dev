import { onBeforeUnmount } from 'vue'
import { TinyEmitter } from 'tiny-emitter'

const eventEmitter = new TinyEmitter()

export default function useEventBus() {
  const eventHandlers: Array<any> = []

  onBeforeUnmount(() =>
    eventHandlers.forEach((eventHandler) =>
      eventEmitter.off(eventHandler.event, eventHandler.handler)
    )
  )

  return {
    onEvent(event: any, handler: any) {
      eventHandlers.push({ event, handler })
      eventEmitter.on(event, handler)
    },
    emitEvent(event: any, payload: any) {
      eventEmitter.emit(event, payload)
    },
  }
}
