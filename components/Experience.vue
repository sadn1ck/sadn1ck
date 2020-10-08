<template>
  <main class="force-center pt-8 pb-16 px-5">
    <div class="grid grid-cols-1 md:grid-cols-2 container">
      <div class="mx-auto text-left">
        <div class="text-2xl font-semibold title-font uppercase">
          <div class="tracking-widest">
            {{ title }}
          </div>
          <div class="text-sm py-5">
            {{ date }}
          </div>
        </div>
      </div>
      <div class="">
        <div class="text-2xl md:text-3xl text-center md:text-left font-semibold title-font">
          {{ work }}
        </div>
        <p class="leading-relaxed py-5 px-8 md:px-0">
          <ul>
            <li v-for="(item, id) in details" :key="id" class="py-2">
              {{ item }}
            </li>
          </ul>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      date: 'April \'20 - September \'20',
      title: 'Banbreach',
      work: 'Software Engineer Intern',
      details: [
        'Added multiple usability features to an existing video conferencing system based on ReactJS',
        'Created multiple NuxtJS websites from scratch for various products'
      ]

    }
  }
}
</script>

<style>

</style>
