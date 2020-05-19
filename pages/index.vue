<template>
  <div>
    <ProfileCard />
    <TitleCard
      :title="'Experience'"
    />
    <ExpCard />
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
  }
}
</script>

<style>
</style>
