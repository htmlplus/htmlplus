import { Element } from '@htmlplus/element';
import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Cropper } from "TODO";
import { Grid.Item } from "TODO";
import { Cropper } from "TODO";

const CropperMode = () => {
  return <>    
    <Grid gutter="md">      
      <Grid.Item xs="12" sm="6">        
        <Cropper mode="move" src="/assets/images/panda.jpg" view="none"></Cropper>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="6">        
        <Cropper mode="crop" src="/assets/images/panda.jpg"></Cropper>        
      </Grid.Item>      
    </Grid>    
  </>;
};

export default CropperMode;