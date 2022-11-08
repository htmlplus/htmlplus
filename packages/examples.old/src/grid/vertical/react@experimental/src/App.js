import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const GridVertical = () => {
  return (
    <plus-grid align-items="center" vertical>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
};

export default GridVertical;
