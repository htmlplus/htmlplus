import { Grid } from '@htmlplus/react';

const GridGutter = () => {
  return (
    <Grid gutter="lg">
      <Grid.Item xs="12" sm="6" lg="5">
        <div>xs=12, sm=6, lg=5</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="6" lg="4">
        <div>xs=12, sm=6, lg=4</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="7" lg="3">
        <div>xs=12, sm=7, lg=3</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="5" lg="3">
        <div>xs=12, sm=5, lg=3</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="5" lg="4">
        <div>xs=12, sm=5, lg=4</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="7" lg="5">
        <div>xs=12, sm=7, lg=5</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridGutter;
