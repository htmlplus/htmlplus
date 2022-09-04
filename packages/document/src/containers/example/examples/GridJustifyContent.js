import { Grid } from "@htmlplus/react";

const GridJustifyContent = () => {
  return <>    
    <Grid justifyContent="center">      
      <Grid.Item xs="2">        
        <div>
          Item
        </div>        
      </Grid.Item>      
      <Grid.Item xs="2">        
        <div>
          Item
        </div>        
      </Grid.Item>      
      <Grid.Item xs="2">        
        <div>
          Item
        </div>        
      </Grid.Item>      
    </Grid>    
  </>;
};

const GridJustifyContentExample = () => {
  return (
    <div className="ex-grid-justify-content">
      <GridJustifyContent />
      <style>{`.ex-grid-justify-content plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridJustifyContentExample;