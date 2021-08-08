<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <main class="px-8 py-8 text-dark-900 dark:text-gray-200">
    <Navbar />
    <div class="px-4 py-10 text-center">
      <div class="dark:text-light-600">
        <carbon-warning class="inline-block text-3xl" />
        <h1 class="text-4xl">
          This page does not exist!
        </h1>
      </div>
      <router-view />
      <div>
        <button class="btn m-3 text-sm mt-8" @click="router.back()">
          Go Back
        </button>
      </div>
    </div>
    <Footer />
  </main>
</template>
