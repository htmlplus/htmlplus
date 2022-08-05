import { Cropper } from "@htmlplus/react";

const CropperBackground = () => {
  return <div className="ex-cropper-background dock">    
    <Cropper background view="none" src="/assets/images/panda.jpg"></Cropper>    
  </div>;
};

export default CropperBackground;