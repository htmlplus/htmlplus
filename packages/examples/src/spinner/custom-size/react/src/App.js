import { Element } from '@htmlplus/element';
import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Spinner } from "TODO";
import { Grid.Item } from "TODO";
import { Spinner } from "TODO";
import { Grid.Item } from "TODO";
import { Spinner } from "TODO";

const SpinnerCustomSize = () => {
  return <>    
    <Grid alignItems="center" justifyContent="evenly">      
      <Grid.Item>        
        <Spinner size="sm"></Spinner>        
      </Grid.Item>      
      <Grid.Item>        
        <Spinner size="md"></Spinner>        
      </Grid.Item>      
      <Grid.Item>        
        <Spinner size="lg"></Spinner>        
      </Grid.Item>      
    </Grid>    
  </>;
};

export default SpinnerCustomSize;