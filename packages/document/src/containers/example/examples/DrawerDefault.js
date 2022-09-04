import { Card, Drawer, Grid } from "@htmlplus/react";

const DrawerDefault = () => {
  return <>    
    <Grid>      
      <Grid.Item xs="auto">        
        <Drawer animation="fade" size="200px" connector="drawer-default">          
          <Card>
            Drawer Content
          </Card>          
        </Drawer>        
      </Grid.Item>      
      <Grid.Item xs="grow">        
        <Card>          
          <Drawer.Toggler connector="drawer-default">
            Toggle
          </Drawer.Toggler>          
        </Card>        
      </Grid.Item>      
    </Grid>    
  </>;
};

const DrawerDefaultExample = () => {
  return (
    <div className="ex-drawer-default">
      <DrawerDefault />
      <style>{`.ex-drawer-default plus-card {  --plus-card-background-color: #E0E0E0;  padding: 10rem 0;  text-align: center;}.ex-drawer-default plus-drawer plus-card {  --plus-card-background-color: #AACAFF;  margin-right: 0.5rem;}`}</style>
    </div>
  )
};

export default DrawerDefaultExample;