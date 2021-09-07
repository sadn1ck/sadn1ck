import { customReplCodeGen } from "~/logic/utils";

const simpleref = `
<script>
import { ref, computed, watch } from 'vue';
export default {
  setup(props){
    const numberValue = ref(5);
    return {
      numberValue,
    }
  }
}
</script>

<template>
  <h1>
    Value is {{ numberValue }}
  </h1>
  <label for="changing">Enter to change value: </label>
  <input v-model="numberValue" id="changing">
</template>
`.trim();


export const simplerefCode = customReplCodeGen(simpleref);