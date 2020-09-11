<template>
  <main class="profile force-center px-5 py-16 -my-8 md:-my-0 md:py-32 lg:py-48">
    <div class="grid grid-cols-1 md:grid-cols-2 container">
      <div>
        <img src="/me.jpg" alt="" class="h-64 w-64 mx-auto rounded-full hover:shadow-2xl transition duration-500 ease-linear">
      </div>
      <div class="text-left force-center">
        <div class="">
          <div class="text-3xl md:text-5xl font-bold text-center md:text-left pt-10 md:pt-0">
            hi, i'm anik 👋
          </div>
          <div class="text-lg md:text-xl lg:text-2xl py-5 text-center md:text-left">
            Frontend Web Developer looking to expand my skillset. Interested in Open Source, DevOps and Information Security.
            <br>
            Occasionally play video games too :D
          </div>
          <div class="text-center md:text-left">
            <font-awesome-icon :icon="['fab', 'vuejs']" size="2x" />
            <font-awesome-icon :icon="['fab', 'git']" size="2x" />
            <font-awesome-icon :icon="['fab', 'python']" size="2x" />
            <font-awesome-icon :icon="['fab', 'js']" size="2x" />
            <font-awesome-icon :icon="['fab', 'ubuntu']" size="2x" />
            <font-awesome-icon :icon="['fab', 'node']" size="2x" />
            <font-awesome-icon :icon="['fab', 'docker']" size="2x" />
            <font-awesome-icon :icon="['fab', 'html5']" size="2x" />
            <font-awesome-icon :icon="['fab', 'bootstrap']" size="2x" />
            <font-awesome-icon :icon="['fab', 'css3-alt']" size="2x" />
          </div>
          <div class="text-2xl text-center md:text-left force-center pt-8 pb-16">
            <div class="container">
              <small>Contact me @</small> <a href="mailto:anikdas0811@gmail.com">anikdas0811@gmail.com</a>
              <div class="socials py-5">
                <a href="https://github.com/sadn1ck" rel="noreferrer" target="_blank">
                  <font-awesome-icon size="2x" aria-label="GitHub Profile" :icon="['fab', 'github']" class="hover:opacity-75 mr-3" />
                </a>
                <a href="https://www.linkedin.com/in/sadn1ck/" rel="noreferrer" target="_blank">
                  <font-awesome-icon size="2x" aria-label="LinkedIn Profile" :icon="['fab', 'linkedin']" class="hover:opacity-75 mr-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
.force-center{
  display: grid;
  place-items: center;
}
</style>
