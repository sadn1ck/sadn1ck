import { customReplCodeGen } from "~/logic/utils";

const watch = `
<script>
import { ref, computed, watch } from 'vue';
export default {
  setup(props){
    const number = ref(1);
    const logs = ref([]);
    watch(number, (newv, oldv) => {
        logs.value.push(oldv + " -> " + newv)
    })
    return {
      number,
      logs
    }
  }
}
</script>

<template>
  <button @click="number++">+</button>
  <h1>
    Value is {{ number }}
  </h1>
  <button @click="number--">-</button>
  <br />
  <button @click="logs = []">Clear Logs</button>
  <ul>
    <li v-for="log in logs">{{ log }}</li>
  </ul>
</template>
`.trim();


export const watchCode = customReplCodeGen(watch);