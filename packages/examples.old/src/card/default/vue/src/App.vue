<template>
  <div class="container">
    <plus-card></plus-card>
  </div>
</template>

<script setup>
  import '@htmlplus/core/card.js';
</script>

<style scoped>
  .container {
    padding: 2rem 0;
    background-color: #eeeeee;
  }
  plus-card {
    height: 12rem;
    width: 12rem;
    margin: auto;
  }
</style>
