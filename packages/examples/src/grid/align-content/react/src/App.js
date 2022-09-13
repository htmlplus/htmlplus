import { Grid } from '@htmlplus/react';

const GridAlignContent = () => {
  return (
    <Grid alignContent="center">
      <Grid.Item xs="6">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="grow">
        <div>Item</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridAlignContent;
