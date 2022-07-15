import { Card, Grid } from "@htmlplus/react";

const CardBorderWidth = () => {
  return <div className="card-border-width">    
    <Grid justifyContent="evenly" gutter="md">      
      <Grid.Item xs="12" sm="auto">        
        <Card className="size-1" outlined></Card>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="auto">        
        <Card className="size-2" outlined></Card>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="auto">        
        <Card className="size-3" outlined></Card>        
      </Grid.Item>      
    </Grid>    
    <style>{".card-border-width plus-card {  height: 8rem;  width: 8rem;  margin: auto;}.card-border-width plus-card.size-1 {  --plus-card-border-width: 1px;}.card-border-width plus-card.size-2 {  --plus-card-border-width: 2px;}.card-border-width plus-card.size-3 {  --plus-card-border-width: 3px;}"}</style></div>;
};

export default CardBorderWidth;