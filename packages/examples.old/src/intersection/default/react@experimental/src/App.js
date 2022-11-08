import { useState } from 'react';
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/intersection.js';

const IntersectionDefault = () => {
  const [intersecting, setIntersecting] = useState(false);

  const onChange = (event) => {
    setIntersecting(event.detail.isIntersecting);
  };

  return (
    <div className="container">
      <div className="status">
        {intersecting ? 'In Viewport' : 'Out of Viewport'}
      </div>
      <div className="content">
        <div className="spacer"></div>
        <plus-intersection onplus-change={(event) => onChange(event)}>
          <plus-card elevation="10">
            <plus-card-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </plus-card-body>
          </plus-card>
        </plus-intersection>
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default IntersectionDefault;
