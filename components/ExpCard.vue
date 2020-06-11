<template>
  <div class="bg-white opacity-75 m-auto max-w-6xl p-12 mb-16 rounded-lg shadow-2xl">
    <div class="flex flex-col md:flex-row pt-8">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
        <div class="text-center md:text-5xl text-4xl font-black">
          {{ expTitle }}
        </div><div class="text-center md:text-xl font-grey">
          {{ expPlace }} | {{ timeRange }}
        </div>
        <div class="pt-10">
          <ul
            v-for="(descitem, key) in expDesc"
            :key="key"
            class="text-xl mt-4 sm:text-center md:text-left ml-8 list-disc"
          >
            <li>
              {{ descitem }}
            </li>
          </ul>
        </div>
        <div class="my-5 h-16" />
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
        <div class="bg-dots">
          <div class="shadow-2xl max-w-md z-10 rounded-full mt-10 ml-4">
            <v-lazy-image
              alt="exp image"
              class="rounded-t"
              :src="expImgSrc"
            />
            <div
              class="text-base p-10 text-xl bg-white text-center flex justify-around"
            >
              <a
                v-for="(link, keyLink) in expLink"
                :key="keyLink"
                :href="link"
                rel="noreferrer"
                target="_blank"
                class="text-center text-black bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 hover:text-white rounded text-lg mt-10 sm:mt-0"
              >
                {{ expLinkName[keyLink] }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      default: 'https://i.redd.it/5n9pjusshm051.jpg'
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
