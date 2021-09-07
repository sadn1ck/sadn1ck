import { customReplCodeGen } from "~/logic/utils";

const code = `
<script setup>
import { ref, computed } from 'vue'
const name = ref('there');
const hello = computed(() => 'Hello, ' + name.value);
</script>

<template>
  <h1>
    {{ hello }}
  </h1>

  <label for="changing">Enter to change name: </label>
  <input v-model="name" id="changing">
</template>
`.trim();

export const defaultCode = customReplCodeGen(code);
