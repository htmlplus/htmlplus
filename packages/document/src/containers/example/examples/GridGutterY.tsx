import { Grid } from "@htmlplus/react";

const GridGutterY = () => {
  return <div className="grid-gutter-y">    
    <Grid gutterY="md">      
      <Grid.Item xs="12" sm="6" lg="5">        
        <div>
          xs=12, sm=6, lg=5
        </div>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="6" lg="4">        
        <div>
          xs=12, sm=6, lg=4
        </div>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="7" lg="3">        
        <div>
          xs=12, sm=7, lg=3
        </div>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="5" lg="3">        
        <div>
          xs=12, sm=5, lg=3
        </div>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="5" lg="4">        
        <div>
          xs=12, sm=5, lg=4
        </div>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="7" lg="5">        
        <div>
          xs=12, sm=7, lg=5
        </div>        
      </Grid.Item>      
    </Grid>    
    <style>{".grid-gutter-y plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridGutterY;