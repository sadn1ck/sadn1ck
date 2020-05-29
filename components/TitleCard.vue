<template>
  <div class="container mx-auto my-8">
    <div class="font-sans md:pl-10 content-center text-center md:text-left sm:mt-16 text-5xl font-extrabold py-10 max-w-md">
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
