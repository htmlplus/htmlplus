import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const GridJustifyContent = () => {
  return (
    <plus-grid justify-content="center">
      <plus-grid-item xs="2">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
};

export default GridJustifyContent;
