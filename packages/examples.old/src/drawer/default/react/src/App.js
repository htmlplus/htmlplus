import { Card, Drawer, Grid } from '@htmlplus/react';

const DrawerDefault = () => {
  return (
    <Grid>
      <Grid.Item xs="auto">
        <Drawer animation="fade" size="200px" connector="drawer-default">
          <Card>Drawer Content</Card>
        </Drawer>
      </Grid.Item>
      <Grid.Item xs="grow">
        <Card>
          <Drawer.Toggler connector="drawer-default">Toggle</Drawer.Toggler>
        </Card>
      </Grid.Item>
    </Grid>
  );
};

export default DrawerDefault;
