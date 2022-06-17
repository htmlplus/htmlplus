<template>
  <div>  
    <div class="center">    
      <plus-dialog-toggler connector="dialog-cropper">
        Open
      </plus-dialog-toggler>    
    </div>  
    <plus-dialog animation="fade" connector="dialog-cropper" @plusOpened="change(false)" @plusClosed="change(true)">    
      <plus-dialog-content>      
        <plus-dialog-header>        Cropper</plus-dialog-header>      
        <plus-dialog-body>        
          <plus-cropper :disabled="disabled" src="/assets/images/panda.jpg"></plus-cropper>        
        </plus-dialog-body>      
        <plus-dialog-footer>        
          <plus-dialog-toggler>          Close</plus-dialog-toggler>        
        </plus-dialog-footer>      
      </plus-dialog-content>    
    </plus-dialog>  
  </div>
</template>

<script>
  import { Element, State } from '@htmlplus/element';
  export default {
    data() {
      return {
        disabled: true
      };
    },
  
    methods: {
      change(disabled) {
        this.disabled = disabled;
      }
  
    }
  };
</script>

<style scoped>
  .center {
    text-align: center;
  }
</style>

