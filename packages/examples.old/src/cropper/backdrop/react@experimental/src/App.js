import '@htmlplus/core/cropper.js';

const CropperBackdrop = () => {
  return (
    <plus-cropper
      backdrop={false}
      src="/assets/images/panda.jpg"
    ></plus-cropper>
  );
};

export default CropperBackdrop;
