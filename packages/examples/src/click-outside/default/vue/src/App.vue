<template>
  <plus-click-outside @click="onClick()" @plus-click-outside="onClickOutside()">
    <plus-card elevation="10">
      <plus-card-body>
        <b>{{inside}}</b> time(s) inside clicked
        <br />
        <b>{{outside}}</b> time(s) outside clicked
      </plus-card-body>
    </plus-card>
  </plus-click-outside>
</template>

<script setup>
  import { ref } from 'path';
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/card-body.js';
  import '@htmlplus/core/click-outside.js';
  const inside = ref(0);
  const outside = ref(0);

  function onClick() {
    inside.value = inside.value + 1;
  }

  function onClickOutside() {
    outside.value = outside.value + 1;
  }
</script>

<style scoped>
  plus-click-outside {
    margin: auto;
    display: block;
    max-width: 20rem;
  }
</style>
