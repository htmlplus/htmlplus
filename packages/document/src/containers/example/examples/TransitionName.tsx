import { Grid, Transition } from "@htmlplus/react";

const TransitionName = () => {
  return <div className="transition-name">    
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
    <style>{".transition-name plus-grid-item {  text-align: center;}"}</style></div>;
};

export default TransitionName;