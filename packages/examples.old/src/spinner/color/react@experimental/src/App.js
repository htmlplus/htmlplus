import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/spinner.js';

const SpinnerColor = () => {
  return (
    <plus-grid justify-content="evenly">
      <plus-grid-item>
        <plus-spinner className="spinner-1"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner className="spinner-2"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner className="spinner-3"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner className="spinner-4"></plus-spinner>
      </plus-grid-item>
      <plus-grid-item>
        <plus-spinner className="spinner-5"></plus-spinner>
      </plus-grid-item>
    </plus-grid>
  );
};

export default SpinnerColor;
