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

export default CardBorderWidth;
