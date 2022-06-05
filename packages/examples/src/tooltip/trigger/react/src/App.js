import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Tooltip } from "TODO";
import { Grid.Item } from "TODO";
import { Tooltip } from "TODO";
import { Grid.Item } from "TODO";
import { Tooltip } from "TODO";

const TooltipTrigger = () => {
  return <>    
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
  </>;
};

export default TooltipTrigger;