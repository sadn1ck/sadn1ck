<template>
  <div id="prof" class="font-sans antialiased">
    <ProfileCard />
    <div id="exp" class="px-5 py-5 font-sans antialiased">
      <TitleCard
        :title="'Work Experience & Projects'"
      />
      <ExpCard
        :exp-title="'Student Developer'"
        :exp-place="'Intern @ Banbreach'"
        :exp-desc="bbworkDesc"
        :time-range="'April 2020 - Current'"
        :exp-img-src="'/natter.webp'"
        :exp-link="expLink"
        :exp-link-name="expLinkName"
      />
      <ExpCard
        :exp-title="'India COVID-19 Map'"
        :exp-place="'Personal Project'"
        :exp-desc="covidworkDesc"
        :time-range="'April 2020'"
        :exp-img-src="'/india-covid-map.webp'"
        :exp-link="covidLink"
        :exp-link-name="covidLinkName"
      />
      <ExpCard
        :exp-title="'Tic Tac Toe, PyGame'"
        :exp-place="'Personal Project'"
        :exp-desc="tictacworkDesc"
        :time-range="'March 2020'"
        :exp-img-src="'/tictactoe.webp'"
        :exp-link="tictacLink"
        :exp-link-name="tictacLinkName"
      />
    </div>
    <div id="edu" class="px-5 py-5 font-sans antialiased">
      <TitleCard
        :title="'Education'"
      />
      <Timeline />
    </div>
  </div>
</template>

<script>
import ProfileCard from '~/components/ProfileCard'
import TitleCard from '~/components/TitleCard'
import Timeline from '~/components/Timeline'
import ExpCard from '~/components/ExpCard'
export default {
  layout: 'default',
  components: {
    ProfileCard,
    TitleCard,
    Timeline,
    ExpCard
  },
  data () {
    return {
      bbworkDesc: ['Testing and bug fixing of a video conferencing solution', 'Created nuxt.js websites from scratch', 'Worked on multiple existing nuxt.js websites', 'Worked on internationalisation, localisation and unit testing of websites'],
      expLink: ['https://natter.banbreach.com'],
      expLinkName: ['Natter'],
      covidworkDesc: ['Created a map using leaflet.js and it\'s choropleth layer', 'Used various REST API\'s to gather state-wise and district-wise data', 'Gathered various mortality models and generated fatality numbers using population data'],
      covidLink: ['https://github.com/sadn1ck/india-covid19-map'],
      covidLinkName: ['India COVID-19 Map'],
      tictacworkDesc: ['Created TicTacToe along with @arnabsen1729', 'Game logic in Python, with the event and rendering in PyGame', 'Created in a day :P'],
      tictacLink: ['https://github.com/sadn1ck/TicTacToe'],
      tictacLinkName: ['TicTacToe']
    }
  },
  head () {
    return {
      title: 'Anik Das | My Portfolio'
    }
  }
}
</script>

<style>
</style>
