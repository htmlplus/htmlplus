import { Element } from '@htmlplus/element';
import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Grid.Item } from "TODO";
import { Grid.Item } from "TODO";

const GridVertical = () => {
  return <>    
    <Grid alignItems="center" vertical>      
      <Grid.Item xs="3">        
        <div>
          Item
        </div>        
      </Grid.Item>      
      <Grid.Item xs="grow">        
        <div>
          Item
        </div>        
      </Grid.Item>      
      <Grid.Item xs="3">        
        <div>
          Item
        </div>        
      </Grid.Item>      
    </Grid>    
  </>;
};

export default GridVertical;