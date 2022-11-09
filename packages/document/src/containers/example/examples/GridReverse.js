/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid } from '@htmlplus/react';

const GridReverse = () => {
  return (
    <Grid reverse>
      <Grid.Item xs="2">
        <div>Item 1</div>
      </Grid.Item>
      <Grid.Item xs="2">
        <div>Item 2</div>
      </Grid.Item>
      <Grid.Item xs="2">
        <div>Item 3</div>
      </Grid.Item>
    </Grid>
  );
};

const GridReverseExample = () => {
  return (
    <div className="ex-grid-reverse">
      <GridReverse />
      <style>{`.ex-grid-reverse plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridReverseExample;