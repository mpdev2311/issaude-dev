<template>
    <div>
        <FavoriteBanksListComponent/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FavoriteBanksListComponent from "../../../components/layouts/favorite-banks/FavoriteBanksListComponent.vue"
export default defineComponent({
    components:{
        FavoriteBanksListComponent
    }
})
</script>