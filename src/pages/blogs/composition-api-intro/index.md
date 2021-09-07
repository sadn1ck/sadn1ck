---
title: Intro to Vue3 Composition API
---

# A Brief Introduction to Composition API

## with a lot of code

## The Why, a TLDR

> In Options API, all code was logically grouped by type instead of functionality (watchers, computed, data, methods), leading to lot of back and forth to find the logical flow of the code. Composition API simplifies that by allowing the developer to unify code based on logical flow.

## Let's understand with code

### setup()

#### [Docs Link <i-carbon-link height="14" />](https://v3.vuejs.org/guide/composition-api-introduction.html#setup-component-option)

- `setup()` serves as the entry point for components in composition API, similar to `created()` in options API
- executed before the component is created, once the `props` are resolved
- should accept `props` and `context`, and exposes everything returned to the rest of our component

<custom-repl slug="simpleref" />

### Reactive Variables with `ref`

#### [Docs Link <i-carbon-link height="14" />](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref)

- a reactive variable can be easily made using `ref`
- pass in the default value, and then access it via `reactiveVar.value` in `<script>`
- in `<template>` they can be directly accessed as `reactiveVar`

<custom-repl slug="refcomp" />

### Computed values

#### [Docs Link <i-carbon-link height="14" />](https://v3.vuejs.org/guide/reactivity-computed-watchers.html#computed-values)

- sometimes we need state that depends on another state
  - number of todos, which may change
  - time 5 hours after a certain time (date manipulation is a pain)

<custom-repl slug="watch" />

### Watching changes with `watch`

#### [Docs Link <i-carbon-link height="14" />](https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch)

- whenever `number` is modified, `watch` will trigger and execute the callback (check above code), adding to logs, which shows up
- watch accepts 3 args
  - a reactive reference or getter function that we want to watch
  - a callback
  - optional configuration options (not covered here)


## That's it for this one

I didn't write about more things like [`watchEffect`](https://v3.vuejs.org/api/computed-watch-api.html#watcheffect) and [`reactive`](https://v3.vuejs.org/api/basic-reactivity.html#reactive), to not make it too long! Let me know if you like it!

Have a great day/night!
