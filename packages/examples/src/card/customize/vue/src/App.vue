<template>
  <plus-card elevation="12" outlined></plus-card>
</template>

<script setup>
  import '@htmlplus/core/card.js';
</script>

<style scoped>
  plus-card {
    --plus-card-border-radius: 3rem 0;
    --plus-card-border-width: 2px;
    --plus-card-border-color: #c5c5c5;
    --plus-card-background-color: #dadada;
    height: 12rem;
    width: 12rem;
    margin: auto;
  }
</style>
