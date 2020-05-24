<template>
  <div class="bg-white opacity-75 m-auto max-w-6xl p-12 rounded-lg shadow-2xl">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
        <div class="text-center md:text-4xl text-3xl uppercase font-black">{{ expTitle }}</div>
        <div
          class="text-xl mt-4 sm:text-center"
        >{{ expDesc }}</div>
        <div class="my-5 h-16">
        </div>
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
        <div class="bg-dots">
          <div class="shadow-2xl max-w-md z-10 rounded-full mt-2 ml-4">
            <img
              alt="exp image"
              class="rounded-t"
              :src=expImgSrc
            />
            <div class="text-base p-10 bg-white">
              <a :href=expLink>
                {{ expLinkName }}
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
    expDesc: {
      type: String,
      default: 'Sample exp Description made to span multiple lines to make it better for development'
    },
    expImgSrc: {
      type: String,
      default: 'https://i.redd.it/5n9pjusshm051.jpg'
    },
    expLink: {
      type: String,
      default: 'https://natter.banbreach.com'
    },
    expLinkName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
