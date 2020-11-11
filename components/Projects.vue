<template>
  <main class="force-center py-8">
    <div
      v-for="(project, id) in projects"
      :key="id"
      class="grid grid-cols-1 md:grid-cols-2 container py-16"
    >
      <div class="mx-auto">
        <img :src="project.img" alt="Tic tac toe" class="h-64 w-auto mx-auto" />
      </div>
      <div class="mx-auto px-32 md:mx-0 py-10 md:py-0 md:px-0 force-center">
        <div class="">
          <div class="text-2xl md:text-3xl font-semibold title-font pb-5">
            {{ project.title }}
          </div>
          <div class="pb-5">
            <span
              v-for="(badge, ib) in project.badges"
              :key="ib"
              class="rounded-full uppercase pr-2 py-2 text-md mr-3"
              >{{ badge }}</span
            >
          </div>
          <br />
          <div class="title text-xl pb-10">
            {{ project.desc }}
          </div>
          <a
            :href="project.link"
            noreferrer
            class="rounded text-xl pr-2 py-2 font-bold uppercase leading-relaxed mt-auto"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          img: 'https://i.imgur.com/bImPxEl.png',
          title: 'CTFBot',
          badges: ['Javascript', 'Discord.js', 'Heroku'],
          desc: 'Discord Bot to get info about CTFs (WIP!) ',
          link: 'https://github.com/sadn1ck/CTFBot',
        },
        {
          img: 'https://i.imgur.com/CdSTa66.png',
          title: 'GitHub Repo Timeline',
          badges: ['NuxtJS', 'TailwindCSS', 'Vercel'],
          desc:
            'A simple nuxt.js PWA which lists your latest public repos in the order they were last created (with dark mode!) ',
          link: 'https://github.com/sadn1ck/github-repo-timeline',
        },
        {
          img: 'https://i.imgur.com/Lipf6Z1.png',
          title: 'pgen',
          badges: ['C++', 'Makefile', 'Doxygen', 'GitHub Actions'],
          desc: 'Simple Password Generator CLI wriitten in C++',
          link: 'https://github.com/sadn1ck/pgen',
        },
        {
          img: '/india-covid-map.webp',
          title: 'India COVID-19 Map',
          badges: ['JavaScript', 'LeafletJS'],
          desc:
            'Project made in vanilla JS to track COVID-19 infections in India, with data aggregated from various APIs, and an expected fatality rate',
          link: 'https://github.com/sadn1ck/india-covid19-map',
        },
        {
          img: '/tictactoe.webp',
          title: 'Tic Tac Toe',
          badges: ['Python3', 'Pygame'],
          desc: 'Small Python project made to demonstrate Pygame',
          link: 'https://github.com/sadn1ck/tictactoe',
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
</style>
