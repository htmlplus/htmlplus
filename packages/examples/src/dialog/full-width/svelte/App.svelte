<script>
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-toggler.js';

</script>

<div class="center">
  <plus-dialog-toggler connector="dialog-full-width">
    Open
  </plus-dialog-toggler>
</div>
<plus-dialog animation="fade" connector="dialog-full-width" full-width>
  <plus-dialog-content>
    <plus-dialog-body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </plus-dialog-body>
  </plus-dialog-content>
</plus-dialog>


<style>
.center {
  text-align: center;
}

</style>
