<template>
  <div>  
    <plus-browse droppable @plusChange="onChange($event)"></plus-browse>  
  </div>
</template>

<script>
  export default {
    methods: {
      onChange(event) {
        const name = event.detail.files[0].file.name;
        alert(`File '${name}' selected.`);
      }
  
    }
  };
</script>

<style scoped>
  plus-browse {
    background: white;
    border: 2px dashed #e0e0e0;
    border-radius: 4px;
    display: block;
    padding: 3rem;
    text-align: center;
  }
  plus-browse[dragging]:not([dragging=false]) {
    border-color: #0087f7;
  }
</style>

