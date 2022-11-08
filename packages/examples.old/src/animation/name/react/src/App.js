import { Animation, Grid } from '@htmlplus/react';

const AnimationName = () => {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Animation name="fade-in" iterations="Infinity" play></Animation>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Animation name="fade-out" iterations="Infinity" play></Animation>
      </Grid.Item>
    </Grid>
  );
};

export default AnimationName;
