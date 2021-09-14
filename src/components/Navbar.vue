<script setup lang="ts">
import { isDark, toggleDark } from '~/logic/dark'
</script>

<template>
  <header class="header pb-10 font-bold">
    <nav class="flex flex-auto text-md md:(text-lg) space-x-5 flex-wrap">
      <router-link to="/" focusable="false">
        Home
      </router-link>
      <router-link to="/blogs" title="Blogs">
          Blog
        </router-link>
        <router-link to="/works" title="Projects and Experience">
          Works
        </router-link>
      <div class="flex-grow"></div>
      <div class="links my-auto">
        <span
          class="select-none"
          title="Toggle Dark"
          @click="toggleDark()"
        >
          <i-ri-moon-line height="18" v-if="!isDark" class="text-gray-500 hover:text-gray-800" />
          <i-ri-sun-line height="18" v-else class="text-yellow-300 hover:text-yellow-500" />
        </span>
      </div>
    </nav>
  </header>
</template>
