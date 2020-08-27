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
    <div id="contact">
      <div>
        <Title :title="'contact'" />
        <Contact />
      </div>
    </div>
    <!-- <back-to-top bottom="50px" right="50px">
      <button type="button" class="rounded-full px-1 focus:outline-none bg-gray-100 text-gray-900">
        <font-awesome-icon size="2x" :icon="['fa', 'arrow-up']" />
      </button>
    </back-to-top> -->
  </div>
</template>

<script>
import Title from '~/components/Title'
import Contact from '~/components/Contact'
import Profile from '~/components/Profile'
import Projects from '~/components/Projects'
import Experience from '~/components/Experience'
export default {
  components: { Title, Profile, Experience, Projects, Contact },
  head () {
    return {
      title: 'Anik Das',
      meta: [
        {
          property: 'og:title',
          content: 'Anik Das | Portfolio'
        },
        {
          property: 'og:description',
          content: 'Frontend Developer w/ Nuxt and Vue. Interested in DevOps and Information Security.'
        },
        {
          property: 'og:image',
          content: '/og.png'
        }
      ]
    }
  }
}
</script>

<style>
.force-center{
  display: grid;
  place-items: center;
}
</style>
