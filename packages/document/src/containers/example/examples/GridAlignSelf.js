/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid } from '@htmlplus/react';

const GridAlignSelf = () => {
  return (
    <Grid alignItems="center">
      <Grid.Item xs="grow" alignSelf="start">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="grow">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="grow" alignSelf="end">
        <div>Item</div>
      </Grid.Item>
    </Grid>
  );
};

const GridAlignSelfExample = () => {
  return (
    <div className="ex-grid-align-self">
      <GridAlignSelf />
      <style>{`.ex-grid-align-self plus-grid {  background-color: #eeeeee;  height: 8rem;}.ex-grid-align-self plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridAlignSelfExample;