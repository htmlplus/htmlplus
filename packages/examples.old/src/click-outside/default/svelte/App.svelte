<script>
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/click-outside.js';
let inside = 0;
let outside = 0;

function onClick() {
  inside = inside + 1;
}

function onClickOutside() {
  outside = outside + 1;
}

</script>

<plus-click-outside
  on:click="{() => onClick()}"
  on:plus-click-outside="{() => onClickOutside()}"
>
  <plus-card elevation="10">
    <plus-card-body>
      <b>{inside}</b> time(s) inside clicked
      <br />
      <b>{outside}</b> time(s) outside clicked
    </plus-card-body>
  </plus-card>
</plus-click-outside>


<style>
plus-click-outside {
  margin: auto;
  display: block;
  max-width: 20rem;
}

</style>
