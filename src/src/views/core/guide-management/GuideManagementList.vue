<template>
    <div>
        <GuideManagementList/>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GuideManagementList from "../../../components/layouts/guide-management/GuideManagementList.vue"

export default defineComponent({
    components:{
        GuideManagementList
    }
})
</script>