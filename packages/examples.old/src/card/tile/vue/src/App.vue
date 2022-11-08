<template>
  <div class="container">
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-card tile></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card tile outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card tile elevation="5"></plus-card>
      </plus-grid-item>
    </plus-grid>
  </div>
</template>

<script setup>
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
</script>

<style scoped>
  .container {
    padding: 2rem 0;
    background-color: #eeeeee;
  }
  plus-card {
    height: 8rem;
    width: 8rem;
    margin: auto;
  }
</style>
