import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const GridDefault = () => {
  return (
    <plus-grid>
      <plus-grid-item xs="12" md="4">
        <div>xs=12, md=4</div>
      </plus-grid-item>
      <plus-grid-item xs="12" md="4">
        <div>xs=12, md=4</div>
      </plus-grid-item>
      <plus-grid-item xs="12" md="4">
        <div>xs=12, md=4</div>
      </plus-grid-item>
    </plus-grid>
  );
};

export default GridDefault;
