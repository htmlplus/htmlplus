<script>
import '@htmlplus/core/card.js';
let elevation = '12';

function onChange(event) {
  elevation = event.target.value;
}

</script>

<plus-card elevation="{elevation}"></plus-card>
<br />
<input
  type="range"
  value="{elevation}"
  min="1"
  max="24"
  on:change="{event => onChange(event)}"
/>


<style>
plus-card {
  height: 12rem;
  width: 12rem;
  margin: auto;
}
input[type='range'] {
  display: block;
  width: 12rem;
  margin: auto;
}

</style>
