/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Card, Grid } from '@htmlplus/react';

const CardBackgroundColor = () => {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Card className="pink"></Card>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Card className="yellow"></Card>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Card className="blue"></Card>
      </Grid.Item>
    </Grid>
  );
};

const CardBackgroundColorExample = () => {
  return (
    <div className="ex-card-background-color">
      <CardBackgroundColor />
      <style>{`.ex-card-background-color plus-card {  height: 12rem;  width: 12rem;  margin: auto;}.ex-card-background-color plus-card.pink {  --plus-card-background-color: #ef9a9a;}.ex-card-background-color plus-card.yellow {  --plus-card-background-color: #fff59d;}.ex-card-background-color plus-card.blue {  --plus-card-background-color: #80cbc4;}`}</style>
    </div>
  )
};

export default CardBackgroundColorExample;