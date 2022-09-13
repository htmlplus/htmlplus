import { Grid } from '@htmlplus/react';

const GridVertical = () => {
  return (
    <Grid alignItems="center" vertical>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="grow">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridVertical;
