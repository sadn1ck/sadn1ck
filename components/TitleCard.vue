<template>
  <div class="font-sans text-center text-5xl font-extrabold py-5">
    {{ title }}
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
