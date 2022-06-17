import { Element } from '@htmlplus/element';
import { Tooltip } from "TODO";

const TooltipDefault = () => {
  return <>    
    <div className="center">      
      <button>
        Button
        <Tooltip>          Tooltip</Tooltip>        
      </button>      
    </div>    
  </>;
};

export default TooltipDefault;