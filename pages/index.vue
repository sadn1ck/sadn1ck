<template>
  <div>
    <TitleCard
      :title="'About Me'"
    />
    <ProfileCard />
    <TitleCard
      :title="'Work Experience'"
    />
    <ExpCard
      :exp-title="'Student Developer'"
      :exp-place="'Intern @ Banbreach'"
      :exp-desc="bbworkDesc"
      :time-range="'April 2020 - May 2020'"
      :exp-img-src="'/natter.png'"
      :exp-link="expLink"
      :exp-link-name="expLinkName"
    />
    <TitleCard
      :title="'Projects'"
    />
    <ExpCard
      :exp-title="'India COVID-19 Map'"
      :exp-place="'Project'"
      :exp-desc="covidworkDesc"
      :time-range="'April 2020'"
      :exp-img-src="'/india-covid-map.png'"
      :exp-link="covidLink"
      :exp-link-name="covidLinkName"
    />
  </div>
</template>

<script>
import ProfileCard from '~/components/ProfileCard'
import TitleCard from '~/components/TitleCard'
import ExpCard from '~/components/ExpCard'
export default {
  layout: 'default',
  components: {
    ProfileCard,
    TitleCard,
    ExpCard
  },
  data () {
    return {
      bbworkDesc: ['Testing and bug fixing of a video conferencing solution', 'Worked on nuxt.js websites', 'Including but not limited to site creation, bug fixing, internationalisation, localisation and unit testing'],
      expLink: ['https://natter.banbreach.com'],
      expLinkName: ['Natter'],
      covidworkDesc: ['Created a map using leaflet.js and it\'s choropleth layer', 'Used various REST API\'s to gather state-wise and district-wise data', 'Gathered various mortality models and generated fatality numbers using population data'],
      covidLink: ['https://github.com/sadn1ck/india-covid19-map'],
      covidLinkName: ['India COVID-19 Map']
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
