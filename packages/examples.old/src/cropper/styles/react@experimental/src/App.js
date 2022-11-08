import '@htmlplus/core/cropper.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const CropperStyles = () => {
  return (
    <plus-grid gutter="md">
      <plus-grid-item xs="12" sm="5">
        <plus-cropper
          className="style-1"
          indicator
          mode="crop"
          shape="circle"
          resizer="main"
          resizer-shape="line"
          src="/assets/images/penguin.jpg"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="7">
        <plus-cropper
          className="style-2"
          indicator
          mode="crop"
          resizer="both"
          resizer-shape="line"
          src="/assets/images/penguin.jpg"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          className="style-3"
          guides
          indicator
          mode="crop"
          resizer="main"
          resizer-shape="circle"
          shape="circle"
          src="/assets/images/cat.jpg"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          className="style-4"
          guides
          mode="crop"
          resizer="edge"
          resizer-shape="line"
          src="/assets/images/cat.jpg"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="7">
        <plus-cropper
          className="style-5"
          backdrop
          background
          mode="crop"
          resizer="edge"
          resizer-shape="line"
          src="/assets/images/ladybug.jpg"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="5">
        <plus-cropper
          className="style-6"
          src="/assets/images/bear.jpg"
        ></plus-cropper>
      </plus-grid-item>
    </plus-grid>
  );
};

export default CropperStyles;
