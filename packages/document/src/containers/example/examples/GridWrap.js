import { Grid } from "@htmlplus/react";

const GridWrap = () => {
  return <>    
    <Grid wrap="off">      
      <Grid.Item xs="6">        
        <div>
          xs=6
        </div>        
      </Grid.Item>      
      <Grid.Item xs="2">        
        <div>
          xs=2
        </div>        
      </Grid.Item>      
      <Grid.Item xs="6">        
        <div>
          xs=6
        </div>        
      </Grid.Item>      
      <Grid.Item xs="2">        
        <div>
          xs=2
        </div>        
      </Grid.Item>      
    </Grid>    
  </>;
};

const GridWrapExample = () => {
  return (
    <div className="ex-grid-wrap">
      <GridWrap />
      <style>{`.ex-grid-wrap plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridWrapExample;