import '@htmlplus/core/aspect-ratio.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const AspectRatioMore = () => {
  return (
    <plus-grid>
      <plus-grid-item xs="12" sm="6">
        <plus-grid>
          <plus-grid-item xs="12">
            <plus-aspect-ratio value="3/2" className="ratio-one">
              <div className="box one">3/2</div>
            </plus-aspect-ratio>
          </plus-grid-item>
          <plus-grid-item xs="12">
            <plus-aspect-ratio value="16/9">
              <div className="box two">16/9</div>
            </plus-aspect-ratio>
          </plus-grid-item>
        </plus-grid>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-grid>
          <plus-grid-item xs="6">
            <plus-aspect-ratio value="1">
              <div className="box three">1/1</div>
            </plus-aspect-ratio>
          </plus-grid-item>
          <plus-grid-item xs="6" align-self="end">
            <plus-aspect-ratio value="4/3">
              <div className="box four">4/3</div>
            </plus-aspect-ratio>
          </plus-grid-item>
          <plus-grid-item xs="12">
            <plus-aspect-ratio value="18/6">
              <div className="box five">18/6</div>
            </plus-aspect-ratio>
          </plus-grid-item>
        </plus-grid>
      </plus-grid-item>
    </plus-grid>
  );
};

export default AspectRatioMore;
