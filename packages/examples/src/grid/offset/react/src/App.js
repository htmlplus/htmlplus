import { Grid } from '@htmlplus/react';

const GridOffset = () => {
  return (
    <Grid>
      <Grid.Item xs="3">
        <div>xs=3</div>
      </Grid.Item>
      <Grid.Item offsetXs="3" xs="3">
        <div>offset-xs="3", xs=3</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>xs=3</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridOffset;
