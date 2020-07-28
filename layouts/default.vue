<template>
  <div class="font-sans antialiased">
    <div class="pb-12">
      <Navbar />
    </div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.navbar{
  position: fixed;
  width: 100%;
  z-index: 99;
}
*{
  transition: 250ms;
}
</style>
