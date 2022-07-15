import { Grid } from "@htmlplus/react";

const GridOffset = () => {
  return <div className="grid-offset">    
    <Grid>      
      <Grid.Item xs="3">        
        <div>
          xs=3
        </div>        
      </Grid.Item>      
      <Grid.Item offsetXs="3" xs="3">        
        <div>
          offset-xs="3", xs=3
        </div>        
      </Grid.Item>      
      <Grid.Item xs="3">        
        <div>
          xs=3
        </div>        
      </Grid.Item>      
    </Grid>    
    <style>{".grid-offset plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridOffset;