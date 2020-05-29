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
      :exp-place="'Banbreach'"
      :exp-desc="bbworkDesc"
      :time-range="'April 2020 - May 2020'"
      :exp-img-src="'/natter.png'"
      :exp-link="expLink"
      :exp-link-name="expLinkName"
    >
      <TitleCard
        :title="' Projects '"
      />
      <ExpCard />
    </expcard>
  </div>
</template>

<script>
import ProfileCard from '~/components/ProfileCard'
import TitleCard from '~/components/TitleCard'
import ExpCard from '~/components/ExpCard'
export default {
  components: {
    ProfileCard,
    TitleCard,
    ExpCard
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
      title: 'Anik Das | My Portfolio'
    }
  }
}
</script>

<style>
</style>
