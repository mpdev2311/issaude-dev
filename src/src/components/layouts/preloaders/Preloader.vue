<style scoped>
  .loader {
    border: 15px solid #f3f3f3; 
    border-top: 15px solid #34db9b;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>

<template>
    <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <div class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style="top: 50%;">
            <div class="loader"></div> 
        </div>
    </div>
</template>

<script type="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup(){
        return {}
    }
});
</script>