<template>
  <div>
    <TitleCard
      :title="'Projects'"
    />
    <ExpCard
      :exp-title="'India COVID-19 Map'"
      :exp-place="'Project'"
      :exp-desc="covidworkDesc"
      :time-range="'April 2020'"
      :exp-img-src="'/india-covid-map.webp'"
      :exp-link="covidLink"
      :exp-link-name="covidLinkName"
    />
    <ExpCard
      :exp-title="'Tic Tac Toe'"
      :exp-place="'Project'"
      :exp-desc="tictacworkDesc"
      :time-range="'March 2020'"
      :exp-img-src="'/tictactoe.webp'"
      :exp-link="tictacLink"
      :exp-link-name="tictacLinkName"
    />
  </div>
</template>

<script>
import TitleCard from '~/components/TitleCard'
import ExpCard from '~/components/ExpCard'
export default {
  layout: 'default',
  components: {
    TitleCard,
    ExpCard
  },
  data () {
    return {
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
      title: 'Experience | Anik '
    }
  }
}
</script>

<style>

</style>
