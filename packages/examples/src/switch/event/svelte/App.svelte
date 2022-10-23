<script>
import '@htmlplus/core/switch.js';

function onChange(event) {
  window.alert(`Changed state to ${event.target.checked ? 'On' : 'Off'}`);
}

</script>

<div class="center">
  <plus-switch on:plus-change="{event => onChange(event)}"></plus-switch>
</div>


<style>
.center {
  text-align: center;
}

</style>
