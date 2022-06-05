<template>
  import { Element, State } from '@htmlplus/element';
  <div>  
    <plus-card :elevation="elevation"></plus-card>  
    <br />  
    <input type="range" :value="elevation" min="1" max="24" @change="onChange($event)" />  
  </div>
</template>

<script>
  import { Element, State } from '@htmlplus/element';
  export default {
    data() {
      return {
        elevation: "12"
      };
    },
  
    methods: {
      onChange(event) {
        this.elevation = event.target.value;
      }
  
    }
  };
</script>

<style scoped>
  plus-card {
    height: 12rem;
    width: 12rem;
    margin: auto;
  }
  input[type="range"] {
    display: block;
    width: 12rem;
    margin: auto;
  }
</style>

