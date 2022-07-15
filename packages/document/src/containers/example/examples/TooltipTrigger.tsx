import { Grid, Tooltip } from "@htmlplus/react";

const TooltipTrigger = () => {
  return <div className="tooltip-trigger">    
    <Grid justifyContent="evenly">      
      <Grid.Item>        
        <button>
          Hover
          <Tooltip trigger="hover">
            Tooltip
          </Tooltip>          
        </button>        
      </Grid.Item>      
      <Grid.Item>        
        <button>
          Focus
          <Tooltip trigger="focus">
            Tooltip
          </Tooltip>          
        </button>        
      </Grid.Item>      
      <Grid.Item>        
        <button>
          Click
          <Tooltip trigger="click">
            Tooltip
          </Tooltip>          
        </button>        
      </Grid.Item>      
    </Grid>    
  </div>;
};

export default TooltipTrigger;