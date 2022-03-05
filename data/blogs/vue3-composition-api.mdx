---
date: "2021-10-12"
title: Intro to Vue 3 Composition API
desc: Speedrunning (some) important parts of Composition API
---

## The Why, a TLDR

> In Options API, all code was logically grouped by type instead of functionality (watchers, computed, data, methods), leading to lot of back and forth to find the logical flow of the code. Composition API simplifies that by allowing the developer to unify code based on logical flow.

### setup()

`setup()` serves as the entry point for components in composition API, similar to `created()` in options API. It is executed before the component is created, once the `props` are resolved.

### Reactive Variables with `ref`

A reactive variable can be easily made using `ref`. We pass in the default value, and then access it via `reactiveVar.value` inside `<script>` and in `<template>` it can be directly accessed as `reactiveVar`, as they are automatically unwrapped.

Think of `ref` as a wrapper to a variable, whose value we access via `.value`.

```html
<script>
  import { ref, computed, watch } from "vue";
  export default {
    setup(props) {
      const numberValue = ref(5);
      return {
        numberValue,
      };
    },
  };
</script>

<template>
  <h1>Value is {{ numberValue }}</h1>
  <label for="changing">Enter to change value: </label>
  <input v-model="numberValue" id="changing" />
</template>
```

In the above example, during `setup()`, a reactive variable called `numberValue` is created, bound to an input field, and which updates automatically when we change the value in the input field.

 ---

### Computed values

Here we have the current date/time, and we want the date/time 5 hours later. We can use `computed()` to do this task. We have a reactive value `currDate`, which is the current date/time. We use computed with `updateDateByHours(...)` function to get the date/time 5 hours later of `currDate`.

Now we call `updateCurrDate()` to update `currDate` to the current date/time. This causes the `fiveHoursLater` computed function to run, updating the template.

```html
<script setup>
import { ref, computed } from 'vue'

const currDate = ref(new Date())
const updateCurrDate = () => {
  currDate.value = new Date();
}

const updateDateByHours = (dt, h) => {
  const bal = dt.getHours() + h
  dt.setHours(bal)
  return dt
}

const fiveHoursLater = computed(() => updateDateByHours(currDate.value, 5));
setInterval(updateCurrDate, 1000);

</script>

<template>
  <div>{{ date }}</div>
  <br />
  <div>
    {{ fiveHoursLater }}
  </div>
</template>
```
 ---

### Watching changes with `watch`


Whenever `number` is modified, `watch` will trigger and execute the callback (the 2nd parameter in `watch(...)`). The original and updated value will get added to the `logs` array, and will get rendered in the template.


```html
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
```

 --- 
 
## That's it for this one

I didn't write about more things like [`watchEffect`](https://v3.vuejs.org/api/computed-watch-api.html#watcheffect) and [`reactive`](https://v3.vuejs.org/api/basic-reactivity.html#reactive), to not make it too long! Let me know if you like it!

Have a great day/night!
