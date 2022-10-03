<template>
  <plus-grid justify-content="evenly" gutter="md">
    <plus-grid-item xs="12" sm="auto">
      <plus-card class="size-1" outlined></plus-card>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="auto">
      <plus-card class="size-2" outlined></plus-card>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="auto">
      <plus-card class="size-3" outlined></plus-card>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
</script>

<style scoped>
  plus-card {
    height: 8rem;
    width: 8rem;
    margin: auto;
  }
  plus-card.size-1 {
    --plus-card-border-width: 1px;
  }
  plus-card.size-2 {
    --plus-card-border-width: 2px;
  }
  plus-card.size-3 {
    --plus-card-border-width: 3px;
  }
</style>
