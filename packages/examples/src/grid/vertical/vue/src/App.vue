<template>
  <plus-grid align-items="center" vertical>
    <plus-grid-item xs="3">
      <div>Item</div>
    </plus-grid-item>
    <plus-grid-item xs="grow">
      <div>Item</div>
    </plus-grid-item>
    <plus-grid-item xs="3">
      <div>Item</div>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/core/grid-item.js';
  import '@htmlplus/core/grid.js';
</script>

<style scoped>
  plus-grid {
    height: 12rem;
  }
  plus-grid div {
    color: #00bcd4;
    border: 1px solid #ffffff;
    background-color: #e0f7fa;
    height: 100%;
    padding: 0.5em;
    text-align: center;
  }
</style>
