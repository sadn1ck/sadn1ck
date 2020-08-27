<template>
  <main class="force-center py-8">
    <div v-for="(project, id) in projects" :key="id" class="grid grid-cols-1 md:grid-cols-2 container py-16">
      <div class="mx-auto">
        <img :src="project.img" alt="Tic tac toe" class="h-64 w-auto mx-auto ">
      </div>
      <div class="mx-auto md:mx-0 py-10 md:py-0 px-10 md:px-0">
        <div class="">
          <div class="text-2xl md:text-3xl font-semibold title-font pb-5">
            {{ project.title }}
          </div>
          <div class="pb-5">
            <span v-for="(badge, ib) in project.badges" :key="ib" class="rounded-full bg-gray-100 uppercase px-2 py-2 text-xs text-gray-900 mr-3">{{ badge }}</span>
          </div>
          <br>
          <div class="title pb-10">
            {{ project.desc }}
          </div>
          <a :href="project.link" noreferrer class="bg-gray-100 hover:bg-gray-500 text-gray-900 rounded text-sm px-2 py-2 font-bold uppercase leading-relaxed mt-auto">
            Source
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          img: '/india-covid-map.webp',
          title: 'India COVID-19 Map',
          badges: ['JavaScript', 'LeafletJS'],
          desc: 'Project made in vanilla JS to track COVID-19 infections in India, with data aggregated from various APIs, and an expected fatality rate',
          link: 'https://github.com/sadn1ck/india-covid-19'
        },
        {
          img: '/tictactoe.webp',
          title: 'Tic Tac Toe',
          badges: ['Python3', 'Pygame'],
          desc: 'Small Python project made to demonstrate Pygame',
          link: 'https://github.com/sadn1ck/tictactoe'
        }
      ]
    }
  }
}
</script>

<style>
</style>
