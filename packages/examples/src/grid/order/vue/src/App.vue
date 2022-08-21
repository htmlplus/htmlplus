<template>
  <plus-grid>
    <plus-grid-item order-xs="3" xs="grow">
      <div>order=3</div>
    </plus-grid-item>
    <plus-grid-item order-xs="2" xs="grow">
      <div>order=2</div>
    </plus-grid-item>
    <plus-grid-item order-xs="1" xs="grow">
      <div>order=1</div>
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
