<template>
  <div>  
    <plus-grid gutter="md">    
      <plus-grid-item xs="12" sm="6">      
        <plus-cropper mode="move" src="/assets/images/panda.jpg" view="none"></plus-cropper>      
      </plus-grid-item>    
      <plus-grid-item xs="12" sm="6">      
        <plus-cropper mode="crop" src="/assets/images/panda.jpg"></plus-cropper>      
      </plus-grid-item>    
    </plus-grid>  
  </div>
</template>

<style scoped>
  plus-cropper {
    height: 18rem;
  }
</style>

