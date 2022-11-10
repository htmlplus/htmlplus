/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Card, Grid } from '@htmlplus/react';

const CardBorderWidth = () => {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Card className="size-1" outlined></Card>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Card className="size-2" outlined></Card>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Card className="size-3" outlined></Card>
      </Grid.Item>
    </Grid>
  );
};

const CardBorderWidthExample = () => {
  return (
    <div className="ex-card-border-width">
      <CardBorderWidth />
      <style>{`.ex-card-border-width plus-card {  height: 8rem;  width: 8rem;  margin: auto;}.ex-card-border-width plus-card.size-1 {  --plus-card-border-width: 1px;}.ex-card-border-width plus-card.size-2 {  --plus-card-border-width: 2px;}.ex-card-border-width plus-card.size-3 {  --plus-card-border-width: 3px;}`}</style>
    </div>
  )
};

export default CardBorderWidthExample;