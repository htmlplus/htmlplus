import { Cropper } from "@htmlplus/react";

const CropperBackdrop = () => {
  return <>    
    <Cropper backdrop={false} src="/assets/images/panda.jpg"></Cropper>    
  </>;
};

const CropperBackdropExample = () => {
  return (
    <div className="ex-cropper-backdrop">
      <CropperBackdrop />
      <style>{`undefined`}</style>
    </div>
  )
};

export default CropperBackdropExample;