<template>
  <div class="center">
    <plus-avatar-group>
      <plus-avatar size="xs">xs</plus-avatar>
      <plus-avatar size="sm">sm</plus-avatar>
      <plus-avatar size="md">md</plus-avatar>
      <plus-avatar size="lg">lg</plus-avatar>
      <plus-avatar size="xl">xl</plus-avatar>
    </plus-avatar-group>
  </div>
</template>

<script setup>
  import '@htmlplus/core/avatar.js';
  import '@htmlplus/core/avatar-group.js';
</script>

<style scoped>
  .center {
    text-align: center;
  }
</style>
