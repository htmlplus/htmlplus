import { Grid } from '@htmlplus/react';

const GridHide = () => {
  return (
    <Grid>
      <Grid.Item hideSm xs="3">
        <div>xs=3, hide-sm</div>
      </Grid.Item>
      <Grid.Item hideMd xs="4">
        <div>xs=4, hide-md</div>
      </Grid.Item>
      <Grid.Item hideLg xs="5">
        <div>xs=5, hide-lg</div>
      </Grid.Item>
    </Grid>
  );
};

export default GridHide;
