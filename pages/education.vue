<template>
  <div class="px-5 py-5 font-sans antialiased">
    <TitleCard
      :title="'Education'"
    />
    <Timeline />
  </div>
</template>

<script>
import TitleCard from '~/components/TitleCard'
import Timeline from '~/components/Timeline'
export default {
  layout: 'default',
  components: {
    TitleCard,
    Timeline
  },
  head () {
    return {
      title: 'Education | Anik '
    }
  }
}
</script>

<style>
</style>
