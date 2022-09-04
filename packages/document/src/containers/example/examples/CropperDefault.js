import { Cropper } from "@htmlplus/react";

const CropperDefault = () => {
  return <>    
    <Cropper src="/assets/images/panda.jpg"></Cropper>    
  </>;
};

const CropperDefaultExample = () => {
  return (
    <div className="ex-cropper-default">
      <CropperDefault />
      <style>{`undefined`}</style>
    </div>
  )
};

export default CropperDefaultExample;