<template>
  <plus-grid>
    <plus-grid-item xs="12" sm="6">
      <plus-grid>
        <plus-grid-item xs="12">
          <plus-aspect-ratio value="3/2" class="ratio-one">
            <div class="box one">3/2</div>
          </plus-aspect-ratio>
        </plus-grid-item>
        <plus-grid-item xs="12">
          <plus-aspect-ratio value="16/9">
            <div class="box two">16/9</div>
          </plus-aspect-ratio>
        </plus-grid-item>
      </plus-grid>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="6">
      <plus-grid>
        <plus-grid-item xs="6">
          <plus-aspect-ratio value="1">
            <div class="box three">1/1</div>
          </plus-aspect-ratio>
        </plus-grid-item>
        <plus-grid-item xs="6" align-self="end">
          <plus-aspect-ratio value="4/3">
            <div class="box four">4/3</div>
          </plus-aspect-ratio>
        </plus-grid-item>
        <plus-grid-item xs="12">
          <plus-aspect-ratio value="18/6">
            <div class="box five">18/6</div>
          </plus-aspect-ratio>
        </plus-grid-item>
      </plus-grid>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/core/aspect-ratio.js';
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
</script>

<style scoped>
  .box {
    color: white;
    padding: 0.75rem;
    margin: 0.25rem;
  }
  .ratio-one {
    width: 40.625%;
    float: right;
  }
  .one {
    background: #08dfc8;
  }
  .two {
    background: #ff5449;
  }
  .three {
    background: #5f9ee9;
  }
  .four {
    background: #ffc903;
  }
  .five {
    background: #9073c1;
  }
</style>
