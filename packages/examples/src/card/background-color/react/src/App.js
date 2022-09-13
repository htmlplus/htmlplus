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

export default CardBackgroundColor;
