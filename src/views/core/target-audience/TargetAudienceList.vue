<template>
    <div>
        <TargetAudienceListComponent/>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TargetAudienceListComponent from "../../../components/layouts/target-audience/TargetAudienceListComponent.vue"

export default defineComponent({
    components:{
        TargetAudienceListComponent
    }
})
</script>