<script>
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

</script>

<plus-grid>
  <plus-grid-item xs="3">
    <div>xs=3</div>
  </plus-grid-item>
  <plus-grid-item offset-xs="3" xs="3">
    <div>offset-xs="3", xs=3</div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div>xs=3</div>
  </plus-grid-item>
</plus-grid>


<style>
plus-grid div {
  color: #00bcd4;
  border: 1px solid #ffffff;
  background-color: #e0f7fa;
  padding: 0.5em;
  text-align: center;
}

</style>
