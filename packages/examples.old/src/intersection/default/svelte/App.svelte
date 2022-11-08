<script>
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/intersection.js';
let intersecting = false;

function onChange(event) {
  intersecting = event.detail.isIntersecting;
}

</script>

<div class="container">
  <div class="status">{intersecting ? 'In Viewport' : 'Out of Viewport'}</div>
  <div class="content">
    <div class="spacer"></div>
    <plus-intersection on:plus-change="{event => onChange(event)}">
      <plus-card elevation="10">
        <plus-card-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </plus-card-body>
      </plus-card>
    </plus-intersection>
    <div class="spacer"></div>
  </div>
</div>


<style>
.container {
  position: relative;
  background-color: #eeeeee;
}

.status {
  color: #fafafa;
  background-color: #212121;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  z-index: 1;
}

.content {
  height: 20rem;
  overflow: auto;
}

.spacer {
  padding: 500px 0;
}

plus-card {
  width: 15rem;
  margin: auto;
}

</style>
