import { Grid } from "@htmlplus/react";

const GridDefault = () => {
  return <div className="ex-grid-default">    
    <Grid>      
      <Grid.Item xs="12" md="4">        
        <div>
          xs=12, md=4
        </div>        
      </Grid.Item>      
      <Grid.Item xs="12" md="4">        
        <div>
          xs=12, md=4
        </div>        
      </Grid.Item>      
      <Grid.Item xs="12" md="4">        
        <div>
          xs=12, md=4
        </div>        
      </Grid.Item>      
    </Grid>    
    <style>{".ex-grid-default plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridDefault;