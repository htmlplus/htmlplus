import { Cropper } from "@htmlplus/react";

const CropperIndicator = () => {
  return <div className="ex-cropper-indicator dock">    
    <Cropper indicator src="/assets/images/panda.jpg"></Cropper>    
  </div>;
};

export default CropperIndicator;