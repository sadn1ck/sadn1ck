<template>
  <section class="text-gray-900 bg-dark font-sans antialiased body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <v-lazy-image class="object-cover object-center rounded" alt="Project Related Image" :src="expImgSrc" />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font font-black sm:text-4xl text-3xl mb-8 text-gray-900">
          {{ expTitle }}
        </h1>
        <h1 class="title-font font-sans sm:text-2xl text-xl mb-8 font-bold text-gray-900">
          {{ expPlace }}, {{ timeRange }}
        </h1>
        <p v-for="(desc, i) in expDesc" :key="i" class="py-2 text-black text-lg leading-relaxed">
          <font-awesome-icon :icon="['fas', 'arrow-right']" /> {{ desc }}
        </p>
        <div class="flex pt-10 justify-center">
          <a v-for="(link, i) in expLink" :key="i" :href="link" class="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
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
