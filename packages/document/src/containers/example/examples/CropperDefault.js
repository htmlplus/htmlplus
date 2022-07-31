import { Cropper } from "@htmlplus/react";

const CropperDefault = () => {
  return <div className="ex-cropper-default dock">    
    <Cropper src="/assets/images/panda.jpg"></Cropper>    
  </div>;
};

export default CropperDefault;