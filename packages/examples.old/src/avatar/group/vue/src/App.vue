<template>
  <div class="center">
    <plus-avatar-group>
      <plus-avatar>
        <img src="http://placeimg.com/91/91/people" />
      </plus-avatar>
      <plus-avatar>
        <img src="http://placeimg.com/92/92/people" />
      </plus-avatar>
      <plus-avatar>
        <img src="http://placeimg.com/93/93/people" />
      </plus-avatar>
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
