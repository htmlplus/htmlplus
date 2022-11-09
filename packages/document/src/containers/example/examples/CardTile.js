/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Card, Grid } from '@htmlplus/react';

const CardTile = () => {
  return (
    <div className="container">
      <Grid justifyContent="evenly" gutter="md">
        <Grid.Item xs="12" sm="auto">
          <Card tile></Card>
        </Grid.Item>
        <Grid.Item xs="12" sm="auto">
          <Card tile outlined></Card>
        </Grid.Item>
        <Grid.Item xs="12" sm="auto">
          <Card tile elevation="5"></Card>
        </Grid.Item>
      </Grid>
    </div>
  );
};

const CardTileExample = () => {
  return (
    <div className="ex-card-tile dock">
      <CardTile />
      <style>{`.ex-card-tile .container {  padding: 2rem 0;  background-color: #eeeeee;}.ex-card-tile plus-card {  height: 8rem;  width: 8rem;  margin: auto;}`}</style>
    </div>
  )
};

export default CardTileExample;