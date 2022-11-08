<script>
import '@htmlplus/core/switch.js';

function onChange(event) {
  window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
}

</script>

<div class="center">
  <plus-switch on:plus-change="{event => onChange(event)}"></plus-switch>
</div>


<style>
.center {
  text-align: center;
  padding: 2.5rem 0;
}

</style>
