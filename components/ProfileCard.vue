<template>
  <div class="font-sans antialiased text-gray-900 sm:pt-16 py-16 leading-normal bg-cover">
    <div
      class="max-w-4xl flex items-center p-5 flex-wrap mx-auto lg:my-0"
    >
      <!--Main Col-->
      <div
        id="profile"
        class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div class="p-4 md:p-12 text-center lg:text-left">
          <!-- Image for mobile view-->
          <div
            class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            :style="imgstyle"
          />

          <h1 class="text-4xl font-bold pt-8 lg:pt-0">
            {{ name }}
          </h1>
          <div>
            <font-awesome-icon :icon="['fab', 'vuejs']" />
            <font-awesome-icon :icon="['fab', 'github']" />
            <font-awesome-icon :icon="['fab', 'python']" />
            <font-awesome-icon :icon="['fab', 'js']" />
            <font-awesome-icon :icon="['fab', 'ubuntu']" />
            <font-awesome-icon :icon="['fab', 'node']" />
            <font-awesome-icon :icon="['fab', 'docker']" />
            <font-awesome-icon :icon="['fab', 'html5']" />
            <font-awesome-icon :icon="['fab', 'bootstrap']" />
            <font-awesome-icon :icon="['fab', 'css3-alt']" />
          </div>
          <div
            class="mx-auto lg:mx-0 w-4/5 py-3 border-b-2 border-teal-500 flex"
          >
            {{ college }}
          </div>
          <p
            class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"
          />
          <div
            v-for="(like, index) in likes"
            :key="index"
            class="text-xl font-bold"
          >
            <font-awesome-icon class="mr-2" :icon="['fa', like.icon ]" />{{ like.name }}
          </div>
          <p class="pt-8 text-lg">
            {{ description }}
          </p>
        </div>
        <ContactBar />
      </div>
      <!--Img Col-->
      <div class="w-full lg:w-2/5">
        <!-- Big profile image for side bar (desktop) -->
        <v-lazy-image
          :src="imgsrc"
          alt="My own picture"
          class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContactBar from '~/components/ContactBar'
export default {
  name: 'ProfileCard',
  components: {
    ContactBar
  },
  props: {
    name: {
      type: String,
      default: 'Anik Das'
    },
    college: {
      type: String,
      default: 'Student @ Indian Institute Of Engineering, Science and Technology, Shibpur'
    },
    likes: {
      type: Array,
      default () {
        return [
          {
            name: 'Web Developer',
            icon: 'globe'
          },
          {
            name: 'Security Enthusiast',
            icon: 'unlock'
          },
          {
            name: 'Love learning new things',
            icon: 'book'
          }]
      }
    },
    description: {
      type: String,
      default: 'Passionate developer with a hunger for learning and creating new things. Highly interested in Web Development, DevOps and Computer Security. Regularly make Open Source projects and take part in Capture The Flags (CTFs). Always open to collaboration on Open Source projects, and working on new and exciting technologies.'
    },
    imgsrc: {
      type: String,
      default: 'me.webp'
    },
    imgstyle: {
      type: String,
      default: 'background-image: url(me.webp)'
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
