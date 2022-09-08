<script>
import '@htmlplus/core/switch.js';

function ensure(event) {
  if (window.confirm('Are you sure you want to toggle it?')) return;
  event.preventDefault();
}

</script>

<div class="center">
  <plus-switch on:plus-change="{event => ensure(event)}"></plus-switch>
</div>


<style>
.center {
  text-align: center;
}

</style>
