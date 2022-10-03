<template>
  <plus-aspect-ratio value="16/9">
    <plus-card tile>
      This box will always be 16/9 (unless you put more stuff in it)
    </plus-card>
  </plus-aspect-ratio>
</template>

<script setup>
  import '@htmlplus/core/aspect-ratio.js';
  import '@htmlplus/core/card.js';
</script>

<style scoped>
  plus-card {
    --plus-card-background-color: #c5cae9;
    padding: 1rem;
  }
</style>
