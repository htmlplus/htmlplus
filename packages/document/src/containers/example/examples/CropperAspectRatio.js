import { Cropper } from "@htmlplus/react";

const CropperAspectRatio = () => {
  return <div className="ex-cropper-aspect-ratio dock">    
    <Cropper aspectRatio="3/4" src="/assets/images/panda.jpg"></Cropper>    
  </div>;
};

export default CropperAspectRatio;