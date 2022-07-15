import { Cropper } from "@htmlplus/react";

const CropperIndicator = () => {
  return <div className="ex-cropper-indicator">    
    <Cropper indicator src="/assets/images/panda.jpg"></Cropper>    
  </div>;
};

export default CropperIndicator;