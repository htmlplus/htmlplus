import { Card, Grid } from "@htmlplus/react";

const CardBorderColor = () => {
  return <div className="card-border-color">    
    <Grid justifyContent="evenly" gutter="md">      
      <Grid.Item xs="12" sm="auto">        
        <Card className="pink" outlined></Card>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="auto">        
        <Card className="yellow" outlined></Card>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="auto">        
        <Card className="blue" outlined></Card>        
      </Grid.Item>      
    </Grid>    
    <style>{".card-border-color plus-card {  height: 8rem;  width: 8rem;  margin: auto;}.card-border-color plus-card.pink {  --plus-card-border-color: #ef9a9a;}.card-border-color plus-card.yellow {  --plus-card-border-color: #fff59d;}.card-border-color plus-card.blue {  --plus-card-border-color: #80cbc4;}"}</style></div>;
};

export default CardBorderColor;