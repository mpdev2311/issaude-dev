<template>
    <div>
        <SectorsListComponent/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectorsListComponent from "../../../components/layouts/sectors/SectorsListComponent.vue"
export default defineComponent({
    components:{
        SectorsListComponent
    }
})
</script>