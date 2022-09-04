import { Cropper } from "@htmlplus/react";

const CropperIndicator = () => {
  return <>    
    <Cropper indicator src="/assets/images/panda.jpg"></Cropper>    
  </>;
};

const CropperIndicatorExample = () => {
  return (
    <div className="ex-cropper-indicator">
      <CropperIndicator />
      <style>{`undefined`}</style>
    </div>
  )
};

export default CropperIndicatorExample;