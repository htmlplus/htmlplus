import { Cropper, Grid } from '@htmlplus/react';

const CropperStyles = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="5">
        <Cropper
          className="style-1"
          indicator
          mode="crop"
          shape="circle"
          resizer="main"
          resizerShape="line"
          src="/assets/images/penguin.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="7">
        <Cropper
          className="style-2"
          indicator
          mode="crop"
          resizer="both"
          resizerShape="line"
          src="/assets/images/penguin.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper
          className="style-3"
          guides
          indicator
          mode="crop"
          resizer="main"
          resizerShape="circle"
          shape="circle"
          src="/assets/images/cat.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper
          className="style-4"
          guides
          mode="crop"
          resizer="edge"
          resizerShape="line"
          src="/assets/images/cat.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="7">
        <Cropper
          className="style-5"
          backdrop
          background
          mode="crop"
          resizer="edge"
          resizerShape="line"
          src="/assets/images/ladybug.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="5">
        <Cropper className="style-6" src="/assets/images/bear.jpg"></Cropper>
      </Grid.Item>
    </Grid>
  );
};

export default CropperStyles;
