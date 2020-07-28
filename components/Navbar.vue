<template>
  <header class="navbar bg-white hover:shadow-xl sm:flex sm:justify-between sm:items-center font-sans antialiased sm:px-4 sm:py-3 sm:mb-12">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <a :href="getRoute === 'index' ? '#' : '/'" class="block text-2xl text-black font-bold rounded hover:border-gray-700 hover:bg-gray-300">
        <font-awesome-icon :icon="['fas', 'home']" />  Home
      </a>
      <div class="sm:hidden">
        <button type="button" class="block text-gray-500 hover:text-black focus:text-black focus:outline-none" @click="isOpen = !isOpen">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      <a v-scroll-to="'#exp'" href="#" :style="getRoute !== 'index' ? 'display: none': ''" class="text-xl m-2 px-2 block text-black rounded hover:border-gray-700 hover:bg-gray-300"><font-awesome-icon class="mr-2" :icon="['fas', 'code']" />Experience</a>
      <a v-scroll-to="'#edu'" href="#" :style="getRoute !== 'index' ? 'display: none': ''" class="text-xl m-2 px-2 block text-black rounded hover:border-gray-700 hover:bg-gray-300"><font-awesome-icon class="mr-2" :icon="['fas', 'university']" />Education</a>
      <a href="/contact" class="text-xl m-2 px-2 block text-black rounded hover:border-gray-700 hover:bg-gray-300"><font-awesome-icon class="mr-2" :icon="['fas', 'user']" />Contact</a>
    </nav>
  </header>
</template>
<style scoped>

</style>
<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    getRoute () {
      return this.$nuxt.$route.name
    }
  }
}
</script>
