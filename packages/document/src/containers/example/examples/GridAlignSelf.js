import { Grid } from "@htmlplus/react";

const GridAlignSelf = () => {
  return <>    
    <Grid alignItems="center">      
      <Grid.Item xs="grow" alignSelf="start">        
        <div>
          Item
        </div>        
      </Grid.Item>      
      <Grid.Item xs="grow">        
        <div>
          Item
        </div>        
      </Grid.Item>      
      <Grid.Item xs="grow" alignSelf="end">        
        <div>
          Item
        </div>        
      </Grid.Item>      
    </Grid>    
  </>;
};

const GridAlignSelfExample = () => {
  return (
    <div className="ex-grid-align-self">
      <GridAlignSelf />
      <style>{`.ex-grid-align-self plus-grid {  background-color: #EEEEEE;  height: 8rem;}.ex-grid-align-self plus-grid div {  color: #00BCD4;  border: 1px solid #FFFFFF;  background-color: #E0F7FA;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridAlignSelfExample;