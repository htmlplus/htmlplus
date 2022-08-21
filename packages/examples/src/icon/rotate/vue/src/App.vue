<template>
  <div class="center">
    <plus-icon rotate="0">home</plus-icon>
    <plus-icon rotate="90">home</plus-icon>
    <plus-icon rotate="180">home</plus-icon>
    <plus-icon rotate="270">home</plus-icon>
  </div>
</template>

<script setup>
  import '@htmlplus/core/icon.js';
</script>

<style scoped>
  .center {
    text-align: center;
  }
  plus-icon {
    margin: 0 1rem;
  }
</style>
