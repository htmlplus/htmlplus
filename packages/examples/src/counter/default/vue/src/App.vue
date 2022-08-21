<template>
  <div class="center">
    <plus-counter
      to="1000"
      :play="play"
      @plusComplete="play = false"
    ></plus-counter>
    <br />
    <button @click="play = true">Start</button>
  </div>
</template>

<script setup>
  import '@htmlplus/core/counter.js';
  import { ref } from 'vue';
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
