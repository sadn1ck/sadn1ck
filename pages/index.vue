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
  </div>
</template>

<script>
import Title from '~/components/Title'
import Profile from '~/components/Profile'
import Projects from '~/components/Projects'
import Experience from '~/components/Experience'
export default {
  components: { Title, Profile, Experience, Projects },
  head () {
    return {
      title: 'Anik Das'
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
