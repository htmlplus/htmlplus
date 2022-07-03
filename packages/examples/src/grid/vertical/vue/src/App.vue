<template>
  <div>  
    <plus-grid align-items="center" vertical>    
      <plus-grid-item xs="3">      
        <div>
          Item
        </div>      
      </plus-grid-item>    
      <plus-grid-item xs="grow">      
        <div>
          Item
        </div>      
      </plus-grid-item>    
      <plus-grid-item xs="3">      
        <div>
          Item
        </div>      
      </plus-grid-item>    
    </plus-grid>  
  </div>
</template>

<style scoped>
  plus-grid {
    height: 12rem;
  }
  plus-grid div {
    color: #00BCD4;
    border: 1px solid #FFFFFF;
    background-color: #E0F7FA;
    height: 100%;
    padding: 0.5em;
    text-align: center;
  }
</style>

