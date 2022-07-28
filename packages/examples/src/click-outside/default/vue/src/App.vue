<template>
  <div>  
    <plus-click-outside @click="onClick()" @plusClickOutside="onClickOutside()">    
      <plus-card elevation="10">      
        <plus-card-body>        
          <b>[[inside]]</b>        time(s) inside clicked
          <br />        
          <b>[[outside]]</b>        time(s) outside clicked
        </plus-card-body>      
      </plus-card>    
    </plus-click-outside>  
  </div>
</template>

<script>
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
  plus-click-outside {
    margin: auto;
    display: block;
    max-width: 20rem;
  }
</style>

