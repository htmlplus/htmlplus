<template>
  <div class="center">
    <plus-icon>home</plus-icon>
    <plus-icon flip="horizontal">home</plus-icon>
    <plus-icon flip="vertical">home</plus-icon>
    <plus-icon flip="both">home</plus-icon>
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
