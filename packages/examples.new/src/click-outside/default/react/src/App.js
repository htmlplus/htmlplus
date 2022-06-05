import { Element, State } from '@htmlplus/element';
import { useState } from "react";
import { useState } from "react";
import { Click.Outside } from "TODO";
import { Card } from "TODO";

const ClickOutsideDefault = () => {
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);

  const onClick = () => {
    setInside(inside + 1);
  };

  const onClickOutside = () => {
    setOutside(outside + 1);
  };

  return <>    
    <Click.Outside onClick={() => onClick()} onClickOutside={() => onClickOutside()}>      
      <Card elevation="10">        
        <div className="container">          
          <b>{inside}</b>          time(s) inside clicked
          <br />          
          <b>{outside}</b>          time(s) outside clicked
        </div>        
      </Card>      
    </Click.Outside>    
  </>;
};

export default ClickOutsideDefault;