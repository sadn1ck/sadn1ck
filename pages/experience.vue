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
  data () {
    return {
      bbworkDesc: ['Testing and bug fixing of a video conferencing solution', 'Worked on multiple nuxt.js websites', 'Created websites from scratch', 'Did internationalisation, localisation and unit testing of websites'],
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
