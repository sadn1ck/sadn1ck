<template>
  <div>
    <TitleCard
      :title="'Work Experience'"
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
  transition: {
    name: 'test',
    mode: 'out-in'
  },
  data () {
    return {
      bbworkDesc: ['Testing and bug fixing of a video conferencing solution', 'Worked on nuxt.js websites', 'Including but not limited to site creation, bug fixing, internationalisation, localisation and unit testing'],
      expLink: ['https://natter.banbreach.com'],
      expLinkName: ['Natter']
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
