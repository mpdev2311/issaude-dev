<script setup lang="ts">
import UserForm from '@components/layouts/reception/User/UserForm.vue'
</script>

<template>
  <UserForm 
    @on-save="$router.push({ name: 'UserList' })"
    @on-cancel="$router.push({ name: 'UserList' })"
  />
</template>