import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const GridAlignItems = () => {
  return (
    <plus-grid align-items="center">
      <plus-grid-item xs="6">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
};

export default GridAlignItems;
