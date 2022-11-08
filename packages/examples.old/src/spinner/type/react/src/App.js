import { Grid, Spinner } from '@htmlplus/react';

const SpinnerType = () => {
  return (
    <Grid justifyContent="evenly">
      <Grid.Item>
        <Spinner type="default"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner type="double-bounce"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner type="ring"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner type="ripple"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner type="dual-ring"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner type="square"></Spinner>
      </Grid.Item>
    </Grid>
  );
};

export default SpinnerType;
