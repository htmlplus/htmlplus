/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

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

const GridAutoSizingExample = () => {
  return (
    <div className="ex-grid-auto-sizing">
      <GridAutoSizing />
      <style>{`.ex-grid-auto-sizing plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridAutoSizingExample;