import { Grid } from "@htmlplus/react";

const GridHide = () => {
  return <div className="grid-hide">    
    <Grid>      
      <Grid.Item hideSm xs="3">        
        <div>
          xs=3, hide-sm
        </div>        
      </Grid.Item>      
      <Grid.Item hideMd xs="4">        
        <div>
          xs=4, hide-md
        </div>        
      </Grid.Item>      
      <Grid.Item hideLg xs="5">        
        <div>
          xs=5, hide-lg
        </div>        
      </Grid.Item>      
    </Grid>    
    <style>{".grid-hide plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}"}</style></div>;
};

export default GridHide;