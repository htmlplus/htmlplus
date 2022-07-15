import { Cropper } from "@htmlplus/react";

const CropperBackdrop = () => {
  return <div className="cropper-backdrop">    
    <Cropper backdrop={false} src="/assets/images/panda.jpg"></Cropper>    
  </div>;
};

export default CropperBackdrop;