<template>
  <div class="center">
    <plus-switch @plus-change="ensure($event)"></plus-switch>
  </div>
</template>

<script setup>
  import '@htmlplus/core/switch.js';

  function ensure(event) {
    if (window.confirm('Are you sure you want to toggle it?')) return;
    event.preventDefault();
  }
</script>

<style scoped>
  .center {
    text-align: center;
  }
</style>
