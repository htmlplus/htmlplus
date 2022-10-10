<script>
import '@htmlplus/core/animation.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

</script>

<plus-grid justify-content="evenly" gutter="md">
  <plus-grid-item xs="12" sm="auto">
    <plus-animation name="fade-in" iterations="Infinity" play></plus-animation>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-animation name="fade-out" iterations="Infinity" play></plus-animation>
  </plus-grid-item>
</plus-grid>


<style>
plus-animation {
  background: lightgray;
  width: 100px;
  height: 100px;
  margin: auto;
}

</style>
