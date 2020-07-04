<template>
  <section class="body-font relative">
    <div class="container px-10 mx-auto">
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
            <input v-model="form.name" class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text">
          </div>
          <div class="p-2 w-1/2">
            <input v-model="form.email" class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email">
          </div>
          <div class="p-2 w-full">
            <textarea v-model="form.info" class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message" />
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto text-black bg-indigo-200 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 hover:text-gray-900 rounded text-lg" @click="onSubmit">
              Send
            </button>
          </div>
        </div>
        <div class="py-5">
          <FormSubmit v-if="showSubmissionMsg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import db from 'firebase'
import TitleCard from '~/components/TitleCard'
import FormSubmit from '~/components/FormSubmit'
export default {
  components: {
    TitleCard,
    FormSubmit
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        info: ''
      },
      showSubmissionMsg: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.showSubmissionMsg = true
      db.firestore().collection('website').add(this.form)
        .then(function (res) {
        })
      this.showSubmissionMsg = true
      this.wait()
      this.onReset(evt)
    },
    wait () {
      setTimeout(() => { this.showSubmissionMsg = false }, 3000)
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.form.info = ''
      this.form.category = null
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
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
