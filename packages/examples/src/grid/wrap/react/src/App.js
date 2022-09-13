import { Grid } from '@htmlplus/react';

const GridWrap = () => {
  return (
    <Grid wrap="off">
      <Grid.Item xs="6">
        <div>xs=6</div>
      </Grid.Item>
      <Grid.Item xs="2">
        <div>xs=2</div>
      </Grid.Item>
      <Grid.Item xs="6">
        <div>xs=6</div>
      </Grid.Item>
      <Grid.Item xs="2">
        <div>xs=2</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridWrap;
