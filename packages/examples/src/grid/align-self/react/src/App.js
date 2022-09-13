import { Grid } from '@htmlplus/react';

const GridAlignSelf = () => {
  return (
    <Grid alignItems="center">
      <Grid.Item xs="grow" alignSelf="start">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="grow">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="grow" alignSelf="end">
        <div>Item</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridAlignSelf;
