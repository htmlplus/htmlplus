import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const GridHide = () => {
  return (
    <plus-grid>
      <plus-grid-item hide-sm xs="3">
        <div>xs=3, hide-sm</div>
      </plus-grid-item>
      <plus-grid-item hide-md xs="4">
        <div>xs=4, hide-md</div>
      </plus-grid-item>
      <plus-grid-item hide-lg xs="5">
        <div>xs=5, hide-lg</div>
      </plus-grid-item>
    </plus-grid>
  );
};

export default GridHide;
