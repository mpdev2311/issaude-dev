<script setup lang="ts">
import { ref, watch, reactive, onMounted, watchEffect, onBeforeUnmount } from 'vue';
import moment from 'moment'

const props = defineProps({
  timer: String
})

let intervalId: any
const current_date = ref()
const props_hours = ref()
const color = ref('rgba(14, 159, 110, 1)')
const refFill = ref<HTMLDivElement | null>(null)

const state = reactive({
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milleseconds: 0
})

function changeColor() {
  if (state.minutes <= 15) {
    color.value = 'rgba(14, 159, 110, 1)'
    return
  }
  if (state.minutes > 15 && state.minutes <= 30) {
    color.value = 'rgba(250, 202, 21, 1)'
    return
  }

  if (state.minutes > 30) {
    color.value = 'rgba(224, 36, 36, 1)'
    return
  }
}

function setGaugeValue(value: number) {
  if (refFill.value !== null) {
    changeColor()
    refFill.value.style.backgroundColor = color.value
    if (value > 50) {
      refFill.value.style.transform = `rotate(0.50turn)`
      return
    }
    refFill.value.style.transform = `rotate(${value / 100}turn)`
  }
}

watchEffect(() => {
  let diff = moment(current_date.value).diff(props_hours.value)
  state.hours = moment.duration(diff).asHours()
  state.minutes = moment.duration(diff).asMinutes()
  state.seconds = moment.duration(diff).asSeconds()
  setGaugeValue(state.minutes)
})

watch(() => props.timer, value => {
  //@ts-ignore
  const [hours, minutes, seconds] = value?.split(':')
  let timer = moment()
  timer.set({
    hour: hours, minute: minutes, second: seconds,
  })
  props_hours.value = timer
}, { immediate: true })

onMounted(() => {
  intervalId = setInterval(() => {
    current_date.value = moment()
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="gauge">
    <div class="gauge__body">
      <div class="gauge__fill" ref="refFill"></div>
      <div class="gauge__cover"></div>
    </div>
  </div>
</template>

<style>
.gauge {
  /* width: 100%;
  max-width: 250px;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  color: #004033; */
  @apply w-full max-w-[60px] text-3xl text-[#004033];
}

.gauge__body {
  border-top-left-radius: 100% 200%;
  border-top-right-radius: 100% 200%;
  @apply w-full h-0 pb-2/4 bg-[#b4c0be] relative overflow-hidden;
}

.gauge__fill {
  transform-origin: center top;
  transform: rotate(0.25turn);
  transition: transform 0.2s ease-out;
  @apply absolute top-full left-0 w-[inherit] h-full bg-[#009578];
}

.gauge__cover {
  @apply w-9/12 h-[150%] bg-white rounded-[50%] absolute top-1/4 left-1/2 transform translate-x-[-50%] flex items-center justify-center pb-1/4 box-border
}
</style>