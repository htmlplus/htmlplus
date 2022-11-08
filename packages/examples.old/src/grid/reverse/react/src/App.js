import { Grid } from '@htmlplus/react';

const GridReverse = () => {
  return (
    <Grid reverse>
      <Grid.Item xs="2">
        <div>Item 1</div>
      </Grid.Item>
      <Grid.Item xs="2">
        <div>Item 2</div>
      </Grid.Item>
      <Grid.Item xs="2">
        <div>Item 3</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridReverse;
