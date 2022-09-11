import { Grid } from '@htmlplus/react';

const GridAutoSizing = () => {
  return (
    <>
      <Grid>
        <Grid.Item xs="grow">
          <div>xs=grow</div>
        </Grid.Item>
        <Grid.Item xs="grow">
          <div>xs=grow</div>
        </Grid.Item>
        <Grid.Item xs="grow">
          <div>xs=grow</div>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item xs="12" md="2">
          <div>xs=12, md=2</div>
        </Grid.Item>
        <Grid.Item xs="grow">
          <div>xs=grow</div>
        </Grid.Item>
        <Grid.Item xs="12" md="2">
          <div>xs=12, md=2</div>
        </Grid.Item>
      </Grid>
    </>
  );
};

export default GridAutoSizing;
