import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const GridAlignSelf = () => {
  return (
    <plus-grid align-items="center">
      <plus-grid-item xs="grow" align-self="start">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow" align-self="end">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
};

export default GridAlignSelf;
