<template>
  <div class="center">
    <plus-counter
      to="1000"
      :play="play"
      @plus-complete="play = false"
    ></plus-counter>
    <br />
    <button @click="play = true">Start</button>
  </div>
</template>

<script setup>
  import { ref } from 'path';
  import '@htmlplus/core/counter.js';
  const play = ref(false);
</script>

<style scoped>
  .center {
    text-align: center;
  }
  button {
    margin: 1rem 0.5rem;
  }
</style>
