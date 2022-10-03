<template>
  <plus-grid align-items="center" justify-content="evenly">
    <plus-grid-item>
      <plus-spinner size="sm"></plus-spinner>
    </plus-grid-item>
    <plus-grid-item>
      <plus-spinner size="md"></plus-spinner>
    </plus-grid-item>
    <plus-grid-item>
      <plus-spinner size="lg"></plus-spinner>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
  import '@htmlplus/core/spinner.js';
</script>

<style scoped>
  plus-spinner[size='sm'] {
    --plus-spinner-size: 24px;
  }
  plus-spinner[size='md'] {
    --plus-spinner-size: 48px;
  }
  plus-spinner[size='lg'] {
    --plus-spinner-size: 72px;
  }
</style>
