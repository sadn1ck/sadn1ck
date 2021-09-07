import { customReplCodeGen } from "~/logic/utils";

const code = `
<script setup>
import { ref, computed } from 'vue'

const date = ref(new Date())
const updateDate = () => {
  date.value = new Date();
}

const updateDateByHours = (dt, h) => {
  const bal = dt.getHours() + h
  dt.setHours(bal)
  return dt
}

const fiveHoursLater = computed(() => updateDateByHours(date.value, 5));

setInterval(updateDate, 1000);

</script>

<template>
  <div>{{ date }}</div>
  <br />
  <div>
    {{ fiveHoursLater }}
  </div>
</template>
`.trim();


export const refComputedCode = customReplCodeGen(code);