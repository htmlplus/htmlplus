import { useState } from 'react';
import { Card, Intersection } from '@htmlplus/react';

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
        <Intersection onChange={(event) => onChange(event)}>
          <Card elevation="10">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Body>
          </Card>
        </Intersection>
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default IntersectionDefault;
