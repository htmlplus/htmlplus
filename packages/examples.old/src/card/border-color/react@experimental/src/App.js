import '@htmlplus/core/card.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const CardBorderColor = () => {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="pink" outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="yellow" outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="blue" outlined></plus-card>
      </plus-grid-item>
    </plus-grid>
  );
};

export default CardBorderColor;
