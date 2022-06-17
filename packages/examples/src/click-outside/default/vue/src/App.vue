<template>
  <div>  
    <plus-click-outside @click="onClick()" @plusClickOutside="onClickOutside()">    
      <plus-card elevation="10">      
        <div class="container">        
          <b>[[inside]]</b>        time(s) inside clicked
          <br />        
          <b>[[outside]]</b>        time(s) outside clicked
        </div>      
      </plus-card>    
    </plus-click-outside>  
  </div>
</template>

<script>
  import { Element, State } from '@htmlplus/element';
  export default {
    data() {
      return {
        inside: 0,
        outside: 0
      };
    },
  
    methods: {
      onClick() {
        this.inside = this.inside + 1;
      },
  
      onClickOutside() {
        this.outside = this.outside + 1;
      }
  
    }
  };
</script>

<style scoped>
  .container {
    padding: 1rem;
  }
  plus-click-outside {
    margin: auto;
    display: block;
    max-width: 20rem;
  }
</style>

