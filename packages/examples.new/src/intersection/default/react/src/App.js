import { Element, State } from '@htmlplus/element';
import { useState } from "react";
import { Intersection } from "TODO";
import { Card } from "TODO";

const IntersectionDefault = () => {
  const [intersecting, setIntersecting] = useState(false);

  const onChange = event => {
    setIntersecting(event.detail.isIntersecting);
  };

  return <>    
    <div className="container">      
      <div className="status">        
        {intersecting ? 'In Viewport' : 'Out of Viewport'}        
      </div>      
      <div className="content">        
        <div className="spacer"></div>        
        <Intersection onChange={event => onChange(event)}>          
          <Card elevation="10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>          
        </Intersection>        
        <div className="spacer"></div>        
      </div>      
    </div>    
  </>;
};

export default IntersectionDefault;