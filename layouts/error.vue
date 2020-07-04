<template>
  <div class="text-center mt-32 font-sans antialiased" style="height: 50vh">
    <TitleCard
      class="pb-16"
      :title="'The page you requested does not exist!'"
    />
    <a href="/" class="text-center text-black px-6 py-4 bg-indigo-200 border-0 rounded text-lg">
      Go Home
    </a>
  </div>
</template>

<script>
import TitleCard from '~/components/TitleCard'
export default {
  components: {
    TitleCard
  }
}
</script>

<style>

</style>
