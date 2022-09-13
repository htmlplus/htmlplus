import { Grid } from '@htmlplus/react';

const GridOrder = () => {
  return (
    <Grid>
      <Grid.Item orderXs="3" xs="grow">
        <div>order=3</div>
      </Grid.Item>
      <Grid.Item orderXs="2" xs="grow">
        <div>order=2</div>
      </Grid.Item>
      <Grid.Item orderXs="1" xs="grow">
        <div>order=1</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridOrder;
