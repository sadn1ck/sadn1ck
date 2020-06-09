<template>
  <div class="font-sans antialiased text-gray-900 leading-normal bg-cover">
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
          <div
            class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 flex"
          >
            <svg class="svg-icon h-12" viewBox="0 0 24 24">
              <a role="img">
                <path
                  d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"
                />
              </a>
            </svg>
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
            {{ like }}
          </div>
          <p class="pt-8 text-lg">
            {{ description }}
          </p>
        </div>
        <div class="flex my-4 justify-around">
          <div class="">
            <a href="https://www.linkedin.com/in/sadn1ck/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></a>
          </div>
          <div class="">
            <a href="https://github.com/sadn1ck" target="_blank"><font-awesome-icon :icon="['fab', 'github']" size="2x" /></a>
          </div>
          <div class="">
            <a href="https://ctftime.org/team/89677" target="_blank"><font-awesome-icon :icon="['fa', 'laptop']" size="2x" /></a>
          </div>
        </div>
      </div>
      <!--Img Col-->
      <div class="w-full lg:w-2/5">
        <!-- Big profile image for side bar (desktop) -->
        <img
          :src="imgsrc"
          class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    name: {
      type: String,
      default: 'Anik Das'
    },
    college: {
      type: String,
      default: 'Indian Institute Of Engineering, Science and Technology, Shibpur'
    },
    likes: {
      type: Array,
      default () {
        return ['Student Developer', 'Security Enthusiast', 'Tech Geek']
      }
    },
    description: {
      type: String,
      default: 'Passionate developer with a hunger for learning and creating new things. Highly interested in Computer Security, Web Development and Operating Systems. Regularly take part in Capture The Flags (CTFs) and always looking to collaborate on Open Source projects. '
    },
    imgsrc: {
      type: String,
      default: 'me.png'
    },
    imgstyle: {
      type: String,
      default: 'background-image: url(me.png)'
    }
  }
}
</script>

<style></style>
