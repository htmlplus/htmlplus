<template>
  <div class="center">
    <plus-breadcrumb separator="-">
      <a href="#">First</a>
      <a href="#">Second</a>
      <a href="#">Third</a>
      <a href="#">Fourth</a>
      <a href="#">Fifth</a>
    </plus-breadcrumb>
  </div>
</template>

<script setup>
  import '@htmlplus/core/breadcrumb.js';
</script>

<style scoped>
  .center {
    text-align: center;
  }
  plus-breadcrumb {
    display: inline-block;
    color: #707070;
  }
  plus-breadcrumb a {
    color: inherit;
    text-decoration: none;
  }
  plus-breadcrumb a:hover {
    text-decoration: underline;
  }
</style>
