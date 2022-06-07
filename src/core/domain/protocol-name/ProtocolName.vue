<template>
  <div>
    <ProtocolNamesFormComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProtocolNamesFormComponent from '@components/layouts/ProtocolName/ProtocolNameFormComponent.vue'

export default defineComponent({
  components: {
    ProtocolNamesFormComponent,
  },
})
</script>
