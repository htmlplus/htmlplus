<template>
  <div class="center">
    <plus-avatar-group>
      <plus-avatar shape="circle">C</plus-avatar>
      <plus-avatar shape="round">R</plus-avatar>
      <plus-avatar shape="tile">T</plus-avatar>
    </plus-avatar-group>
  </div>
</template>

<script setup>
  import '@htmlplus/core/avatar-group.js';
  import '@htmlplus/core/avatar.js';
</script>

<style scoped>
  .center {
    text-align: center;
  }
</style>
