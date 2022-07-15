import { Grid } from "@htmlplus/react";

const GridGutterX = () => {
  return <div className="ex-grid-gutter-x">    
    <Grid gutterX="md">      
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
    <style>{".ex-grid-gutter-x plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridGutterX;