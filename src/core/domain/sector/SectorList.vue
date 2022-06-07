<template>
  <div>
    <SectorListComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectorListComponent from '@components/layouts/sector/SectorListComponent.vue'
export default defineComponent({
  components: {
    SectorListComponent,
  },
})
</script>
