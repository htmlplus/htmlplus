import { Cropper, Grid } from "@htmlplus/react";

const CropperShape = () => {
  return <div className="cropper-shape">    
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
    <style>{".cropper-shape plus-cropper[shape=\"rectangle\"] {  height: 100%;}"}</style></div>;
};

export default CropperShape;