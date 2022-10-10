import '@htmlplus/core/card.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const CardTile = () => {
  return (
    <div className="container">
      <plus-grid justify-content="evenly" gutter="md">
        <plus-grid-item xs="12" sm="auto">
          <plus-card tile></plus-card>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <plus-card tile outlined></plus-card>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <plus-card tile elevation="5"></plus-card>
        </plus-grid-item>
      </plus-grid>
    </div>
  );
};

export default CardTile;
