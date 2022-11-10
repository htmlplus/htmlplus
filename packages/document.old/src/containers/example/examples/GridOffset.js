/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

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

const GridOffsetExample = () => {
  return (
    <div className="ex-grid-offset">
      <GridOffset />
      <style>{`.ex-grid-offset plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridOffsetExample;