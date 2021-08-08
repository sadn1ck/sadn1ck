<template>
  <router-view />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  meta: [
    { property: 'og:title', content: 'Anik Das' },
    { property: 'og:image', content: 'https://anik.live/anik.jpg' },
    { name: 'description', content: 'My Personal Website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@s02n1ck' },
  ],
})
</script>
