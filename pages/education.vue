<template>
  <div>
    <TitleCard
      :title="'Education'"
    />
  </div>
</template>

<script>
import TitleCard from '~/components/TitleCard'
export default {
  layout: 'default',
  components: {
    TitleCard
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
