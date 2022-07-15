import { Cropper } from "@htmlplus/react";

const CropperAspectRatio = () => {
  return <div className="cropper-aspect-ratio">    
    <Cropper aspectRatio="3/4" src="/assets/images/panda.jpg"></Cropper>    
  </div>;
};

export default CropperAspectRatio;