import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Cropper } from "TODO";
import { Grid.Item } from "TODO";
import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Cropper } from "TODO";
import { Grid.Item } from "TODO";
import { Cropper } from "TODO";

const CropperShape = () => {
  return <>    
    <Grid gutter="md">      
      <Grid.Item xs="6">        
        <Cropper shape="rectangle" aspectRatio="2" src="/assets/images/panda.jpg"></Cropper>        
      </Grid.Item>      
      <Grid.Item xs="6">        
        <Grid gutter="md">          
          <Grid.Item xs="12">            
            <Cropper shape="square" src="/assets/images/panda.jpg"></Cropper>            
          </Grid.Item>          
          <Grid.Item xs="12">            
            <Cropper shape="circle" src="/assets/images/panda.jpg"></Cropper>            
          </Grid.Item>          
        </Grid>        
      </Grid.Item>      
    </Grid>    
  </>;
};

export default CropperShape;