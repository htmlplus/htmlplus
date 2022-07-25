<template>
  <div>  
    <plus-grid justify-content="evenly" gutter="md">    
      <plus-grid-item xs="12" sm="auto">      
        <plus-animation name="fade-in" iterations="Infinity" play></plus-animation>      
      </plus-grid-item>    
      <plus-grid-item xs="12" sm="auto">      
        <plus-animation name="fade-out" iterations="Infinity" play></plus-animation>      
      </plus-grid-item>    
    </plus-grid>  
  </div>
</template>

<style scoped>
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
    margin: auto;
  }
</style>

