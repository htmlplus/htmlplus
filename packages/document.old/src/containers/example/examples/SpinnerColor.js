/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid, Spinner } from '@htmlplus/react';

const SpinnerColor = () => {
  return (
    <Grid justifyContent="evenly">
      <Grid.Item>
        <Spinner className="spinner-1"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner className="spinner-2"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner className="spinner-3"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner className="spinner-4"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner className="spinner-5"></Spinner>
      </Grid.Item>
    </Grid>
  );
};

const SpinnerColorExample = () => {
  return (
    <div className="ex-spinner-color">
      <SpinnerColor />
      <style>{`.ex-spinner-color .spinner-1 {  --plus-spinner-color: #08dfc8;}.ex-spinner-color .spinner-2 {  --plus-spinner-color: #ff5449;}.ex-spinner-color .spinner-3 {  --plus-spinner-color: #5f9ee9;}.ex-spinner-color .spinner-4 {  --plus-spinner-color: #ffc903;}.ex-spinner-color .spinner-5 {  --plus-spinner-color: #9073c1;}`}</style>
    </div>
  )
};

export default SpinnerColorExample;