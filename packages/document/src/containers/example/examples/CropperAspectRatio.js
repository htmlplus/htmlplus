import { Cropper } from "@htmlplus/react";

const CropperAspectRatio = () => {
  return <>    
    <Cropper aspectRatio="3/4" src="/assets/images/panda.jpg"></Cropper>    
  </>;
};

const CropperAspectRatioExample = () => {
  return (
    <div className="ex-cropper-aspect-ratio">
      <CropperAspectRatio />
      <style>{`undefined`}</style>
    </div>
  )
};

export default CropperAspectRatioExample;