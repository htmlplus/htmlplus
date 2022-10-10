import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const GridGutterY = () => {
  return (
    <plus-grid gutter-y="md">
      <plus-grid-item xs="12" sm="6" lg="5">
        <div>xs=12, sm=6, lg=5</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6" lg="4">
        <div>xs=12, sm=6, lg=4</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="7" lg="3">
        <div>xs=12, sm=7, lg=3</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="5" lg="3">
        <div>xs=12, sm=5, lg=3</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="5" lg="4">
        <div>xs=12, sm=5, lg=4</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="7" lg="5">
        <div>xs=12, sm=7, lg=5</div>
      </plus-grid-item>
    </plus-grid>
  );
};

export default GridGutterY;
