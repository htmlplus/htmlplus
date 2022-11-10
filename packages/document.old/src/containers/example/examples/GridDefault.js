/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid } from '@htmlplus/react';

const GridDefault = () => {
  return (
    <Grid>
      <Grid.Item xs="12" md="4">
        <div>xs=12, md=4</div>
      </Grid.Item>
      <Grid.Item xs="12" md="4">
        <div>xs=12, md=4</div>
      </Grid.Item>
      <Grid.Item xs="12" md="4">
        <div>xs=12, md=4</div>
      </Grid.Item>
    </Grid>
  );
};

const GridDefaultExample = () => {
  return (
    <div className="ex-grid-default">
      <GridDefault />
      <style>{`.ex-grid-default plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridDefaultExample;