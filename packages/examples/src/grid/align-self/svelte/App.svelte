<script>
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

</script>

<plus-grid align-items="center">
  <plus-grid-item xs="grow" align-self="start">
    <div>Item</div>
  </plus-grid-item>
  <plus-grid-item xs="grow">
    <div>Item</div>
  </plus-grid-item>
  <plus-grid-item xs="grow" align-self="end">
    <div>Item</div>
  </plus-grid-item>
</plus-grid>


<style>
plus-grid {
  background-color: #eeeeee;
  height: 8rem;
}
plus-grid div {
  color: #00bcd4;
  border: 1px solid #ffffff;
  background-color: #e0f7fa;
  padding: 0.5em;
  text-align: center;
}

</style>
