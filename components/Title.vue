<template>
  <div class="text-3xl md:text-5xl text-center force-center font-bold">
    <div class="container">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Default Title',
    },
  },
}
</script>

<style></style>
