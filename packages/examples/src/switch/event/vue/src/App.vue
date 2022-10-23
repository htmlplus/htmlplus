<template>
  <div class="center">
    <plus-switch @plus-change="onChange($event)"></plus-switch>
  </div>
</template>

<script setup>
  import '@htmlplus/core/switch.js';

  function onChange(event) {
    window.alert(`Changed state to ${event.target.checked ? 'On' : 'Off'}`);
  }
</script>

<style scoped>
  .center {
    text-align: center;
  }
</style>
