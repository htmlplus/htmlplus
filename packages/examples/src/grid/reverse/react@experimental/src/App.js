import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const GridReverse = () => {
  return (
    <plus-grid reverse>
      <plus-grid-item xs="2">
        <div>Item 1</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item 2</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item 3</div>
      </plus-grid-item>
    </plus-grid>
  );
};

export default GridReverse;
