<script>
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

</script>

<plus-grid align-items="center" vertical>
  <plus-grid-item xs="3">
    <div>Item</div>
  </plus-grid-item>
  <plus-grid-item xs="grow">
    <div>Item</div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div>Item</div>
  </plus-grid-item>
</plus-grid>


<style>
plus-grid {
  height: 12rem;
}
plus-grid div {
  color: #00bcd4;
  border: 1px solid #ffffff;
  background-color: #e0f7fa;
  height: 100%;
  padding: 0.5em;
  text-align: center;
}

</style>
