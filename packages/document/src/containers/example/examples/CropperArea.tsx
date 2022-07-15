import { Cropper } from "@htmlplus/react";

const CropperArea = () => {
  return <div className="cropper-area">    
    <Cropper area={1} src="/assets/images/panda.jpg"></Cropper>    
  </div>;
};

export default CropperArea;