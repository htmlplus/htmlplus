<template>
  <div>  
    <plus-grid justify-content="evenly" gutter="md">    
      <plus-grid-item xs="12" sm="auto">      
        <plus-transition name="fade-in" repeat="infinite">
          HTMLPLUS
        </plus-transition>      
      </plus-grid-item>    
      <plus-grid-item xs="12" sm="auto">      
        <plus-transition name="fade-out" repeat="infinite">
          HTMLPLUS
        </plus-transition>      
      </plus-grid-item>    
    </plus-grid>  
  </div>
</template>

<script>
  import { Element } from '@htmlplus/element';
</script>

<style scoped>
  plus-grid-item {
    text-align: center;
  }
</style>

