<template>
  <div class="py-10">
    <div id="profile">
      <Profile />
    </div>
    <div id="work">
      <div class="pt-16">
        <Title :title="'experience'" />
        <Experience />
      </div>
    </div>
    <div id="projects">
      <div>
        <Title :title="'projects'" />
        <Projects />
      </div>
    </div>
    <button
      class="bottomright rounded-full p-3 focus:outline-none"
      @click="toggleTheme"
    >
      {{ isDark ? '🔆' : '🌙' }}
    </button>
  </div>
</template>

<script>
import Title from '~/components/Title'
import Profile from '~/components/Profile'
import Projects from '~/components/Projects'
import Experience from '~/components/Experience'
export default {
  components: { Title, Profile, Experience, Projects },
  data() {
    return {
      colorModes: ['dark', 'light'],
      current: 0,
    }
  },
  computed: {
    currentColorMode() {
      return this.$nuxt.$colorMode.preference
    },
    isDark() {
      return this.currentColorMode === 'dark'
    },
  },
  methods: {
    toggleTheme() {
      this.current++
      this.current = this.current % 2
      this.$nuxt.$colorMode.preference = this.colorModes[this.current]
    },
  },
  head() {
    return {
      title: 'Anik Das',
      meta: [
        {
          property: 'og:title',
          content: 'Anik Das | Portfolio',
        },
        {
          property: 'og:description',
          content:
            'Frontend Developer w/ Nuxt and Vue. Interested in DevOps and Information Security.',
        },
        {
          property: 'og:image',
          content: '/og.png',
        },
      ],
    }
  },
}
</script>

<style>
.force-center {
  display: grid;
  place-items: center;
}
.bottomright {
  background-color: var(--color-secondary);
  position: fixed;
  bottom: 5%;
  right: 5%;
}
</style>
