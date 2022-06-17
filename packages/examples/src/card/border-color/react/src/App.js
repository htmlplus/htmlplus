import { Element } from '@htmlplus/element';
import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Card } from "TODO";
import { Grid.Item } from "TODO";
import { Card } from "TODO";
import { Grid.Item } from "TODO";
import { Card } from "TODO";

const CardBorderColor = () => {
  return <>    
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
  </>;
};

export default CardBorderColor;