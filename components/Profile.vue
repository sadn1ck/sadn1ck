<template>
  <main
    class="profile force-center px-5 py-16 -my-8 md:-my-0 md:py-16 lg:py-32"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 container">
      <div>
        <img
          src="/me.jpg"
          alt=""
          class="h-64 w-64 mx-auto rounded-full hover:shadow-2xl transition duration-500 ease-linear"
        />
      </div>
      <div class="text-left force-center">
        <div class="">
          <div
            class="text-3xl md:text-5xl font-bold text-center md:text-left pt-10 md:pt-0"
          >
            hi, i'm anik 👋
          </div>
          <div
            class="text-lg md:text-xl lg:text-2xl py-5 text-center md:text-left"
          >
            Frontend Web Developer with Nuxt and Vue looking to expand my
            skillset. Interested in Open Source, DevOps and Information
            Security.
          </div>
          <div
            class="text-2xl text-center md:text-left force-center pt-8 pb-16"
          >
            <div class="container">
              <div class="socials py-5">
                <a
                  href="https://www.github.com/sadn1ck/"
                  target="_blank"
                  class="mr-3 inline-block"
                >
                  <img
                    style="height: 2em"
                    src="https://img.shields.io/badge/github-%23000000.svg?&style=for-the-badge&logo=github&logoColor=white"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/sadn1ck/"
                  target="_blank"
                  class="mr-3 inline-block"
                >
                  <img
                    style="height: 2em"
                    src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
                  />
                </a>
                <a
                  href="mailto:anikdas0811@gmail.com"
                  target="_blank"
                  class="mr-3 inline-block"
                >
                  <img
                    style="height: 2em"
                    src="https://img.shields.io/badge/gmail-D14836?&style=for-the-badge&logo=gmail&logoColor=white"
                  />
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
export default {}
</script>

<style>
.force-center {
  display: grid;
  place-items: center;
}
</style>
