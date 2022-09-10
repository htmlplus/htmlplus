import { Divider, Grid } from "@htmlplus/react";

const DividerVertical = () => {
  return <>    
    <Grid alignItems="center" justifyContent="evenly">      
      <Grid.Item xs="5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend
    ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus,
    gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris
    aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus.
      </Grid.Item>      
      <Divider vertical></Divider>      
      <Grid.Item xs="5">
        Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida.
    Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel
    accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit
    imperdiet, gravida urna tempus, fringilla nisl.
      </Grid.Item>      
    </Grid>    
  </>;
};

export default DividerVertical;