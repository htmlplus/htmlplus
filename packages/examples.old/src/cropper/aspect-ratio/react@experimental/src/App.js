import '@htmlplus/core/cropper.js';

const CropperAspectRatio = () => {
  return (
    <plus-cropper
      aspect-ratio="3/4"
      src="/assets/images/panda.jpg"
    ></plus-cropper>
  );
};

export default CropperAspectRatio;
