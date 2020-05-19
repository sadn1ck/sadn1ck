<template>
  <div class="container mx-auto">
    <div class="font-sans text-center content-center text-4xl font-extrabold py-10 md:w-1/2 max-w-md">
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'TitleCard',
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
}
</script>
