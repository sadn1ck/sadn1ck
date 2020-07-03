<template>
  <section class="text-gray-700 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" :src="expImgSrc">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {{ expTitle }}
        </h1>
        <h1 class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
          {{ expPlace }}, {{ timeRange }}
        </h1>
        <p v-for="(desc, i) in expDesc" :key="i" class="mb-8 leading-relaxed">
          {{ desc }}
        </p>
        <div class="flex justify-center">
          <a v-for="(link, i) in expLink" :key="i" :href="link" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {{ expLinkName[i] }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExpCard',
  props: {
    expTitle: {
      type: String,
      default: 'Sample exp'
    },
    expPlace: {
      type: String,
      default: ''
    },
    timeRange: {
      type: String,
      default: ''
    },
    expDesc: {
      type: Array,
      default () {
        return ['Small description 1', 'Small description 2']
      }
    },
    expImgSrc: {
      type: String,
      default: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
    },
    expLink: {
      type: Array,
      default () {
        return ['https://natter.banbreach.com']
      }
    },
    expLinkName: {
      type: Array,
      default () {
        return ['Natter']
      }
    }
  }
}
</script>

<style>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
