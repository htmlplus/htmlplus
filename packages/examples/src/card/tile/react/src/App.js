import { Element } from '@htmlplus/element';
import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Card } from "TODO";
import { Grid.Item } from "TODO";
import { Card } from "TODO";
import { Grid.Item } from "TODO";
import { Card } from "TODO";

const CardTile = () => {
  return <>    
    <div className="container">      
      <Grid justifyContent="evenly" gutter="md">        
        <Grid.Item xs="12" sm="auto">          
          <Card tile></Card>          
        </Grid.Item>        
        <Grid.Item xs="12" sm="auto">          
          <Card tile outlined></Card>          
        </Grid.Item>        
        <Grid.Item xs="12" sm="auto">          
          <Card tile elevation="5"></Card>          
        </Grid.Item>        
      </Grid>      
    </div>    
  </>;
};

export default CardTile;