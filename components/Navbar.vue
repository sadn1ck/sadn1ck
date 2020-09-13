<template>
  <nav class="flex flex-wrap items-center justify-between py-3 bg-transparent navbar-expand-lg mb-3">
    <div class="container mx-auto flex flex-wrap items-center px-5 justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
        <a v-scroll-to="'#profile'" aria-label="Profile" class="font-bold leading-relaxed inline-block mr-2 py-2 whitespace-no-wrap uppercase text-white text-2xl hover:opacity-75" href="#">
          <font-awesome-icon :icon="['fas', 'code']" />
        </a>
        <button aria-label="Expand Navbar" class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar()">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
      <div :class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center transition-all duration-500 ease-linear">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a v-scroll-to="'#work'" class="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75" href="#">
              <span class="ml-2">Experience</span>
            </a>
          </li>
          <li class="nav-item">
            <a v-scroll-to="'#projects'" class="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75" href="#">
              <span class="ml-2">Projects</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75" href="/Resume_Anik_Das.pdf">
              <span class="ml-2">Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
