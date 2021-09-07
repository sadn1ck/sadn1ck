<script setup lang="ts">
import { isDark, toggleDark } from '~/logic/dark'
</script>

<template>
  <header class="header pb-10 font-bold">
    <nav class="flex flex-auto text-sm md:(text-lg px-16) lg:px-32 xl:px-64">
      <router-link to="/" focusable="false">
        <img v-if="isDark" class="h-14" src="/dark.png" />
        <img v-else class="h-14" src="/light.png" />
      </router-link>
      <div class="flex-grow"></div>
      <div class="links space-x-2 my-auto">
        <router-link to="/blogs" title="Blogs">
          Blog
        </router-link>
        <router-link to="/works" title="Projects and Experience">
          Works
        </router-link>
        <span
          class="select-none"
          title="Toggle Dark"
          @click="toggleDark()"
        >
          <ri-moon-line height="18" v-if="!isDark" class="text-gray-500 hover:text-gray-800" />
          <ri-sun-line height="18" v-else class="text-yellow-300 hover:text-yellow-500" />
        </span>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="postcss">
.links a {
  font-weight: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(125,125,125,0.1);
  transition: border .3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #555;
    @apply text-blue-500;
  }
}
</style>
