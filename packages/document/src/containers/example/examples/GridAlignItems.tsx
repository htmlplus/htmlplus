import { Grid } from "@htmlplus/react";

const GridAlignItems = () => {
  return <div className="ex-grid-align-items">    
    <Grid alignItems="center">      
      <Grid.Item xs="6">        
        <div>
          Item
        </div>        
      </Grid.Item>      
      <Grid.Item xs="3">        
        <div>
          Item
        </div>        
      </Grid.Item>      
      <Grid.Item xs="3">        
        <div>
          Item
        </div>        
      </Grid.Item>      
      <Grid.Item xs="3">        
        <div>
          Item
        </div>        
      </Grid.Item>      
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
    </Grid>    
    <style>{".ex-grid-align-items plus-grid {  background-color: #EEEEEE;  height: 8rem;}.ex-grid-align-items plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridAlignItems;