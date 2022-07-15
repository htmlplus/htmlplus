import { Cropper, Grid } from "@htmlplus/react";

const CropperStyles = () => {
  return <div className="cropper-styles">    
    <Grid gutter="md">      
      <Grid.Item xs="12" sm="5">        
        <Cropper className="style-1" indicator mode="crop" shape="circle" resizer="main" resizerShape="line" src="/assets/images/penguin.jpg"></Cropper>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="7">        
        <Cropper className="style-2" indicator mode="crop" resizer="both" resizerShape="line" src="/assets/images/penguin.jpg"></Cropper>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="6">        
        <Cropper className="style-3" guides indicator mode="crop" resizer="main" resizerShape="circle" shape="circle" src="/assets/images/cat.jpg"></Cropper>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="6">        
        <Cropper className="style-4" guides mode="crop" resizer="edge" resizerShape="line" src="/assets/images/cat.jpg"></Cropper>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="7">        
        <Cropper className="style-5" backdrop background mode="crop" resizer="edge" resizerShape="line" src="/assets/images/ladybug.jpg"></Cropper>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="5">        
        <Cropper className="style-6" src="/assets/images/bear.jpg"></Cropper>        
      </Grid.Item>      
    </Grid>    
    <style>{".cropper-styles plus-cropper {  height: 250px;}.cropper-styles plus-cropper.style-1 {  --plus-cropper-resizer-size: 20px;  --plus-cropper-viewport-opacity: 0;  --plus-cropper-viewport-style: dashed;}.cropper-styles plus-cropper.style-2 {  --plus-cropper-indicator-color: #E6F018;  --plus-cropper-indicator-size: 15px;  --plus-cropper-indicator-weight: 2px;  --plus-cropper-resizer-color: black;  --plus-cropper-resizer-offset: -27px;  --plus-cropper-resizer-size: 21px;  --plus-cropper-viewport-color: #E6F018;}.cropper-styles plus-cropper.style-3 {  --plus-cropper-indicator-color: #5499C7;  --plus-cropper-guides-color: black;  --plus-cropper-resizer-color: #5499C7;  --plus-cropper-resizer-size: 15px;  --plus-cropper-viewport-color: #5499C7;  --plus-cropper-viewport-weight: 2px;}.cropper-styles plus-cropper.style-4 {  --plus-cropper-guides-weight: 2px;  --plus-cropper-resizer-size: 22px;  --plus-cropper-resizer-weight: 2px;  --plus-cropper-viewport-style: dashed;  --plus-cropper-viewport-weight: 2px;}.cropper-styles plus-cropper.style-5 {  --plus-cropper-backdrop-color: white;  --plus-cropper-backdrop-opacity: 0.7;  --plus-cropper-resizer-color: #A93226;  --plus-cropper-resizer-size: 20px;  --plus-cropper-resizer-weight: 3px;}.cropper-styles plus-cropper.style-6 {  --plus-cropper-viewport-opacity: 0;  --plus-cropper-viewport-style: dashed;}"}</style></div>;
};

export default CropperStyles;