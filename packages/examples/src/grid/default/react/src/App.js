import { Grid } from '@htmlplus/react';

const GridDefault = () => {
  return (
    <Grid>
      <Grid.Item xs="12" md="4">
        <div>xs=12, md=4</div>
      </Grid.Item>
      <Grid.Item xs="12" md="4">
        <div>xs=12, md=4</div>
      </Grid.Item>
      <Grid.Item xs="12" md="4">
        <div>xs=12, md=4</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridDefault;
