<template>
  <section class="font-sans antialiased hover:shadow-2xl text-gray-700 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="-my-8">
        <div v-for="(info, id) in edu" :key="id" class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="tracking-widest title-font font-bold text-gray-900 uppercase">{{ info.cat }}</span>
            <span class="mt-1 text-gray-500 text-sm">{{ info.date }}</span>
          </div>
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {{ info.title }}
            </h2>
            <p class="leading-relaxed">
              {{ info.desc }}
            </p>
            <a v-if="info.learn" :href="info.learn" rel="noreferrer" class="text-indigo-500 inline-flex items-center mt-4">
              {{ info.lrnabt }}
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      edu: [{
        title: 'Joined the Indian Institute of Engineering, Science and Technology, Shibpur',
        desc: 'Inducted into the Department of Information Technology, IIEST, Shibpur',
        date: 'August 2019',
        cat: 'college',
        learn: 'https://www.iiests.ac.in/',
        lrnabt: 'College Website'
      }, {
        title: 'Finished 12th Standard | Passed out of Tribeni Tissues Vidyapith',
        desc: 'Passed the 12th standard ISC board exams with a cumulative percentage of 96.75%',
        date: 'May 2019',
        cat: 'school'
      }, {
        title: 'Finished 10th Standard | Tribeni Tissues Vidyapith',
        desc: 'Passed the 10th standard ICSE board exams with a cumulative percentage of 97.40%',
        date: 'June 2017',
        cat: 'school'
      }]
    }
  }
}
</script>
