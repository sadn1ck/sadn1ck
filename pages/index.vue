<template>
  <div class="font-sans antialiased">
    <ProfileCard />
  </div>
</template>

<script>
import ProfileCard from '~/components/ProfileCard'
export default {
  layout: 'default',
  components: {
    ProfileCard
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
