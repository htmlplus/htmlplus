import { Card, Grid } from "@htmlplus/react";

const CardBackgroundColor = () => {
  return <div className="card-background-color">    
    <Grid justifyContent="evenly" gutter="md">      
      <Grid.Item xs="12" sm="auto">        
        <Card className="pink"></Card>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="auto">        
        <Card className="yellow"></Card>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="auto">        
        <Card className="blue"></Card>        
      </Grid.Item>      
    </Grid>    
    <style>{".card-background-color plus-card {  height: 12rem;  width: 12rem;  margin: auto;}.card-background-color plus-card.pink {  --plus-card-background-color: #ef9a9a;}.card-background-color plus-card.yellow {  --plus-card-background-color: #fff59d;}.card-background-color plus-card.blue {  --plus-card-background-color: #80cbc4;}"}</style></div>;
};

export default CardBackgroundColor;