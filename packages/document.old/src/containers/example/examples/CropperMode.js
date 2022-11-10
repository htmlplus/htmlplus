/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Cropper, Grid } from '@htmlplus/react';

const CropperMode = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper
          mode="move"
          src="/assets/images/panda.jpg"
          view="none"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper mode="crop" src="/assets/images/panda.jpg"></Cropper>
      </Grid.Item>
    </Grid>
  );
};

const CropperModeExample = () => {
  return (
    <div className="ex-cropper-mode">
      <CropperMode />
      <style>{`.ex-cropper-mode plus-cropper {  height: 18rem;}`}</style>
    </div>
  )
};

export default CropperModeExample;