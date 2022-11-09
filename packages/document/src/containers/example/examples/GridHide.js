/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid } from '@htmlplus/react';

const GridHide = () => {
  return (
    <Grid>
      <Grid.Item hideSm xs="3">
        <div>xs=3, hide-sm</div>
      </Grid.Item>
      <Grid.Item hideMd xs="4">
        <div>xs=4, hide-md</div>
      </Grid.Item>
      <Grid.Item hideLg xs="5">
        <div>xs=5, hide-lg</div>
      </Grid.Item>
    </Grid>
  );
};

const GridHideExample = () => {
  return (
    <div className="ex-grid-hide">
      <GridHide />
      <style>{`.ex-grid-hide plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridHideExample;