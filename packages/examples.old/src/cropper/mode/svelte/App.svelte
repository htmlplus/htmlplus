<script>
import '@htmlplus/core/cropper.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

</script>

<plus-grid gutter="md">
  <plus-grid-item xs="12" sm="6">
    <plus-cropper
      mode="move"
      src="/assets/images/panda.jpg"
      view="none"
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6">
    <plus-cropper mode="crop" src="/assets/images/panda.jpg"></plus-cropper>
  </plus-grid-item>
</plus-grid>


<style>
plus-cropper {
  height: 18rem;
}

</style>
