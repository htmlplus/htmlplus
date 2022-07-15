import { Grid } from "@htmlplus/react";

const GridOrder = () => {
  return <div className="ex-grid-order">    
    <Grid>      
      <Grid.Item orderXs="3" xs="grow">        
        <div>
          order=3
        </div>        
      </Grid.Item>      
      <Grid.Item orderXs="2" xs="grow">        
        <div>
          order=2
        </div>        
      </Grid.Item>      
      <Grid.Item orderXs="1" xs="grow">        
        <div>
          order=1
        </div>        
      </Grid.Item>      
    </Grid>    
    <style>{".ex-grid-order plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridOrder;