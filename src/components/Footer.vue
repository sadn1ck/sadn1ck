<template>
  <footer class="font-bold text-left md:text-center space-x-5 md:space-x-24 py-32">
    <a rel="noreferrer" href="https://github.com/sadn1ck" target="_blank" title="GitHub">GitHub</a>
    <a rel="noreferrer" href="https://twitter.com/s02n1ck" target="_blank" title="Twitter">Twitter</a>
    <a rel="noreferrer" href="mailto:anikdas0811@gmail.com" target="_blank" title="Twitter">Email</a>
  </footer>
</template>
<style scoped lang="postcss">
a {
  font-weight: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(125,125,125,0.1);
  transition: border .3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #555;
    @apply text-teal-600;
  }
}
</style>
