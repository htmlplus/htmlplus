<template>
  <div>  
    <div class="center">    
      <plus-counter to="1000" :play="play" @plusComplete="play = false"></plus-counter>    
      <br />    
      <br />    
      <button @click="play = true">      Start</button>    
      <button @click="play = false">      Reset</button>    
    </div>  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        play: false
      };
    }
  
  };
</script>

<style scoped>
  .center {
    text-align: center;
  }
  button {
    margin: 0 1rem;
  }
</style>

