import { Grid } from "@htmlplus/react";

const GridReverse = () => {
  return <div className="grid-reverse">    
    <Grid reverse>      
      <Grid.Item xs="2">        
        <div>
          Item 1
        </div>        
      </Grid.Item>      
      <Grid.Item xs="2">        
        <div>
          Item 2
        </div>        
      </Grid.Item>      
      <Grid.Item xs="2">        
        <div>
          Item 3
        </div>        
      </Grid.Item>      
    </Grid>    
    <style>{".grid-reverse plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridReverse;