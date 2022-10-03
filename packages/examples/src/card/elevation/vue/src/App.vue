<template>
  <plus-card :elevation="elevation"></plus-card>
  <br />
  <input
    type="range"
    :value="elevation"
    min="1"
    max="24"
    @change="onChange($event)"
  />
</template>

<script setup>
  import { ref } from 'path';
  import '@htmlplus/core/card.js';
  const elevation = ref('12');

  function onChange(event) {
    elevation.value = event.target.value;
  }
</script>

<style scoped>
  plus-card {
    height: 12rem;
    width: 12rem;
    margin: auto;
  }
  input[type='range'] {
    display: block;
    width: 12rem;
    margin: auto;
  }
</style>
