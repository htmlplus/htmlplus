<template>
  <div class="center">
    <plus-icon size="1x">home</plus-icon>
    <plus-icon size="2x">home</plus-icon>
    <plus-icon size="3x">home</plus-icon>
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
    vertical-align: middle;
  }
</style>
