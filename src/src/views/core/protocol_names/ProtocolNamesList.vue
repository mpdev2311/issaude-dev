<template>
    <div>
        <ProtocolNamesListComponent/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProtocolNamesListComponent from "../../../components/layouts/ProtocolName/ProtocolNameListComponent.vue"

export default defineComponent({
    components:{
        ProtocolNamesListComponent
    }
})
</script>