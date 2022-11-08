<template>
  <div class="center">
    <plus-switch @plus-change="onChange($event)"></plus-switch>
  </div>
</template>

<script setup>
  import '@htmlplus/core/switch.js';

  function onChange(event) {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
</script>

<style scoped>
  .center {
    text-align: center;
    padding: 2.5rem 0;
  }
</style>
