<template>
  <div class="text-center">
    <a class="text-xl" :href="RESUME_URL">Redirecting. If stuck, click here</a>
  </div>
</template>

<script setup lang="ts">
const RESUME_URL = 'https://drive.google.com/file/d/11RewrnkZ4WVkDOFusuqm-wCPPJjGt044/view'
if (location)
  location.replace(RESUME_URL)
</script>

<route lang="yaml">
meta:
  layout: default
</route>
