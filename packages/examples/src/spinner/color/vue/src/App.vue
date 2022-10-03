<template>
  <plus-grid justify-content="evenly">
    <plus-grid-item>
      <plus-spinner class="spinner-1"></plus-spinner>
    </plus-grid-item>
    <plus-grid-item>
      <plus-spinner class="spinner-2"></plus-spinner>
    </plus-grid-item>
    <plus-grid-item>
      <plus-spinner class="spinner-3"></plus-spinner>
    </plus-grid-item>
    <plus-grid-item>
      <plus-spinner class="spinner-4"></plus-spinner>
    </plus-grid-item>
    <plus-grid-item>
      <plus-spinner class="spinner-5"></plus-spinner>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
  import '@htmlplus/core/spinner.js';
</script>

<style scoped>
  .spinner-1 {
    --plus-spinner-color: #08dfc8;
  }
  .spinner-2 {
    --plus-spinner-color: #ff5449;
  }
  .spinner-3 {
    --plus-spinner-color: #5f9ee9;
  }
  .spinner-4 {
    --plus-spinner-color: #ffc903;
  }
  .spinner-5 {
    --plus-spinner-color: #9073c1;
  }
</style>
