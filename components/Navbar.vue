<template>
  <nav
    class="flex flex-wrap items-center justify-between py-3 bg-dark navbar-expand-lg mb-3"
    style="background-color: var(--bg)"
  >
    <div
      class="container mx-auto flex flex-wrap items-center px-5 justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          v-scroll-to="'#profile'"
          aria-label="Profile"
          class="font-bold px-3 py-2 text-2xl flex items-center uppercase font-bold leading-snug hover:opacity-75"
          href="#"
        >
          Home
        </a>
        <button
          aria-label="Expand Navbar"
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar()"
        >
          {{ showMenu ? '❌' : '➖' }}
        </button>
      </div>
      <div
        :class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center transition-all duration-500 ease-linear"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              v-scroll-to="'#work'"
              class="px-3 py-2 text-xl flex items-center uppercase font-bold leading-snug hover:opacity-75"
              href="#"
            >
              <span class="ml-2">Experience</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#projects'"
              class="px-3 py-2 text-xl flex items-center uppercase font-bold leading-snug hover:opacity-75"
              href="#"
            >
              <span class="ml-2">Projects</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              target="_blank"
              class="px-3 py-2 text-xl flex items-center uppercase font-bold leading-snug hover:opacity-75"
              href="https://drive.google.com/file/d/11RewrnkZ4WVkDOFusuqm-wCPPJjGt044/view?usp=sharing"
            >
              <span class="ml-2">Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
nav {
  position: sticky;
  top: 0;
}
</style>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
