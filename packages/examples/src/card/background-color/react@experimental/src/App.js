import '@htmlplus/core/card.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const CardBackgroundColor = () => {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="pink"></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="yellow"></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="blue"></plus-card>
      </plus-grid-item>
    </plus-grid>
  );
};

export default CardBackgroundColor;
