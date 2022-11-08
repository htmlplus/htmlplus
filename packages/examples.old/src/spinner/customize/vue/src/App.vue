<template>
  <div class="center">
    <plus-spinner type="dual-ring"></plus-spinner>
  </div>
</template>

<script setup>
  import '@htmlplus/core/spinner.js';
</script>

<style scoped>
  .center {
    text-align: center;
  }
  plus-spinner {
    --plus-spinner-size: 5rem;
    --plus-spinner-weight: 0.5;
    --plus-spinner-color: purple;
  }
</style>
