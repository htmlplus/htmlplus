import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const GridAutoSizing = () => {
  return (
    <>
      <plus-grid>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
      </plus-grid>
      <plus-grid>
        <plus-grid-item xs="12" md="2">
          <div>xs=12, md=2</div>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
        <plus-grid-item xs="12" md="2">
          <div>xs=12, md=2</div>
        </plus-grid-item>
      </plus-grid>
    </>
  );
};

export default GridAutoSizing;
