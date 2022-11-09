/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid } from '@htmlplus/react';

const GridAlignContent = () => {
  return (
    <Grid alignContent="center">
      <Grid.Item xs="6">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="grow">
        <div>Item</div>
      </Grid.Item>
    </Grid>
  );
};

const GridAlignContentExample = () => {
  return (
    <div className="ex-grid-align-content">
      <GridAlignContent />
      <style>{`.ex-grid-align-content plus-grid {  background-color: #eeeeee;  height: 8rem;}.ex-grid-align-content plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridAlignContentExample;