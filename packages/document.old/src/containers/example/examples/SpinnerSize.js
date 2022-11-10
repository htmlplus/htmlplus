/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid, Spinner } from '@htmlplus/react';

const SpinnerSize = () => {
  return (
    <Grid alignItems="center" justifyContent="evenly">
      <Grid.Item>
        <Spinner size="sm"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="lg"></Spinner>
      </Grid.Item>
    </Grid>
  );
};

const SpinnerSizeExample = () => {
  return (
    <div className="ex-spinner-size">
      <SpinnerSize />
      <style>{`undefined`}</style>
    </div>
  )
};

export default SpinnerSizeExample;