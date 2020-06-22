<template>
  <section class="text-gray-700 body-font relative">
    <div class="container px-10 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <TitleCard
          :title="'Contact Me'"
        />
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Drop me a message!
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text">
          </div>
          <div class="p-2 w-1/2">
            <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email">
          </div>
          <div class="p-2 w-full">
            <textarea class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message" />
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto text-black bg-indigo-200 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 hover:text-white rounded text-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleCard from '~/components/TitleCard'
export default {
  components: {
    TitleCard
  },
  head () {
    return {
      title: 'Contact Me | Anik'
    }
  }
}
</script>

<style>
</style>
