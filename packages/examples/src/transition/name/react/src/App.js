import { Element } from '@htmlplus/element';
import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Transition } from "TODO";
import { Grid.Item } from "TODO";
import { Transition } from "TODO";

const TransitionName = () => {
  return <>    
    <Grid justifyContent="evenly" gutter="md">      
      <Grid.Item xs="12" sm="auto">        
        <Transition name="fade-in" repeat="infinite">
          HTMLPLUS
        </Transition>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="auto">        
        <Transition name="fade-out" repeat="infinite">
          HTMLPLUS
        </Transition>        
      </Grid.Item>      
    </Grid>    
  </>;
};

export default TransitionName;