import { Grid } from "@htmlplus/react";

const GridVertical = () => {
  return <div className="grid-vertical">    
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
    <style>{".grid-vertical plus-grid {  height: 12rem;}.grid-vertical plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  height: 100%;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridVertical;