<template>
  <nav
    :class="{ 'scrolled': !view.atTopOfPage }"
    class="fixed flex bg-black text-white bg-black p-5 top-0 sm:w-full p-5"
  >
    <div class="flex-col text-white text-xl hover:bg-blue-500">
      a
    </div>
    <div class="flex-col text-white text-xl hover:bg-blue-500">
      b
    </div>
    <div class="flex-col text-white text-xl hover:bg-blue-500">
      c
    </div>
    <div class="flex-col text-white text-xl hover:bg-blue-500">
      d
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) {
          this.view.atTopOfPage = false
        }
      } else {
        this.view.atTopOfPage = true
      }
    }
  }
}
</script>

<style scoped>
nav {
    z-index: 10
}

nav.scrolled {
    @apply shadow-2xl;
    border-bottom: 0px;
}
</style>
