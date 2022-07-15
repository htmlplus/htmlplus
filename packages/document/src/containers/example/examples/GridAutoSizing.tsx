import { Grid } from "@htmlplus/react";

const GridAutoSizing = () => {
  return <div className="ex-grid-auto-sizing">    
    <Grid>      
      <Grid.Item xs="grow">        
        <div>
          xs=grow
        </div>        
      </Grid.Item>      
      <Grid.Item xs="grow">        
        <div>
          xs=grow
        </div>        
      </Grid.Item>      
      <Grid.Item xs="grow">        
        <div>
          xs=grow
        </div>        
      </Grid.Item>      
    </Grid>    
    <Grid>      
      <Grid.Item xs="12" md="2">        
        <div>
          xs=12, md=2
        </div>        
      </Grid.Item>      
      <Grid.Item xs="grow">        
        <div>
          xs=grow
        </div>        
      </Grid.Item>      
      <Grid.Item xs="12" md="2">        
        <div>
          xs=12, md=2
        </div>        
      </Grid.Item>      
    </Grid>    
    <style>{".ex-grid-auto-sizing plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridAutoSizing;