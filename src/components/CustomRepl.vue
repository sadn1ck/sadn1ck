<script setup lang="ts">
import { Repl, ReplStore } from '@vue/repl'
import '@vue/repl/style.css'
import { codeResolver } from './codes'


const props = defineProps<{
  slug: string
}>()

const replStore = new ReplStore({
  serializedState: codeResolver(props.slug) ?? '',
})

// console.log(replStore, props)

</script>

<template>
  <client-only>
    <Repl :store="replStore" :showCompileOutput="true" />
  </client-only>
</template>

<style>
.vue-repl {
  height: 50vh;
}
</style>