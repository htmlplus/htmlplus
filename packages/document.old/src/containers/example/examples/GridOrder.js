/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid } from '@htmlplus/react';

const GridOrder = () => {
  return (
    <Grid>
      <Grid.Item orderXs="3" xs="grow">
        <div>order=3</div>
      </Grid.Item>
      <Grid.Item orderXs="2" xs="grow">
        <div>order=2</div>
      </Grid.Item>
      <Grid.Item orderXs="1" xs="grow">
        <div>order=1</div>
      </Grid.Item>
    </Grid>
  );
};

const GridOrderExample = () => {
  return (
    <div className="ex-grid-order">
      <GridOrder />
      <style>{`.ex-grid-order plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridOrderExample;