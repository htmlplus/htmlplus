import { Tooltip } from "@htmlplus/react";

const TooltipDefault = () => {
  return <div className="tooltip-default">    
    <div className="center">      
      <button>
        Button
        <Tooltip>          Tooltip</Tooltip>        
      </button>      
    </div>    
    <style>{".tooltip-default .center {  text-align: center;}"}</style></div>;
};

export default TooltipDefault;