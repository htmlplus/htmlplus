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

export default CardTile;
