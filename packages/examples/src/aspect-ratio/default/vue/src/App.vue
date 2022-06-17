<template>
  <div>  
    <plus-aspect-ratio value="16/9">    
      <plus-card tile>
        This box will always be 16/9 (unless you put more stuff in it)
      </plus-card>    
    </plus-aspect-ratio>  
  </div>
</template>

<script>
  import { Element } from '@htmlplus/element';
</script>

<style scoped>
  plus-card {
    --plus-card-background-color: #C5CAE9;
    padding: 1rem;
  }
</style>

