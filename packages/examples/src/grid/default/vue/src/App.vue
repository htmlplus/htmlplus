<template>
  <plus-grid>
    <plus-grid-item xs="12" md="4">
      <div>xs=12, md=4</div>
    </plus-grid-item>
    <plus-grid-item xs="12" md="4">
      <div>xs=12, md=4</div>
    </plus-grid-item>
    <plus-grid-item xs="12" md="4">
      <div>xs=12, md=4</div>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/core/grid-item.js';
  import '@htmlplus/core/grid.js';
</script>

<style scoped>
  plus-grid div {
    color: #00bcd4;
    border: 1px solid #ffffff;
    background-color: #e0f7fa;
    padding: 0.5em;
    text-align: center;
  }
</style>
