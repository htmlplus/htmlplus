import { Cropper } from '@htmlplus/react';

const CropperBackground = () => {
  return (
    <Cropper background view="none" src="/assets/images/panda.jpg"></Cropper>
  );
};

const CropperBackgroundExample = () => {
  return (
    <div className="ex-cropper-background dock">
      <CropperBackground />
      <style>{`undefined`}</style>
    </div>
  )
};

export default CropperBackgroundExample;