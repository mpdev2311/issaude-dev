<template>
  <div>
    <FavoriteBankListComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FavoriteBankListComponent from '@components/layouts/favorite-banks/FavoriteBankListComponent.vue'
export default defineComponent({
  components: {
    FavoriteBankListComponent,
  },
})
</script>
