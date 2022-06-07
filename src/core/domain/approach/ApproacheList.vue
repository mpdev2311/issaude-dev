<template>
  <div>
    <ApproacheListComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ApproacheListComponent from '@components/layouts/Approach/ApproacheListComponent.vue'

export default defineComponent({
  components: {
    ApproacheListComponent,
  },
})
</script>
