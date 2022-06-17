<template>
  <div>  
    <div class="center">    
      <plus-spinner type="dual-ring"></plus-spinner>    
    </div>  
  </div>
</template>

<script>
  import { Element } from '@htmlplus/element';
</script>

<style scoped>
  .center {
    text-align: center;
  }
  plus-spinner {
    --plus-spinner-size: 5rem;
    --plus-spinner-weight: 0.5;
    --plus-spinner-color: purple;
  }
</style>

