<template>
  <div>
    <nav class="sticky w-full bg-yellow-500 py-2">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-black font-extrabold">
          <a class="text-black no-underline hover:text-pink-600 hover:no-underline" href="/">
            <span class="text-2xl pl-2 sadn1ck">Home</span>
          </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center pb-2">
            <li class="mr-3">
              <a class="inline-block text-grey-dark no-underline hover:text-pink-600 hover:text-underline py-2 px-4" href="/education">Education</a>
            </li>
            <li class="mr-3">
              <a class="inline-block text-grey-dark no-underline hover:text-pink-600 hover:text-underline py-2 px-4" href="/experience">Experience</a>
            </li>
            <li class="mr-3">
              <a class="inline-block text-grey-dark no-underline hover:text-pink-600 hover:text-underline py-2 px-4" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
