import '@htmlplus/core/cropper.js';

const CropperBackground = () => {
  return (
    <plus-cropper
      background
      view="none"
      src="/assets/images/panda.jpg"
    ></plus-cropper>
  );
};

export default CropperBackground;
