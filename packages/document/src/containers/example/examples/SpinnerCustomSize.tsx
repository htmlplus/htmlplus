import { Grid, Spinner } from "@htmlplus/react";

const SpinnerCustomSize = () => {
  return <div className="spinner-custom-size">    
    <Grid alignItems="center" justifyContent="evenly">      
      <Grid.Item>        
        <Spinner size="sm"></Spinner>        
      </Grid.Item>      
      <Grid.Item>        
        <Spinner size="md"></Spinner>        
      </Grid.Item>      
      <Grid.Item>        
        <Spinner size="lg"></Spinner>        
      </Grid.Item>      
    </Grid>    
    <style>{".spinner-custom-size plus-spinner[size=sm] {  --plus-spinner-size: 24px;}.spinner-custom-size plus-spinner[size=md] {  --plus-spinner-size: 48px;}.spinner-custom-size plus-spinner[size=lg] {  --plus-spinner-size: 72px;}"}</style></div>;
};

export default SpinnerCustomSize;