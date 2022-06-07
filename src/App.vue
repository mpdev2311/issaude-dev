<template>
  <component :is="layout">
    <Alert ref="refAlert" />
    <router-view />
  </component>
</template>

<script setup lang="ts">
import useEventBus from '@core/useEventBus'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import Alert from './components/alerts/Alert.vue'
const DEFAULT_LAYOUT = 'default'
const { onEvent } = useEventBus()
const { currentRoute } = useRouter()
const refAlert = ref()
onEvent('add-alert', (alert: any) => {
  refAlert.value.showAlert(alert)
})

const layout = computed(() => `${currentRoute.value.meta.layout || DEFAULT_LAYOUT}-layout`)
</script>
