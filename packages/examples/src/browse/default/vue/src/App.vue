<template>
  <div>  
    <plus-browse droppable @plusChange="onChange($event)"></plus-browse>  
  </div>
</template>

<script>
  import { Element } from '@htmlplus/element';
  export default {
    methods: {
      onChange(event) {
        const name = event.detail.files[0].file.name;
        alert(`File '${name}' selected.`);
      }
  
    }
  };
</script>

