<template>
  <div class="app text-white antialiased">
    <Navbar />
    <nuxt />
  </div>
</template>
<style>
.app {
  font-family: 'Karla', sans-serif !important;
  background-color: #232323;
}

</style>
<script>
import Navbar from '~/components/Navbar'
export default {
  components: { Navbar }
}
</script>
