import { Cropper, Grid } from "@htmlplus/react";

const CropperMode = () => {
  return <div className="cropper-mode">    
    <Grid gutter="md">      
      <Grid.Item xs="12" sm="6">        
        <Cropper mode="move" src="/assets/images/panda.jpg" view="none"></Cropper>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="6">        
        <Cropper mode="crop" src="/assets/images/panda.jpg"></Cropper>        
      </Grid.Item>      
    </Grid>    
    <style>{".cropper-mode plus-cropper {  height: 18rem;}"}</style></div>;
};

export default CropperMode;