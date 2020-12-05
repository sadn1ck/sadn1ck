<template>
  <main class="force-center pt-8 pb-16 px-5" data-aos="fade-up">
    <div class="grid grid-cols-1 md:grid-cols-2 container">
      <div class="mx-auto text-left">
        <div class="text-3xl font-semibold title-font uppercase">
          <div class="tracking-widest">
            {{ title }}
          </div>
          <div class="text-lg py-5">
            {{ date }}
          </div>
        </div>
      </div>
      <div class="">
        <div
          class="text-3xl md:text-4xl text-center md:text-left font-semibold title-font"
        >
          {{ work }}
        </div>
        <div class="leading-relaxed py-5 px-8 md:px-0 text-lg">
          <ul>
            <li v-for="(item, id) in details" :key="id" class="py-2">
              - {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      date: "April '20 - September '20",
      title: 'Banbreach',
      work: 'Software Engineer Intern',
      details: [
        'Engineered multiple usability features to an existing video conferencing system based on ReactJS (BigBlueButton)',
        'Collaborated with 3 interns to fix bugs in the video conferencing solution',
        'Helped onboard 50+ students on the video conferencing solution',
        'Mentored and guided incoming employee on the utilised tech stack',
        'Created 2 NuxtJS websites from scratch to advertise products',
      ],
    }
  },
}
</script>

<style></style>
