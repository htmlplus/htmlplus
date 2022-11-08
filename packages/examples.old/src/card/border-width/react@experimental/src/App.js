import '@htmlplus/core/card.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const CardBorderWidth = () => {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="size-1" outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="size-2" outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card className="size-3" outlined></plus-card>
      </plus-grid-item>
    </plus-grid>
  );
};

export default CardBorderWidth;
