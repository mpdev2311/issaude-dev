<template>
  <div>
    <LanguageListComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageListComponent from '@components/layouts/Language/LanguageListComponent.vue'

export default defineComponent({
  components: {
    LanguageListComponent,
  },
})
</script>
