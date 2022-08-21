<template>
  <div class="center">
    <button>
      Button
      <plus-tooltip>Tooltip</plus-tooltip>
    </button>
  </div>
</template>

<script setup>
  import '@htmlplus/core/tooltip.js';
</script>

<style scoped>
  .center {
    text-align: center;
  }
</style>
