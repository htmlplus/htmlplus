/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid } from '@htmlplus/react';

const GridGutterY = () => {
  return (
    <Grid gutterY="md">
      <Grid.Item xs="12" sm="6" lg="5">
        <div>xs=12, sm=6, lg=5</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="6" lg="4">
        <div>xs=12, sm=6, lg=4</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="7" lg="3">
        <div>xs=12, sm=7, lg=3</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="5" lg="3">
        <div>xs=12, sm=5, lg=3</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="5" lg="4">
        <div>xs=12, sm=5, lg=4</div>
      </Grid.Item>
      <Grid.Item xs="12" sm="7" lg="5">
        <div>xs=12, sm=7, lg=5</div>
      </Grid.Item>
    </Grid>
  );
};

const GridGutterYExample = () => {
  return (
    <div className="ex-grid-gutter-y">
      <GridGutterY />
      <style>{`.ex-grid-gutter-y plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridGutterYExample;